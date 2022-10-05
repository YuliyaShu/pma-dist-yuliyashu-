import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService, SignUpFields } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLogIn = false;
  userUpdateForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });
  controlName = this.userUpdateForm.get('name') as FormControl;
  controlLogin = this.userUpdateForm.get('login') as FormControl;
  controlPassword = this.userUpdateForm.get('password') as FormControl;

  constructor(
    private backend: BackendService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.backend.isLogIn$.subscribe((isLogIn) => {
      this.isLogIn = isLogIn;
    });
  }

  signOut() {
    this.backend.isLogIn$.next(false);
    localStorage.setItem('isLogIn', '0');
    localStorage.removeItem('token');
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
    });
  }

  changeUserData() {
    const data = this.userUpdateForm.value as SignUpFields;
    const userId = localStorage.getItem('id') as string;
    this.backend.updateUser(userId, data).subscribe((resp) => {
      if ('id' in resp) {
        this.addInfoAboutError('Your data was successfully updated!');
        return resp;
      } else {
        return this.addInfoAboutError('failed to update your data, try later');
      }
    });
  }

  addInfoAboutError(text: string) {

    console.log(text);
  }
}

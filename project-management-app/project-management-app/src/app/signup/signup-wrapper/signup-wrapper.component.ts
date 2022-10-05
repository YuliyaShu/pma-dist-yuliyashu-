import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService, SignUpFields } from 'src/app/backend.service';

@Component({
  selector: 'app-signup-wrapper',
  templateUrl: './signup-wrapper.component.html',
  styleUrls: ['./signup-wrapper.component.scss'],
})
export class SignupWrapperComponent implements OnInit {
  authForm = new FormGroup({
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
  controlName = this.authForm.get('name') as FormControl;
  controlLogin = this.authForm.get('login') as FormControl;
  controlPassword = this.authForm.get('password') as FormControl;

  constructor(private backend: BackendService, private router: Router) {}

  ngOnInit(): void {}

  onSingUpButton() {
    if (this.authForm.invalid) {
      return;
    }
    const data = this.authForm.value as SignUpFields;
    this.backend.signUp(data).subscribe((resp) => {
      if ('id' in resp) {
        this.backend
          .logIn({
            login: data.login,
            password: data.password,
          })
          .subscribe((resp) => {
            if ('token' in resp) {
              localStorage.setItem('token', resp.token);
              this.router.navigateByUrl('/main');
            }
          });
      } else if ('noConnection' in resp) {
        this.addInfoAboutError('no Internet Connection, failed to sign up');
      } else if ('userIsExist' in resp) {
        this.addInfoAboutError(
          "user's login is already exist, change your login"
        );
      } else {
        this.addInfoAboutError('failed to sign up, try later');
      }
    });
  }

  addInfoAboutError(text: string) {
    console.log(text);
  }
}

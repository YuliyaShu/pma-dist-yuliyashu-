import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService, LogInFields } from 'src/app/backend.service';

@Injectable()
@Component({
  selector: 'app-login-wrapper',
  templateUrl: './login-wrapper.component.html',
  styleUrls: ['./login-wrapper.component.scss'],
})
export class LoginWrapperComponent implements OnInit {
  constructor(private backend: BackendService, private router: Router) {}

  authForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  controlLogin = this.authForm.get('login') as FormControl;
  controlPassword = this.authForm.get('password') as FormControl;

  ngOnInit(): void {}

  onLogInButton() {
    const data = this.authForm.value as LogInFields;
    if (this.authForm.invalid) {
      return;
    }

    this.backend.logIn(data).subscribe((resp) => {
      if ('token' in resp) {
        this.router.navigateByUrl('/main');
      } else if ('noConnection' in resp) {
        this.addInfoAboutError('no Internet Connection, failed to log in');
      } else if ('badRequest' in resp) {
        this.addInfoAboutError('invalid data, check your data');
      } else if ('userIsNotExist' in resp) {
        this.addInfoAboutError(
          'login or password is incorrect, check your data'
        );
      } else {
        this.addInfoAboutError('failed to log in, try later');
      }
    });
  }

  addInfoAboutError(text: string) {
    console.log(text);
  }
}

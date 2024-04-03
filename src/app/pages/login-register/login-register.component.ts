import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { LoginSuccessfullyComponent } from 'src/app/components/SnackBar/login-successfully/login-successfully.component';
import { MessageBoxComponent } from 'src/app/components/DialogBox/message-box/message-box.component';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent {
  durationInSeconds = 5;

  constructor(
    private _authService: AuthServiceService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _dialog: MatDialog,
    private _commService: CommunicationService
  ) {}

  mobile = new FormControl('');
  password = new FormControl('');
  forgotMobile = new FormControl('');
  registerFirstName = new FormControl('');
  registerLastName = new FormControl('');
  registerDob = new FormControl('');
  registerMail = new FormControl('');
  registerGender = new FormControl('');
  loginCredentials: any = [];
  isLogin: boolean = true;
  isForgotPass: boolean = false;
  isRegister: boolean = false;

  loginClick() {
    if (this.mobile.value?.length == 0) {
      alert('Enter Mobile Number');
    } else if (this.password.value?.length == 0) {
      alert('Enter Password');
    } else {
      this._authService
        .userLogin(this.mobile.value, this.password.value)
        .subscribe(
          (res) => {
            if (res) {
              this.loginCredentials = res;
              localStorage.setItem('access_token', this.loginCredentials.data);
              this._router.navigateByUrl('home');

              localStorage.setItem('user_info', this.loginCredentials.data);

              // const dialogData: MessageBoxComponent['data'] = {
              //   title: 'Congratulations!!',
              //   message: `You've Successfully LoggedIn`,
              // };

              // const dialogRef = this._dialog.open(MessageBoxComponent, {
              //   data: dialogData,
              // });
              alert('LoggedIn!!');
              this._commService.sendData();
            }
          },
          (error) => {
            const dialogData: MessageBoxComponent['data'] = {
              title: 'Error!!',
              message: `Correct Username or Password`,
            };

            const dialogRef = this._dialog.open(MessageBoxComponent, {
              data: dialogData,
            });
          }
        );
    }
  }

  forgotPasswordTextClick() {
    this.isLogin = false;
    this.isRegister = false;
    this.isForgotPass = true;
  }

  loginTextClick() {
    this.isLogin = true;
    this.isRegister = false;
    this.isForgotPass = false;
  }

  registerTextClick() {
    this.isLogin = false;
    this.isRegister = true;
    this.isForgotPass = false;
  }

  resetPasswordClick() {}

  getOtpClick() {}
}

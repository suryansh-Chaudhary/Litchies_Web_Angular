import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-successfully',
  templateUrl: './login-successfully.component.html',
  styleUrls: ['./login-successfully.component.css'],
})
export class LoginSuccessfullyComponent {
  snackBarRef = inject(MatSnackBarRef);
}

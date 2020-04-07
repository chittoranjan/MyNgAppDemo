import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Login } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: string;

  constructor(
    // tslint:disable-next-line: variable-name
    private _formBuilder: FormBuilder,
    public authService: AuthService) {

    this.message = '';
  }

  ngOnInit() {
    this.loginFormInstance();
  }

  loginFormInstance() {
    this.loginForm = this._formBuilder.group(new Login());
  }

  login(model: Login): boolean {
    this.message = '';
    if (!this.authService.login(model)) {
      this.message = 'Incorrect credentials.';
      setTimeout(function() {
        this.message = '';

      }.bind(this), 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}

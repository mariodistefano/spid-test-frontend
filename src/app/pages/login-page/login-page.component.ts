import { LoginComponent } from './../../components/login/login.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent],
  template: ` <app-login /> `,
  styles: ``,
})
export class LoginPageComponent {}

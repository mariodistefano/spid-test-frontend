import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <button
      style="height:200px; width:400px; backgroundColor:#119899; borderRadius:20px; color:white; fontWeight:900;fontSize:large; cursor:pointer"
      (click)="loginWithSPID()"
    >
      Entra con SPID
    </button>
  `,
  styles: ``,
})
export class LoginComponent {
  loginWithSPID() {
    window.location.href = 'http://localhost:3000/login';
  }
}

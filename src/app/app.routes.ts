import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'success', component: SuccessComponent },
];

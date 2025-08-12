
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IssuesComponent } from './issues/issues.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'issues', component: IssuesComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '', redirectTo: 'login', pathMatch: 'full' }
];

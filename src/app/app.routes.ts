import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IssuesComponent } from './issues/issues.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'issues', component: IssuesComponent, canActivate: [authGuard] },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
	{ path: '', redirectTo: 'login', pathMatch: 'full' }
];

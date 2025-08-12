import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';
  email = '';
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      window.alert('Passwords do not match!');
      return;
    }
    this.http.post('http://localhost:3000/register', {
      username: this.username,
      password: this.password,
      email: this.email
    }).subscribe({
      next: () => {
        
        window.alert('Registration successful! Please log in.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        window.alert('Registration failed! ' + err.message);
      }
    });
  }
}

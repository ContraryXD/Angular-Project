import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class CustomerLoginComponent {
  email: string = '';
  password: string = '';
  signUpEmail: string = '';
  signUpPassword: string = '';
  signUpUserName: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.loginCustomer(this.email, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/account']);
      } else {
        alert('Invalid credentials');
      }
    });
  }

  onSignUp() {
    const newUser = {
      email: this.signUpEmail,
      password: this.signUpPassword,
      userName: this.signUpUserName
    };
    this.authService.signUpCustomer(newUser).subscribe(success => {
      if (success) {
        alert('Sign up successful! Please log in.');
        const loginTab = document.getElementById('login-tab');
        if (loginTab) {
          loginTab.click();
        }
      } else {
        alert('Sign up failed');
      }
    });
  }
}

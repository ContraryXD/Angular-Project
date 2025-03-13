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

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.loginCustomer(this.email, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/account']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}

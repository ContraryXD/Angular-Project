import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.loginAdmin(this.email, this.password).subscribe(success => {
      if (!success) {
        alert('Invalid credentials');
      }
    });
  }
}

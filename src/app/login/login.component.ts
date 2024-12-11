import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.validateCredentials(this.username, this.password).subscribe(
      {
        next: (value) => {
          console.log('ok');
          // Save credentials and navigate to the notes page
          this.authService.saveCredentials(this.username, this.password);
          this.router.navigate(['/notes']);
        },
        error: (error) => {
          console.error('Error occurred:', error);
          alert('Invalid credentials. Please try again.');
        }
      }
    );
  }
}

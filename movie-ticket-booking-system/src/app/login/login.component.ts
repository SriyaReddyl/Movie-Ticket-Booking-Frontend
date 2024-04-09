import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData: any = {};

  constructor(private router: Router) { }

  onSubmit() {
    // Implement your login logic here
    console.log('Login form submitted:', this.formData);
    alert('Successfully loged in!');

    // Assuming login is successful, navigate to the movie list
    
      this.router.navigate(['/movie-list']);
    
  }
}


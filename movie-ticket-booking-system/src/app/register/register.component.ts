import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formData: any = {};

  constructor(private router: Router) { } // Inject Router in the constructor

  onSubmit() {
    // Implement your registration logic here

    // For demonstration purposes, we'll navigate to the login page after successful registration
    // Replace this with your actual registration logic
    console.log('Registration form submitted:', this.formData);
    alert('Successfully registered!');

    // After successful registration, navigate to the login page
    this.router.navigate(['/login']);
  }
}

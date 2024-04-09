import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MovieListComponent } from './movie-list/movie-list.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route redirects to home
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  // Add the register route:
  { path: 'register', component: RegisterComponent },

  // Optional: Redirect users to login after successful registration
  { path: 'register-success', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login-success', redirectTo: 'movie-list', pathMatch:'full'},
  { path: 'movie-list', component: MovieListComponent },

  // Catch-all route for unmatched URLs (404 Not Found)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

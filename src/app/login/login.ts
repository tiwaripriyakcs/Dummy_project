import { Component, signal, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../service/api-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
 
  /** VIEW HANDLING */
  currentView: 'login' | 'create' | 'forgot' = 'login';

  /** Help dropdown signal */
  showHelp = signal(false);

  /** FORMS */
  loginForm!: FormGroup;
  createForm!: FormGroup;
  forgotForm!: FormGroup;

 constructor(private apiService: ApiService)  {
    this.initializeForms();
  }

  /** Initialize reactive forms */
  initializeForms() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]]
    });

    this.createForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /** Toggle the help section */
  toggleHelp() {
    this.showHelp.set(!this.showHelp());
  }

  /** Switch between login → create → forgot */
  switchView(view: 'login' | 'create' | 'forgot') {
    this.currentView = view;

    // Reset all forms when switching view
    this.loginForm.reset();
    this.createForm.reset();
    this.forgotForm.reset();

    // Close help dropdown
    this.showHelp.set(false);
  }

  /** Handle Login submit */
handleContinue() {
  if (this.loginForm.invalid) return;

  this.apiService.loginUser(this.loginForm.value).subscribe({
    next: (res: any) => {

      // STORE TOKENS + USER
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      alert(res.message || 'Login Successful');

      this.router.navigate(['/']);
    },

    error: (err: any) => {
      console.error('Error:', err.error);
      alert('User does not exist');
    }
  });
}


  /** Handle Create Account submit */
  submitCreateAccount() {    
     if (this.createForm.invalid) return;
    this.apiService.registerUser(this.createForm.value).subscribe({
      next: (res:any) => {
        alert(res.message);
        this.switchView('login');
      },
      error: (err:any) => {
        console.error('Error:', err.error);
        alert('Something went wrong');
      }
    });

  }

  /** Handle Forgot Password */
  submitForgotPassword() {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }

    console.log('Reset Email:', this.forgotForm.value.email);
    alert('Password reset link sent to your email.');
    this.switchView('login');
  }
}

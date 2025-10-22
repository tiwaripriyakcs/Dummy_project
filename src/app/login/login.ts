
// signin.component.ts
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class Login {
  private router = inject(Router);
  email = '';
  showHelp = signal(false);

  toggleHelp(): void {
    this.showHelp.set(!this.showHelp());
  }

  handleContinue(): void {
    if (this.email.trim()) {
      console.log('Proceeding with email:', this.email);
     
        this.router.navigate(['/']);


    }
  }

  handleCreateAccount(): void {
    console.log('Navigate to create account');
    alert('Create account functionality would open here');
  }
}

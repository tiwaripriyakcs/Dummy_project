import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
currentYear = new Date().getFullYear();
  footerLinks = [
    { text: 'Terms and Privacy Notice', url: 'help' },
    { text: 'Send us feedback', url: 'login' },
    { text: 'Help', url: 'help' }
  ];
}

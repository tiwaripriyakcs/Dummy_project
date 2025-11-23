import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-slide',
  imports: [],
  templateUrl: './notification-slide.html',
  styleUrl: './notification-slide.scss'
})
export class NotificationSlide {
    private router = inject(Router);
  
  closePanel() {
    this.router.navigate([{ outlets: { sidepanel: null } }]);
  }
}

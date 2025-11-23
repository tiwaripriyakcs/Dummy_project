import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-help-page',
  imports: [CommonModule],
  templateUrl: './help-page.html',
  styleUrl: './help-page.scss'
})
export class HelpPage {
 // Use Signal to manage the state of the accordion
  // Stores the index of the currently open panel. -1 means all are closed.
  activeIndex = signal<number>(-1);

  // The accordion data structure
  accordionData = [
    { 
      title: 'Setting Up Prime Video', 
      content: 'Information about setting up your Prime Video account and devices. This includes downloading the app, logging in, and linking your TV or console to your Amazon account.' 
    },
    { 
      title: 'Cancel My Prime Video Subscription', 
      content: 'Detailed steps on how to cancel your Prime Video membership and related add-ons. You can usually find this option under your Account & Settings > Your Membership.' 
    },
    { 
      title: 'Restrictions & Parental Controls', 
      content: 'Learn how to manage content restrictions and set up parental controls on your account. You can restrict content based on age ratings and set a PIN for purchases.' 
    },
    {
      title: 'Playback Issues, Support & Device Restrictions',
      content: 'Troubleshooting common issues like buffering, error codes, and black screens. This section also covers which devices are supported for HD and 4K streaming.'
    },
    {
      title: 'Prime Video Audio Tracks',
      content: 'Information on selecting alternate audio tracks, including different languages and audio descriptions, during playback on various devices.'
    }
  ];
    togglePanel(index: number): void {
    if (this.activeIndex() === index) {
      this.activeIndex.set(-1); // Close it
    } else {
      this.activeIndex.set(index); // Open the new one
    }
  }

}

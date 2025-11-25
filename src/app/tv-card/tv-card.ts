import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
export interface FanCodeCardData {
  imageUrl: string;
  liveLabel?: string;   // 'LIVE' or null
  title: string;
  subtitle: string;
  time?: string;        // 'Live at 11 PM' or 'Tomorrow 1:30 AM'
}
@Component({
  selector: 'app-tv-card',
  imports: [CommonModule],
  templateUrl: './tv-card.html',
  styleUrl: './tv-card.scss'
})
export class TvCard {
// Receives the data for the specific card from the parent component
  @Input() cardData!: FanCodeCardData;
  
  ngOnInit(): void {
    // Optional: Log the received data for debugging
    // console.log('Card data received:', this.cardData);
  }

}

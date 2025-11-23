import { Component, ElementRef, ViewChild } from '@angular/core';
import { FanCodeCardData, TvCard } from '../../tv-card/tv-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-tv',
  imports: [TvCard,CommonModule],
  templateUrl: './live-tv.html',
  styleUrl: './live-tv.scss'
})
export class LiveTv {
  // Use ViewChild to get a reference to the 'cards-wrapper' div
  @ViewChild('cardsWrapper', { static: true }) cardsWrapper!: ElementRef;

  carouselHeading: string = 'FanCode: Live & Upcoming unmissable deal @ ₹119/month';
  cardItems: FanCodeCardData[] = [/* ... your data here ... */];

  // Method to scroll the carousel left
  scrollLeft() {
    const scrollAmount = this.cardsWrapper.nativeElement.offsetWidth * 0.8; // Scroll 80% of viewport width
    this.cardsWrapper.nativeElement.scrollLeft -= scrollAmount;
  }

  // Method to scroll the carousel right
  scrollRight() {
    const scrollAmount = this.cardsWrapper.nativeElement.offsetWidth * 0.8; // Scroll 80% of viewport width
    this.cardsWrapper.nativeElement.scrollLeft += scrollAmount;
  }



  ngOnInit() {
    // 💡 Mock Data: Replace 'assets/...' with your actual image paths
    this.cardItems = [
      {
        imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.ZqHB5TXD1OttXQHzAWqIAgHaEK?pid=Api&P=0&h=180', // Placeholder image 1
        liveLabel: 'LIVE',
        title: 'Greatest Show on Earth',
        subtitle: 'Spanish Primera Division Soccer-Real Betis vs...',
        time: 'Live at 11 PM',
      },
      {
        imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.CZMqv9yXOnuLfxKcxpjuagHaE0?pid=Api&P=0&h=180', // Placeholder image 2
        liveLabel: 'LIVE',
        title: 'Greatest Show on Earth',
        subtitle: 'Getafe CF vs. Atlético M.',
        time: 'Live at 11 PM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.viLlOa7gx-xBqrx4fRBuGAHaD4?pid=Api&P=0&h=180', // Placeholder image 3
        title: 'Greatest Show on Earth',
        subtitle: 'Elche CF vs. Real Madrid',
        time: 'Tomorrow 1:30 AM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.5EVJieSudBD1yDJEra2cjAHaEK?pid=Api&P=0&h=180', // Placeholder image 4
        title: 'International Cricket',
        subtitle: 'Janakpur Bolts vs. Birat...',
        time: 'Tomorrow 11:30 AM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.9rVRYLWDsUzTmlBIEv0JJgHaE8?pid=Api&P=0&h=180', // Placeholder image 5
        title: 'Sultan Azlan Shah Cup',
        subtitle: 'Belgium vs Canada',
        time: 'Tomorrow 1:30 PM',
      },
            {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.viLlOa7gx-xBqrx4fRBuGAHaD4?pid=Api&P=0&h=180', // Placeholder image 3
        title: 'Greatest Show on Earth',
        subtitle: 'Elche CF vs. Real Madrid',
        time: 'Tomorrow 1:30 AM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.5EVJieSudBD1yDJEra2cjAHaEK?pid=Api&P=0&h=180', // Placeholder image 4
        title: 'International Cricket',
        subtitle: 'Janakpur Bolts vs. Birat...',
        time: 'Tomorrow 11:30 AM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.9rVRYLWDsUzTmlBIEv0JJgHaE8?pid=Api&P=0&h=180', // Placeholder image 5
        title: 'Sultan Azlan Shah Cup',
        subtitle: 'Belgium vs Canada',
        time: 'Tomorrow 1:30 PM',
      }
    ];
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvCard, FanCodeCardData } from '../../tv-card/tv-card';

@Component({
  selector: 'app-live-tv',
  imports: [TvCard, CommonModule],
  templateUrl: './live-tv.html',
  styleUrl: './live-tv.scss'
})
export class LiveTv {

  /* Separate wrappers for both carousels */
  @ViewChild('fancodeWrapper', { static: true }) fancodeWrapper!: ElementRef;
  @ViewChild('nbaWrapper', { static: true }) nbaWrapper!: ElementRef;

  carouselHeading: string = 'FanCode: Live & Upcoming unmissable deal @ ₹119/month';
  cardNpc: string = 'NBA League Pass';

  cardItems: FanCodeCardData[] = [];
  cardItemsnpc: FanCodeCardData[] = [];

  /* Scroll functions */
  scrollLeft(type: string) {
    const wrapper =
      type === 'fancode' ? this.fancodeWrapper : this.nbaWrapper;

    const scrollAmount = wrapper.nativeElement.offsetWidth * 0.8;
    wrapper.nativeElement.scrollLeft -= scrollAmount;
  }

  scrollRight(type: string) {
    const wrapper =
      type === 'fancode' ? this.fancodeWrapper : this.nbaWrapper;

    const scrollAmount = wrapper.nativeElement.offsetWidth * 0.8;
    wrapper.nativeElement.scrollLeft += scrollAmount;
  }

  ngOnInit() {

    /* FanCode Cards */
    this.cardItems = [
      {
        imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.ZqHB5TXD1OttXQHzAWqIAgHaEK?pid=Api&P=0&h=180',
        liveLabel: 'LIVE',
        title: 'Greatest Show on Earth',
        subtitle: 'Spanish Primera Division Soccer-Real Betis vs...',
        time: 'Live at 11 PM',
      },
      {
        imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.CZMqv9yXOnuLfxKcxpjuagHaE0?pid=Api&P=0&h=180',
        liveLabel: 'LIVE',
        title: 'Greatest Show on Earth',
        subtitle: 'Getafe CF vs. Atlético M.',
        time: 'Live at 11 PM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.viLlOa7gx-xBqrx4fRBuGAHaD4?pid=Api&P=0&h=180',
        title: 'Greatest Show on Earth',
        subtitle: 'Elche CF vs. Real Madrid',
        time: 'Tomorrow 1:30 AM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.5EVJieSudBD1yDJEra2cjAHaEK?pid=Api&P=0&h=180',
        title: 'International Cricket',
        subtitle: 'Janakpur Bolts vs. Birat...',
        time: 'Tomorrow 11:30 AM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.9rVRYLWDsUzTmlBIEv0JJgHaE8?pid=Api&P=0&h=180',
        title: 'Sultan Azlan Shah Cup',
        subtitle: 'Belgium vs Canada',
        time: 'Tomorrow 1:30 PM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.viLlOa7gx-xBqrx4fRBuGAHaD4?pid=Api&P=0&h=180',
        title: 'Greatest Show on Earth',
        subtitle: 'Elche CF vs. Real Madrid',
        time: 'Tomorrow 1:30 AM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.5EVJieSudBD1yDJEra2cjAHaEK?pid=Api&P=0&h=180',
        title: 'International Cricket',
        subtitle: 'Janakpur Bolts vs. Birat...',
        time: 'Tomorrow 11:30 AM',
      },
      {
        imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.9rVRYLWDsUzTmlBIEv0JJgHaE8?pid=Api&P=0&h=180',
        title: 'Sultan Azlan Shah Cup',
        subtitle: 'Belgium vs Canada',
        time: 'Tomorrow 1:30 PM',
      }
    ];

    /* NBA Cards */
    this.cardItemsnpc = [
      {
        imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.RANrk0jVGCsS9uiUh9CnlAHaE8?pid=Api&P=0&h=180',
        liveLabel: 'LIVE',
        title: 'NBA League Pass',
        subtitle: 'Watch every NBA game live and on-demand',
        time: 'Streaming 24/7'
      },
      {
        imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.4kIiEdluGyy8998lAvBzsgHaIi?pid=Api&P=0&h=180',
        liveLabel: 'LIVE',
        title: 'Boston Celtics vs Miami Heat',
        subtitle: 'NBA Regular Season Game',
        time: 'Live at 7:30 PM'
      },
      {
        imageUrl: 'https://tse1.mm.bing.net/th/id/OIP._NxIaU7EPiovMr4YbkivFAHaEK?pid=Api&P=0&h=180',
        liveLabel: 'LIVE',
        title: 'Los Angeles Lakers vs Golden State Warriors',
        subtitle: 'NBA Western Conference Showdown',
        time: 'Live at 10:00 PM'
      },
      {
        imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.1GU6hJwdiFx2jlEx8BQuLgHaEK?pid=Api&P=0&h=180',
        liveLabel: 'HIGHLIGHT',
        title: 'Top Plays of the Week',
        subtitle: 'Best dunks, blocks, crossovers & more',
        time: 'Updated Daily'
      },
      {
        imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.n20QaAu1u15Dmii2P04WfwHaEK?pid=Api&P=0&h=180',
        liveLabel: '',
        title: 'NBA League Pass Premium',
        subtitle: 'Watch commercial-free on 3 devices',
        time: 'Available Now'
      }
    ];
  }
}

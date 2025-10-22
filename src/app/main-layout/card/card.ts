import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
export interface CarouselItem {
  id: number;
  title: string;
  image: string;
  badge?: string;
  year?: string;
  rating?: string;
  season?: string;
  description?: string;
  languages?: string;
  price?: string;
  buttonText?: string;
  buttonSubtext?: string;
  isCrowned?: boolean;
  subtitle?:string;
  rank?:string
}
export type CarouselType = 'hero' | 'recommended' | 'subscription' | 'top10' | 'grid';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  private router = inject(Router);
  @Input() items: CarouselItem[] = [];
  @Input() type: CarouselType = 'recommended';
  @Input() sectionTitle?: string;
  @Input() showArrowIcon: boolean = false;
  @Input() slidesPerView: string = 'auto';
  @Input() spaceBetween: number = 16;
  @Input() slideWidth: number = 280;
  @Input() autoplayDelay: number = 5000;
  @Input() gridClasses: string = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';

  ngOnInit(): void {
    this.registerSwiperElements();
  }

  private registerSwiperElements(): void {
    if (typeof window !== 'undefined') {
      import('swiper/element/bundle').then((module) => {
        module.register();
      });
    }
  }
  navigateToDetail(itemId: number): void {
    this.router.navigate(['/detail', itemId]);
  }

}

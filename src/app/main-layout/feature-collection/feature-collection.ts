import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CardCarousel, CarouselItem } from '../../card-carousel/card-carousel';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feature-collection',
  imports: [CommonModule, CardCarousel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './feature-collection.html',
  styleUrl: './feature-collection.scss'
})
export class FeatureCollection {
  private route = inject(ActivatedRoute);
  collectionName: any
  slides: CarouselItem[] = [
    {
      id: 1,
      title: 'FOUNTAIN\nOF YOUTH',
      subtitle: 'Action • Adventure • Mystery',
      description: 'An epic journey across time and continents',
      rating: 'U/A 16+',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop&q=80',
      buttonText: 'Watch with Apple TV+',
      buttonSubtext: 'Start your subscription'
    },
    {
      id: 2,
      title: 'EDGE OF\nDARKNESS',
      subtitle: 'Action • Thriller • Drama',
      description: 'A high-stakes chase across borders',
      rating: 'U/A 18+',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1920&h=1080&fit=crop&q=80',
      buttonText: 'Join Prime',
      buttonSubtext: 'Watch now'
    },
    {
      id: 3,
      title: 'WILD\nHORIZONS',
      subtitle: 'Documentary • Nature • Adventure',
      description: 'Explore the untamed beauty of our planet',
      rating: 'U/A 7+',
      image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec93e1a?w=1920&h=1080&fit=crop&q=80',
      buttonText: 'Join Prime',
      buttonSubtext: 'Watch now'
    }
  ];
  tabs = ['All', 'Movie', 'Tv-show'];
  selectedTab = 'All'; // Default tab

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.collectionName = params.get('data') || '';
      console.log("Received:", this.collectionName);
    });



    this.registerSwiperElements();
  }
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  // TOP-RATED TV SHOWS ON IMDB (15+ items)
  subscriptionItems: CarouselItem[] = [
    {
      id: 1,
      title: "Kantara",
      image: "https://tse1.mm.bing.net/th/id/OIP.DutLYHTqpFXii7TD8i_JBgHaEK?pid=Api&rs=1&c=1&qlt=95&w=212&h=119",
      badge: 'AMAZON ORIGINAL',
      isCrowned: true

    },
    {
      id: 2,
      title: "Baaghi 4",
      image: "https://tse4.mm.bing.net/th/id/OIP.wYp2yEPRafyY-iZNLWSS3gHaEK?pid=Api&P=0&h=180",
      badge: 'AMAZON ORIGINAL',
      isCrowned: true

    },
    {
      id: 3,
      title: "Gooli",
      image: "https://tse3.mm.bing.net/th/id/OIP.sgdMBhvcAS7qkTPg_qOOrAHaEK?pid=Api&P=0&h=180",
      badge: 'AMAZON ',
      isCrowned: true

    },
    {
      id: 4,
      title: "Housefull 5",
      image: "https://tse2.mm.bing.net/th/id/OIP.t7v7UlEPvyJDpqYqPyI7ywHaJQ?pid=Api&P=0&h=180",
      badge: 'AMAZON ORIGINAL',
      isCrowned: true

    },
    {

      id: 5,
      title: "WishaaNCH",
      image: "https://tse3.mm.bing.net/th/id/OIP.6F8QFChUp9KW-yC8sCk_1QHaEK?pid=Api&P=0&h=180",
      badge: 'AMAZON ',
      isCrowned: true
    },
      {
      id: 6,
      title: "RRR",
      image: "https://tse1.mm.bing.net/th/id/OIP.1TDxlW4gnL97TFrzHtu-EwHaEK?pid=Api&P=0&h=180",
      badge: 'AMAZON ORIGINAL',
      isCrowned: true

    },
    {

      id: 7,
      title: "Animal",
      image: "https://tse1.mm.bing.net/th/id/OIP.TE_LOF2lqkPBhzVu6lC3YQHaKX?pid=Api&P=0&h=180",
      badge: 'AMAZON ',
      isCrowned: true
    }
  ];

  // THROWBACK TV (12+ items)
top10Items: CarouselItem[] = [
  {
    id: 1,
    title: 'Stranger Things',
    image: 'https://tse1.mm.bing.net/th/id/OIP.c0dbeET9s0PH-r03RI9t-gHaDV?pid=Api&P=0&h=180',
    badge: 'SCI-FI',
    isCrowned: true,
    description: 'Mystery, monsters and 80s nostalgia'
  },
  {
    id: 2,
    title: 'Money Heist',
    image: 'https://tse1.mm.bing.net/th/id/OIP.hZWnF_2KHVPKVd0H8VNJDAHaDt?pid=Api&P=0&h=180',
    badge: 'THRILLER',
    isCrowned: true,
    description: 'A high-stakes heist led by the Professor'
  },
  {
    id: 3,
    title: 'Peaky Blinders',
    image: 'https://tse4.mm.bing.net/th/id/OIP.JEydxJzSRbwFn_G3YLHApgHaDt?pid=Api&P=0&h=180',
    badge: 'CRIME',
    isCrowned: true,
    description: 'A gangster family in post-WWI England'
  },
  {
    id: 4,
    title: 'The Boys',
    image: 'https://sp.yimg.com/ib/th/id/OIP.A6c4ueAVGv6u7iQAXTL4LwHaFj?pid=Api&w=148&h=148&c=7&dpr=2&rs=1',
    badge: 'SUPERHERO',
    isCrowned: true,
    description: 'Corrupt superheroes and the vigilantes fighting them'
  },
  {
    id: 5,
    title: 'The Witcher',
    image: 'https://tse1.mm.bing.net/th/id/OIP.7wiL2rFVFgFUFB-jiYiSrwHaEK?pid=Api&rs=1&c=1&qlt=95&w=215&h=121',
    badge: 'FANTASY',
    isCrowned: true,
    description: 'Monster-hunting in a mythical world'
  },
  {
    id: 6,
    title: 'Dark',
    image: 'https://tse1.mm.bing.net/th/id/OIP.lAAQgxyQENm-oPQK_0xf2wAAAA?pid=Api&rs=1&c=1&qlt=95&w=65&h=92',
    badge: 'SCI-FI',
    isCrowned: true,
    description: 'Time travel mystery from Germany'
  },
  {
    id: 7,
    title: 'The Mandalorian',
    image: 'https://tse1.mm.bing.net/th/id/OIP.wsUwBfMcjI0Fh8iYkvkBXAHaEK?pid=Api&rs=1&c=1&qlt=95&w=203&h=114',
    badge: 'STAR WARS',
    isCrowned: true,
    description: 'A bounty hunter’s adventures in the galaxy'
  },
  {
    id: 8,
    title: 'House of the Dragon',
    image: 'https://tse3.mm.bing.net/th/id/OIP.rfghW8ZdIVRWJT7EW5yk4gHaEK?pid=Api&P=0&h=180',
    badge: 'FANTASY',
    isCrowned: true,
    description: 'Targaryen civil war in Westeros'
  },
  {
    id: 9,
    title: 'Vikings',
    image: 'https://tse3.mm.bing.net/th/id/OIP.TVCGUn8dIf7MoLCwv8uJbQHaDt?pid=Api&P=0&h=180',
    badge: 'HISTORICAL',
    isCrowned: true,
    description: 'The legendary saga of Ragnar Lothbrok'
  }
];

  // RECOMMENDED CAROUSEL DATA (15 items)

  gridItems: CarouselItem[] = [
  {
    id: 1,
    title: 'Oppenheimer',
    image: 'https://tse3.mm.bing.net/th/id/OIP.6SnyiVqViqp04_HiFImW6AHaFG?pid=Api&P=0&h=180',
    badge: 'NEW RELEASE',
    languages: 'ENGLISH | HINDI'
  },
  {
    id: 2,
    title: 'John Wick: Chapter 4',
    image: 'https://tse2.mm.bing.net/th/id/OIP.lWJMrNcKAlbhY7WrditwnQHaDG?pid=Api&P=0&h=180',
    badge: 'HD',
    languages: 'ENGLISH | HINDI | TAMIL | TELUGU'
  },
  {
    id: 3,
    title: 'Interstellar',
    image: 'https://tse3.mm.bing.net/th/id/OIP.tWCefewNKNKejpR2FwZSBwHaEK?pid=Api&P=0&h=180'
  },
  {
    id: 4,
    title: 'Spider-Man: No Way Home',
    image: 'https://tse3.mm.bing.net/th/id/OIP.miiO9dVCnHO365ToNPjOMwHaDt?pid=Api&P=0&h=180',
    badge: 'DEAL',
    languages: 'ENGLISH | HINDI | TAMIL | TELUGU'
  },
  {
    id: 5,
    title: 'Avatar: The Way of Water',
    image: 'https://tse1.mm.bing.net/th/id/OIP.tcQ0ADRp7zvktii6FqL4DAHaEK?pid=Api&P=0&h=180',
    badge: 'TRENDING',
    languages: 'ENGLISH | HINDI'
  },
  {
    id: 6,
    title: 'Inception',
    image: 'https://tse1.mm.bing.net/th/id/OIP.SDLkOsgAz_CfDHY-4YhjaQHaEK?pid=Api&P=0&h=180'
  },
  {
    id: 7,
    title: 'The Dark Knight',
    image: 'https://tse3.mm.bing.net/th/id/OIP.rC54QpElrkh--WN-jUf9WwHaEo?pid=Api&P=0&h=180',
    badge: '4K'
  },
  {
    id: 8,
    title: 'Fast & Furious 9',
    image: 'https://tse1.mm.bing.net/th/id/OIP.G4wmDKOrqRMDVHxkGu0iaAHaEK?pid=Api&P=0&h=180',
    badge: 'DEAL',
    languages: 'ENGLISH | HINDI | TAMIL'
  }
];


  private registerSwiperElements(): void {
    if (typeof window !== 'undefined') {
      import('swiper/element/bundle').then((module) => {
        module.register();
      });
    }
  }
}

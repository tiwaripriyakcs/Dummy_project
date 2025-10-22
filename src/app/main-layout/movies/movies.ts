import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCarousel, CarouselItem } from '../../card-carousel/card-carousel';


// Register Swiper custom elements
// register();

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  rating: string;
  image: string;
  buttonText: string;
  buttonSubtext: string;
}

@Component({
  selector: 'app-movies',
  imports: [CommonModule,CardCarousel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})
export class Movies {
 slides: CarouselSlide[] = [
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
  

heroItems: CarouselItem[] = [
    {
      id: 1,
      title: 'FOUNTAIN\nOF YOUTH',
      season: 'Action • Adventure • Mystery',
      description: 'An epic journey across time and continents',
      rating: 'U/A 16+',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop&q=80',
      buttonText: 'Watch with Apple TV+',
      buttonSubtext: 'Start your subscription'
    },
    {
      id: 2,
      title: 'EDGE OF\nDARKNESS',
      season: 'Action • Thriller • Drama',
      description: 'A high-stakes chase across borders',
      rating: 'U/A 18+',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1920&h=1080&fit=crop&q=80',
      buttonText: 'Join Prime',
      buttonSubtext: 'Watch now'
    },
    {
      id: 3,
      title: 'WILD\nHORIZONS',
      season: 'Documentary • Nature • Adventure',
      description: 'Explore the untamed beauty of our planet',
      rating: 'U/A 7+',
      image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec93e1a?w=1920&h=1080&fit=crop&q=80',
      buttonText: 'Join Prime',
      buttonSubtext: 'Watch now'
    }
  ];


  // RECOMMENDED CAROUSEL DATA (15 items)
  recommendedItems: CarouselItem[] = [
    {
      id: 1,
      title: 'Demon Slayer',
      image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop&q=80',
      badge: 'DEAL',
      languages: 'JAPANESE | HINDI | TAMIL | TELUGU'
    },
    {
      id: 2,
      title: 'Masters of Sex',
      image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec93e1a?w=400&h=600&fit=crop&q=80',
      languages: 'ENGLISH | HINDI'
    },
    {
      id: 3,
      title: 'Penance',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Naruto',
      image: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop&q=80',
      badge: 'DEAL',
      languages: 'JAPANESE | ENGLISH | TAMIL | TELUGU'
    },
    {
      id: 5,
      title: 'Attack on Titan',
      image: 'https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=400&h=600&fit=crop&q=80',
      badge: 'DEAL',
      languages: 'JAPANESE | ENGLISH | HINDI'
    },
    {
      id: 6,
      title: 'Breaking Bad',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop&q=80',
      badge: 'NEW SEASON'
    },
    {
      id: 7,
      title: 'The Crown',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop&q=80',
      languages: 'ENGLISH | HINDI'
    },
    {
      id: 8,
      title: 'One Piece',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop&q=80',
      badge: 'DEAL',
      languages: 'JAPANESE | HINDI | TAMIL'
    },
    {
      id: 9,
      title: 'Stranger Things',
      image: 'https://images.unsplash.com/photo-1606603696914-5d6c67b6c0e4?w=400&h=600&fit=crop&q=80',
      badge: 'NEW EPISODE'
    },
    {
      id: 10,
      title: 'Money Heist',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop&q=80',
      languages: 'SPANISH | ENGLISH | HINDI'
    },
    {
      id: 11,
      title: 'The Witcher',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=600&fit=crop&q=80',
      badge: 'NEW SEASON'
    },
    {
      id: 12,
      title: 'Death Note',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop&q=80',
      badge: 'DEAL',
      languages: 'JAPANESE | ENGLISH | HINDI'
    },
    {
      id: 13,
      title: 'Game of Thrones',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop&q=80'
    },
    {
      id: 14,
      title: 'Peaky Blinders',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&q=80',
      languages: 'ENGLISH | HINDI'
    },
    {
      id: 15,
      title: 'Squid Game',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop&q=80',
      badge: 'TRENDING',
      languages: 'KOREAN | ENGLISH | HINDI'
    }
  ];

  // SUBSCRIPTION DATA (12 items)
  subscriptionItems: CarouselItem[] = [
    {
      id: 1,
      title: 'Anime Times',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=300&fit=crop&q=80',
      price: '₹99/month',
      isCrowned: true
    },
    {
      id: 2,
      title: 'Crunchyroll',
      image: 'https://images.unsplash.com/photo-1606603696914-5d6c67b6c0e4?w=400&h=300&fit=crop&q=80',
      price: '₹79/month',
      isCrowned: true
    },
    {
      id: 3,
      title: 'Apple TV+',
      image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec93e1a?w=400&h=300&fit=crop&q=80',
      price: '₹99/month',
      isCrowned: true
    },
    {
      id: 4,
      title: 'Channel K',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop&q=80',
      price: '₹79/month',
      isCrowned: true
    },
    {
      id: 5,
      title: 'HBO Max',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop&q=80',
      price: '₹149/month',
      isCrowned: true
    },
    {
      id: 6,
      title: 'Disney+',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=300&fit=crop&q=80',
      price: '₹299/month',
      isCrowned: true
    },
    {
      id: 7,
      title: 'Sony LIV',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=300&fit=crop&q=80',
      price: '₹99/month',
      isCrowned: true
    },
    {
      id: 8,
      title: 'Zee5',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop&q=80',
      price: '₹79/month',
      isCrowned: true
    },
    {
      id: 9,
      title: 'Voot',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop&q=80',
      price: '₹99/month',
      isCrowned: true
    },
    {
      id: 10,
      title: 'ALTBalaji',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80',
      price: '₹99/month',
      isCrowned: true
    },
    {
      id: 11,
      title: 'SunNXT',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop&q=80',
      price: '₹79/month',
      isCrowned: true
    },
    {
      id: 12,
      title: 'Eros Now',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&q=80',
      price: '₹99/month',
      isCrowned: true
    }
  ];

  // TOP 10 CAROUSEL DATA (15 items)
  top10Items: CarouselItem[] = [
    {
      id: 1,
      title: 'Sardaar Ji',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=250&fit=crop&q=80',
      badge: 'NEW MOVIE',
      year: '2023',
      rating: 'U/A 13+',
      description: 'A comedy-drama about family and tradition'
    },
    {
      id: 2,
      title: 'Lynley',
      image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec93e1a?w=400&h=250&fit=crop&q=80',
      badge: 'NEW SERIES',
      year: '2023',
      rating: 'U/A 16+',
      season: 'Season 1',
      description: 'A gripping mystery thriller series'
    },
    {
      id: 3,
      title: 'Death Note',
      image: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=250&fit=crop&q=80',
      badge: 'DEAL',
      year: '2006',
      rating: 'U/A 16+',
      languages: 'JAPANESE | HINDI | TAMIL | TELUGU',
      description: 'Psychological thriller anime series'
    },
    {
      id: 4,
      title: 'Summer Beach',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop&q=80',
      badge: 'NEW SEASON',
      year: '2024',
      rating: 'U/A 13+',
      season: 'Season 2',
      description: 'Reality show about summer adventures'
    },
    {
      id: 5,
      title: 'Breaking Point',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop&q=80',
      year: '2024',
      rating: 'U/A 18+',
      season: 'Season 3',
      description: 'Intense drama series about survival'
    },
    {
      id: 6,
      title: 'The Last Kingdom',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=250&fit=crop&q=80',
      badge: 'TRENDING',
      year: '2024',
      rating: 'U/A 16+',
      season: 'Season 5',
      description: 'Epic historical drama'
    },
    {
      id: 7,
      title: 'Silicon Valley',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=250&fit=crop&q=80',
      year: '2023',
      rating: 'U/A 13+',
      description: 'Comedy about tech startups'
    },
    {
      id: 8,
      title: 'Narcos',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=250&fit=crop&q=80',
      badge: 'NEW SEASON',
      year: '2024',
      rating: 'U/A 18+',
      season: 'Season 4',
      languages: 'SPANISH | ENGLISH | HINDI',
      description: 'Crime drama based on true events'
    },
    {
      id: 9,
      title: 'The Office',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop&q=80',
      year: '2023',
      rating: 'U/A 13+',
      description: 'Mockumentary sitcom'
    },
    {
      id: 10,
      title: 'Vikings',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&q=80',
      badge: 'DEAL',
      year: '2024',
      rating: 'U/A 18+',
      season: 'Season 6',
      description: 'Historical drama about Norse legends'
    },
    {
      id: 11,
      title: 'The Mandalorian',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=250&fit=crop&q=80',
      badge: 'NEW EPISODE',
      year: '2024',
      rating: 'U/A 13+',
      season: 'Season 3',
      description: 'Star Wars adventure series'
    },
    {
      id: 12,
      title: 'House of Cards',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop&q=80',
      year: '2023',
      rating: 'U/A 18+',
      description: 'Political thriller drama'
    },
    {
      id: 13,
      title: 'Brooklyn Nine-Nine',
      image: 'https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=400&h=250&fit=crop&q=80',
      year: '2023',
      rating: 'U/A 13+',
      season: 'Season 8',
      description: 'Police comedy series'
    },
    {
      id: 14,
      title: 'Better Call Saul',
      image: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=400&h=250&fit=crop&q=80',
      badge: 'TRENDING',
      year: '2024',
      rating: 'U/A 16+',
      season: 'Season 6',
      description: 'Crime drama prequel'
    },
    {
      id: 15,
      title: 'The Boys',
      image: 'https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=400&h=250&fit=crop&q=80',
      badge: 'NEW SEASON',
      year: '2024',
      rating: 'U/A 18+',
      season: 'Season 4',
      description: 'Dark superhero drama'
    }
  ];

  // GRID LAYOUT DATA (18 items)
  gridItems: CarouselItem[] = [
    {
      id: 1,
      title: 'The Crown',
      image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec93e1a?w=300&h=400&fit=crop&q=80',
      description: 'Historical Drama'
    },
    {
      id: 2,
      title: 'Stranger Things',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop&q=80',
      description: 'Sci-Fi Horror'
    },
    {
      id: 3,
      title: 'The Mandalorian',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop&q=80',
      badge: 'NEW EPISODE'
    },
    {
      id: 4,
      title: 'Wednesday',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300&h=400&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'The Witcher',
      image: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=300&h=400&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'House of Dragon',
      image: 'https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=300&h=400&fit=crop&q=80'
    },
    {
      id: 7,
      title: 'Ozark',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=300&h=400&fit=crop&q=80',
      badge: 'TRENDING'
    },
    {
      id: 8,
      title: 'Lucifer',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=400&fit=crop&q=80'
    },
    {
      id: 9,
      title: 'Dark',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop&q=80',
      description: 'Mystery Thriller'
    },
    {
      id: 10,
      title: 'Westworld',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=400&fit=crop&q=80'
    },
    {
      id: 11,
      title: 'The Umbrella Academy',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=400&fit=crop&q=80',
      badge: 'NEW SEASON'
    },
    {
      id: 12,
      title: 'Loki',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=400&fit=crop&q=80'
    },
    {
      id: 13,
      title: 'Moon Knight',
      image: 'https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=300&h=400&fit=crop&q=80'
    },
    {
      id: 14,
      title: 'Peacemaker',
      image: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=300&h=400&fit=crop&q=80'
    },
    {
      id: 15,
      title: 'Andor',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=400&fit=crop&q=80',
      description: 'Star Wars Series'
    },
    {
      id: 16,
      title: 'Severance',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&h=400&fit=crop&q=80',
      badge: 'TRENDING'
    },
    {
      id: 17,
      title: 'The Last of Us',
      image: 'https://images.unsplash.com/photo-1606603696914-5d6c67b6c0e6?w=300&h=400&fit=crop&q=80'
    },
    {
      id: 18,
      title: 'Rings of Power',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=400&fit=crop&q=80',
      description: 'Fantasy Epic'
    }
  ];

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
}
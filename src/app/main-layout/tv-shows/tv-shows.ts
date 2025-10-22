import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardCarousel, CarouselItem } from '../../card-carousel/card-carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-shows',
  imports: [CommonModule,CardCarousel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tv-shows.html',
  styleUrl: './tv-shows.scss'
})
export class TvShows 
{
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
  

heroItems: CarouselItem[] = [
  {
    id: 1,
    title: 'PANCHAYAT',
    season: 'New Season',
    description: '#6 in India',
    rating: 'U/A 16+',
    image: 'https://tse2.mm.bing.net/th/id/OIP.7-po-TY1VeH2FS4RpwGmKQHaE8?pid=Api&P=0&h=180',
    buttonText: 'Join Prime',
    buttonSubtext: 'Watch now'
  },
  {
    id: 2,
    title: 'MIRZAPUR',
    season: 'Season 3 Streaming Now',
    description: 'Power. Revenge. Chaos.',
    rating: 'U/A 18+',
    image: 'https://tse4.mm.bing.net/th/id/OIP.X0QOt_XLjf9F7mDbTuH_tgHaEJ?pid=Api&P=0&h=180',
    buttonText: 'Join Prime',
    buttonSubtext: 'Watch now'
  },
  {
    id: 3,
    title: 'THE FAMILY MAN',
    season: 'Action • Thriller • Spy',
    description: 'A middle-class man secretly works for T.A.S.C.',
    rating: 'U/A 16+',
    image: 'https://tse4.mm.bing.net/th/id/OIP.Fo-YmhIvoT9TlIF_4uWcKwHaEK?pid=Api&P=0&h=180',
    buttonText: 'Join Prime',
    buttonSubtext: 'Watch now'
  }
];

  ngOnInit(): void {
    this.registerSwiperElements();
  }  // FILMFARE OTT AWARD WINNERS (10+ items)
  recommendedItems: CarouselItem[] = [
    {
      id: 1,
      title: 'Panchayat',
      image: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 2,
      title: 'Mirzapur',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 3,
      title: 'The Family Man',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 4,
      title: 'Mumbai Diaries 26/11',
      image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec93e1a?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 5,
      title: 'Paatal Lok',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 6,
      title: 'Four More Shots Please',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 7,
      title: 'Made in Heaven',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 8,
      title: 'Breathe',
      image: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 9,
      title: 'Inside Edge',
      image: 'https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 10,
      title: 'Tandav',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 11,
      title: 'Farzi',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    },
    {
      id: 12,
      title: 'Dahaad',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&q=80',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true
    }
  ];

  // TOP-RATED TV SHOWS ON IMDB (15+ items)
  subscriptionItems: CarouselItem[] = [
    {
      id: 1,
      title: 'Farzi',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop&q=80',
      rating: '8.5',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Crime thriller series'
    },
    {
      id: 2,
      title: 'Aspirants',
      image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec93e1a?w=400&h=600&fit=crop&q=80',
      rating: '9.1',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Drama about UPSC aspirants'
    },
    {
      id: 3,
      title: 'Panchayat',
      image: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400&h=600&fit=crop&q=80',
      rating: '8.9',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Comedy drama set in rural India'
    },
    {
      id: 4,
      title: 'Paatal Lok',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop&q=80',
      rating: '8.1',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Crime thriller'
    },
    {
      id: 5,
      title: 'Mirzapur',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop&q=80',
      rating: '8.4',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Crime action thriller'
    },
    {
      id: 6,
      title: 'The Family Man',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=600&fit=crop&q=80',
      rating: '8.7',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Action thriller spy series'
    },
    {
      id: 7,
      title: 'Gullak',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop&q=80',
      rating: '8.8',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Family comedy drama'
    },
    {
      id: 8,
      title: 'Suzhal',
      image: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop&q=80',
      rating: '8.2',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Tamil mystery thriller'
    },
    {
      id: 9,
      title: 'Breathe',
      image: 'https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=400&h=600&fit=crop&q=80',
      rating: '8.3',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Psychological thriller'
    },
    {
      id: 10,
      title: 'Mumbai Diaries 26/11',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop&q=80',
      rating: '8.6',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Medical drama'
    },
    {
      id: 11,
      title: 'Inside Edge',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop&q=80',
      rating: '7.9',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Cricket drama'
    },
    {
      id: 12,
      title: 'Made in Heaven',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&q=80',
      rating: '8.3',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Drama about wedding planners'
    },
    {
      id: 13,
      title: 'Hostel Daze',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop&q=80',
      rating: '8.7',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'College comedy'
    },
    {
      id: 14,
      title: 'Comicstaan',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=600&fit=crop&q=80',
      rating: '7.8',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Stand-up comedy competition'
    },
    {
      id: 15,
      title: 'The Last Hour',
      image: 'https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=400&h=600&fit=crop&q=80',
      rating: '7.5',
      badge: 'AMAZON ORIGINAL',
      isCrowned: true,
      description: 'Supernatural thriller'
    }
  ];

  // THROWBACK TV (12+ items)
  top10Items: CarouselItem[] = [
    {
      id: 1,
      title: 'Dora the Explorer',
      image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop&q=80',
      badge: 'KIDS',
      isCrowned: true,
      description: 'Educational adventure'
    },
    {
      id: 2,
      title: 'Pokémon Indigo League',
      image: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop&q=80',
      badge: 'ANIME',
      isCrowned: true,
      description: 'Classic anime series'
    },
    {
      id: 3,
      title: 'Supernatural',
      image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec93e1a?w=400&h=600&fit=crop&q=80',
      badge: 'HORROR',
      isCrowned: true,
      description: '15 seasons of supernatural adventures'
    },
    {
      id: 4,
      title: 'Two and a Half Men',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop&q=80',
      badge: 'COMEDY',
      isCrowned: true,
      description: 'Classic sitcom'
    },
    {
      id: 5,
      title: 'Shaktimaan',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop&q=80',
      badge: 'SUPERHERO',
      isCrowned: true,
      description: 'Indian superhero series'
    },
    {
      id: 6,
      title: 'Friends',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop&q=80',
      badge: 'COMEDY',
      isCrowned: true,
      description: 'Iconic sitcom'
    },
    {
      id: 7,
      title: 'The Big Bang Theory',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=600&fit=crop&q=80',
      badge: 'COMEDY',
      isCrowned: true,
      description: 'Nerdy comedy series'
    },
    {
      id: 8,
      title: 'Scooby-Doo',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop&q=80',
      badge: 'CARTOON',
      isCrowned: true,
      description: 'Mystery solving gang'
    },
    {
      id: 9,
      title: 'Tom and Jerry',
      image: 'https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=400&h=600&fit=crop&q=80',
      badge: 'CARTOON',
      isCrowned: true,
      description: 'Classic cat and mouse'
    },
    {
      id: 10,
      title: 'The Office',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop&q=80',
      badge: 'COMEDY',
      isCrowned: true,
      description: 'Mockumentary sitcom'
    },
    {
      id: 11,
      title: 'Breaking Bad',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop&q=80',
      badge: 'DRAMA',
      isCrowned: true,
      description: 'Crime drama masterpiece'
    },
    {
      id: 12,
      title: 'Game of Thrones',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&q=80',
      badge: 'FANTASY',
      isCrowned: true,
      description: 'Epic fantasy saga'
    }
  ];

  // RECOMMENDED CAROUSEL DATA (15 items)
  gridItems: CarouselItem[] = [
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

  private registerSwiperElements(): void {
    if (typeof window !== 'undefined') {
      import('swiper/element/bundle').then((module) => {
        module.register();
      });
    }
  }
}

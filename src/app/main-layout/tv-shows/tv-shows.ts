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
  recommendedItems: CarouselItem[] =[
  {
    id: 1,
    title: 'Sacred Games',
    image: 'https://tse4.mm.bing.net/th/id/OIP.hGHwo52eLSp9Kcyz5sF5JQHaEK?pid=Api&P=0&h=180',
    badge: 'IMDB TOP',
    isCrowned: true
  },
  {
    id: 2,
    title: 'The Harshad Mehta Story',
    image: 'https://tse3.mm.bing.net/th/id/OIP.hmtl1Tm05yN_Gr7r5-Wb-gHaEK?pid=Api&P=0&h=180',
    badge: 'IMDB TOP',
    isCrowned: true
  },
  {
    id: 3,
    title: 'Panchayat',
    image: 'https://tse2.mm.bing.net/th/id/OIP.v9DmaRYMvKDjEtcg-UiXOAHaEK?pid=Api&P=0&h=180',
    badge: 'IMDB TOP',
    isCrowned: true
  },
  {
    id: 4,
    title: 'Mirzapur',
    image: 'https://tse4.mm.bing.net/th/id/OIP.Rioje5FWQhysQZbxMUNskAHaEK?pid=Api&P=0&h=180',
    badge: 'IMDB TOP',
    isCrowned: true
  },
  {
    id: 5,
    title: 'The Family Man',
    image: 'https://tse4.mm.bing.net/th?id=OIF.HY%2fBQ%2fFhxL2tjieLWK7qlA&pid=Api&P=0&h=180',
    badge: 'IMDB TOP',
    isCrowned: true
  },
  {
    id: 6,
    title: 'Aspirants',
    image: 'https://tse4.mm.bing.net/th/id/OIP.epeOH3B0TnyeQHxT-lz7hgHaD4?pid=Api&P=0&h=180',
    badge: 'IMDB TOP',
    isCrowned: true
  },
  {
    id: 7,
    title: 'Kota Factory',
    image: 'https://tse1.mm.bing.net/th/id/OIP.oj_OYjyWOFafVgHnjNxZ5QHaEK?pid=Api&P=0&h=180',
    badge: 'IMDB TOP',
    isCrowned: true
  },
  {
    id: 8,
    title: 'Paatal Lok',
    image: 'https://tse4.mm.bing.net/th/id/OIP.mdy6RUI7aTF1TcFf1XHoYAHaFj?pid=Api&P=0&h=180',
    badge: 'IMDB TOP',
    isCrowned: true
  }
]


  // TOP-RATED TV SHOWS ON IMDB (15+ items)
  subscriptionItems: CarouselItem[] = [
  {
    "id": 1,
    "title": "Farzi",
    "image": "https://tse2.mm.bing.net/th/id/OIP.COWJf5704qiPYkyd4I-cBwHaEK?pid=Api&P=0&h=180",
    "rating": "8.5",
    "badge": "AMAZON ORIGINAL",
    "isCrowned": true,
    "description": "Crime thriller series"
  },
  {
    "id": 2,
    "title": "Aspirants",
    "image": "https://tse4.mm.bing.net/th/id/OIP.epeOH3B0TnyeQHxT-lz7hgHaD4?pid=Api&P=0&h=180",
    "rating": "9.1",
    "badge": "AMAZON ORIGINAL",
    "isCrowned": true,
    "description": "Drama about UPSC aspirants"
  },
  {
    "id": 3,
    "title": "Panchayat",
    "image": "https://tse1.mm.bing.net/th/id/OIP.TgHlDAug0z4sFcM50XJJ7gHaE8?pid=Api&P=0&h=180",
    "rating": "8.9",
    "badge": "AMAZON ORIGINAL",
    "isCrowned": true,
    "description": "Comedy drama set in rural India"
  },
  {
    "id": 4,
    "title": "Paatal Lok",
    "image": "https://tse1.mm.bing.net/th/id/OIP.fIyiNUeXSDhB1wEIQfYldgHaEK?pid=Api&P=0&h=180",
    "rating": "8.1",
    "badge": "AMAZON ORIGINAL",
    "isCrowned": true,
    "description": "Crime thriller"
  },
  {
    "id": 5,
    "title": "Mirzapur",
    "image": "https://tse2.mm.bing.net/th/id/OIP.ahJqXLEH71MmQUXcDbRQHwHaEK?pid=Api&P=0&h=180",
    "rating": "8.4",
    "badge": "AMAZON ORIGINAL",
    "isCrowned": true,
    "description": "Crime action thriller"
  },
  {
    "id": 6,
    "title": "The Family Man",
    "image": "https://tse2.mm.bing.net/th/id/OIF.9E2douZB24B1KMj6gz5r9g?pid=Api&P=0&h=180",
    "rating": "8.7",
    "badge": "AMAZON ORIGINAL",
    "isCrowned": true,
    "description": "Action thriller spy series"
  },
  {
    "id": 7,
    "title": "Gullak",
    "image": "https://tse4.mm.bing.net/th/id/OIP.WKeryGSfL-0FO3sPePbvzQHaEK?pid=Api&P=0&h=180",
    "rating": "8.8",
    "badge": "AMAZON ORIGINAL",
    "isCrowned": true,
    "description": "Family comedy drama"
  },
  {
    "id": 8,
    "title": "Suzhal",
    "image": "https://tse3.mm.bing.net/th/id/OIP.tu8s4pXVfT5PEW0WTyqlZQHaEK?pid=Api&P=0&h=180",
    "rating": "8.2",
    "badge": "AMAZON ORIGINAL",
    "isCrowned": true,
    "description": "Tamil mystery thriller"
  },
  {
    "id": 9,
    "title": "Breathe",
    "image": "https://tse3.mm.bing.net/th/id/OIP.lPd5p2huIsht656utXs36AHaEc?pid=Api&P=0&h=180",
    "rating": "8.3",
    "badge": "AMAZON ORIGINAL",
    "isCrowned": true,
    "description": "Psychological thriller"
  },
  {
    "id": 10,
    "title": "Mumbai Diaries 26/11",
    "image": "https://tse1.mm.bing.net/th/id/OIP.T_7aaSsqzR7avc1WH-YjTgHaFj?pid=Api&P=0&h=180",
    "rating": "8.6",
    "badge": "AMAZON ORIGINAL",
    "isCrowned": true,
    "description": "Medical drama"
  },
  
]


  // THROWBACK TV (12+ items)
  top10Items: CarouselItem[] = [
  {
    "id": 1,
    "title": "Two and a Half Men",
    "image": "https://tse1.mm.bing.net/th/id/OIP.c7V83bxlDywuBO43T1_YugHaFj?pid=Api&P=0&h=180",
    "badge": "COMEDY",
    "isCrowned": true,
    "description": "Classic sitcom"
  },
  {
    "id": 2,
    "title": "Friends",
    "image": "https://tse2.mm.bing.net/th/id/OIP.fqMrgikZKGrKcIuCFrZuBwHaE7?pid=Api&P=0&h=180",
    "badge": "COMEDY",
    "isCrowned": true,
    "description": "Iconic sitcom"
  },
  {
    "id": 3,
    "title": "The Big Bang Theory",
    "image": "https://tse1.mm.bing.net/th/id/OIP.v0r0P3XO_KLts0wtLy_cpAHaKl?pid=Api&P=0&h=180",
    "badge": "COMEDY",
    "isCrowned": true,
    "description": "Nerdy comedy series"
  },
  {
    "id": 4,
    "title": "The Office",
    "image": "https://tse1.mm.bing.net/th/id/OIP.8EIvhYZM6H4yUWDcpOoFHwHaEK?pid=Api&P=0&h=180",
    "badge": "COMEDY",
    "isCrowned": true,
    "description": "Mockumentary sitcom"
  },
  {
    "id": 5,
    "title": "How I Met Your Mother",
    "image": "https://tse2.mm.bing.net/th/id/OIP.lZ9yi3K5JYkNdBMJLqUMEAHaLH?pid=Api&P=0&h=180",
    "badge": "COMEDY",
    "isCrowned": true,
    "description": "Friends and love story comedy"
  },
  {
    "id": 6,
    "title": "Brooklyn Nine-Nine",
    "image": "https://tse3.mm.bing.net/th/id/OIP.FooCErw9CbdgZcXl5ZbRxQHaFj?pid=Api&P=0&h=180",
    "badge": "COMEDY",
    "isCrowned": true,
    "description": "Funny police procedural comedy"
  },
  {
    "id": 7,
    "title": "Modern Family",
    "image": "https://tse3.mm.bing.net/th/id/OIP.-WVrLRnPXJRVL_kifdZlswHaEK?pid=Api&P=0&h=180",
    "badge": "COMEDY",
    "isCrowned": true,
    "description": "Family sitcom with humor"
  },
  {
    "id": 8,
    "title": "Arrested Development",
    "image": "https://tse3.mm.bing.net/th/id/OIP.51tE1vew1D4WkRMRzOZOswHaD5?pid=Api&P=0&h=180",
    "badge": "COMEDY",
    "isCrowned": true,
    "description": "Comedy about a dysfunctional family"
  }
]


  // RECOMMENDED CAROUSEL DATA (15 items)
  gridItems: CarouselItem[] = [
  {
    "id": 1,
    "title": "Demon Slayer",
    "image": "https://tse4.mm.bing.net/th/id/OIP.xmCDu7ee_Zh8UOgwyiwr-AHaEK?pid=Api&P=0&h=180",
    "badge": "DEAL",
    "languages": "JAPANESE | HINDI | TAMIL | TELUGU"
  },
  {
    "id": 2,
    "title": "Demon",
    "image": "https://tse1.mm.bing.net/th/id/OIP.h3blHXnbRuZtW19Wn80_ZQHaFE?pid=Api&P=0&h=180",
    "languages": "ENGLISH | HINDI"
  },
  {
    "id": 3,
    "title": "Penance",
    "image": "https://tse3.mm.bing.net/th/id/OIP.FzTmd6fs4FTQUMM0K0cAjAHaLY?pid=Api&P=0&h=180"
  },
  {
    "id": 4,
    "title": "Naruto",
    "image": "https://tse4.mm.bing.net/th/id/OIP.8vSeO4dRLy_XttUqprw5BwHaD4?pid=Api&P=0&h=180",
    "badge": "DEAL",
    "languages": "JAPANESE | ENGLISH | TAMIL | TELUGU"
  },
  {
    "id": 5,
    "title": "Attack on Titan",
    "image": "https://tse4.mm.bing.net/th/id/OIP.l8kdR8PHy_q2l2X5Ev4L7gHaEK?pid=Api&P=0&h=180",
    "badge": "DEAL",
    "languages": "JAPANESE | ENGLISH | HINDI"
  },
  {
    "id": 6,
    "title": "Breaking Bad",
    "image": "https://tse2.mm.bing.net/th/id/OIP.NIWpNyuoSEnZkGaG3KJHFQHaEK?pid=Api&P=0&h=180",
    "badge": "NEW SEASON"
  },
  {
    "id": 7,
    "title": "The Crown",
    "image": "https://tse4.mm.bing.net/th/id/OIP.MwbCMbk5UXRPVgbb7VpBZgHaK-?pid=Api&P=0&h=180",
    "languages": "ENGLISH | HINDI"
  },
  {
    "id": 8,
    "title": "One Piece",
    "image": "https://tse3.mm.bing.net/th/id/OIP.l_fNFXOK0EtlSqfnmk4f6wHaKk?pid=Api&P=0&h=180",
    "badge": "DEAL",
    "languages": "JAPANESE | HINDI | TAMIL"
  },
  {
    "id": 9,
    "title": "Stranger Things",
    "image": "https://tse3.mm.bing.net/th/id/OIP.LngZ6NEkjKixxwI0g61rMAHaEK?pid=Api&P=0&h=180",
    "badge": "NEW EPISODE"
  },
  {
    "id": 10,
    "title": "Money Heist",
    "image": "https://tse1.mm.bing.net/th/id/OIP.hZWnF_2KHVPKVd0H8VNJDAHaDt?pid=Api&P=0&h=180",
    "languages": "SPANISH | ENGLISH | HINDI"
  }
]

  private registerSwiperElements(): void {
    if (typeof window !== 'undefined') {
      import('swiper/element/bundle').then((module) => {
        module.register();
      });
    }
  }
}

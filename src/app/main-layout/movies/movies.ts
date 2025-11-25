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
  imports: [CommonModule, CardCarousel],
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
      title: "Cloud Atlas",
      image: "https://tse1.mm.bing.net/th/id/OIP.Bh7gY7pFr9s3uL1UVV8sSQHaEo?pid=Api&P=0&h=180",
      languages: "ENGLISH | HINDI"
    },
    {
      id: 2,
      title: "Breaking Bad",
      image: "https://tse2.mm.bing.net/th/id/OIP.NIWpNyuoSEnZkGaG3KJHFQHaEK?pid=Api&P=0&h=180",
      badge: "NEW SEASON"
    },
    {
      id: 3,
      title: "The Crown",
      image: "https://tse3.mm.bing.net/th/id/OIP.sav2k7ummFMNgVnGFJy05QHaK-?pid=Api&P=0&h=180",
      languages: "ENGLISH | HINDI"
    },
    {
      id: 4,
      title: "Money Heist",
      image: "https://tse1.mm.bing.net/th/id/OIP.hAMO80mXhC3N4OAqyfz55gHaK-?pid=Api&P=0&h=180",
      languages: "SPANISH | ENGLISH | HINDI"
    },
    {
      id: 5,
      title: "The Witcher",
      image: "https://tse4.mm.bing.net/th/id/OIP.f0G0jQB0zlZRftE0hKNJ1AHaEK?pid=Api&P=0&h=180",
      badge: "NEW SEASON"
    },
    {
      id: 6,
      title: "Death Note",
      image: "https://tse4.mm.bing.net/th/id/OIP.vQLsHotSW_E8kCsnT6Ls8QHaFj?pid=Api&P=0&h=180",
      badge: "DEAL",
      languages: "JAPANESE | ENGLISH | HINDI"
    },
    {
      id: 7,
      title: "Game of Thrones",
      image: "https://tse2.mm.bing.net/th/id/OIP.tE3x-7_ZXLlDhxayA4gRFQHaFj?pid=Api&P=0&h=180"
    },
    {
      id: 8,
      title: "Peaky Blinders",
      image: "https://tse3.mm.bing.net/th/id/OIP.mIytJmKMuKXsxAUvYfHtlwHaLH?pid=Api&P=0&h=180",
      languages: "ENGLISH | HINDI"
    },
    {
      id: 9,
      title: "Squid Game",
      image: "https://tse1.mm.bing.net/th/id/OIP.HmXTYZJCKIkgm_diemL24wHaEK?pid=Api&P=0&h=180",
      badge: "TRENDING",
      languages: "KOREAN | ENGLISH | HINDI"
    }
  ]

  // SUBSCRIPTION DATA (12 items)
  subscriptionItems: CarouselItem[] = [
  {
    id: 1,
    title: "The Shawshank ",
    year: "1994",
    rating: "9.3",
    image: "https://tse2.mm.bing.net/th/id/OIP.Fw1z8IvhQHMT9pGX5QYVkgHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 2,
    title: "The Godfather",
    year: "1972",
    rating:" 9.2",
    image: "https://tse2.mm.bing.net/th/id/OIP._pV0hinK_lWXvZDOLzz8CwHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: "2008",
    rating: "9.0",
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
  },
  {
    id: 4,
    title: "The Godfather Part II",
    year: "1974",
    rating: "9.0",
    image: "https://tse3.mm.bing.net/th/id/OIP.7oC_cq0zlZwSROBgf5FbswHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 5,
    title: "12 Angry Men",
    year: "1957",
    rating: "9.0",
    image: "https://tse4.mm.bing.net/th/id/OIP.JmCTUqqKh_soiza8CNqqaQHaEI?pid=Api&P=0&h=180"
  },
  {
    id: 6,
    title: "Schindler's List",
    year: "1993",
    rating: "8.9",
    image: "https://tse4.mm.bing.net/th/id/OIP.PQf7uzCAteFahGcLBOBVcwHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    year: "2003",
    rating: "8.9",
    image: "https://tse3.mm.bing.net/th/id/OIP.fg3BR1R7IMIj6gjJNJQ05AHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 8,
    title: "Pulp Fiction",
    year: "1994",
    rating: "8.9",
    image: "https://tse4.mm.bing.net/th/id/OIP.-LYiA1Vwh7BLG6CnXtDL5gHaD5?pid=Api&P=0&h=180"
  },
  {
    id: 9,
    title: "The Lord of the Rings",
    year: "2001",
    rating: "8.8",
    image: "https://tse2.mm.bing.net/th/id/OIP.C7V9E080oOAYnfXQNxQLkAHaJ4?pid=Api&P=0&h=180"
  },
  {
    id: 10,
    title: "the Bad and the Ugly",
    year: "1966",
    rating: "8.8",
    image: "https://tse4.mm.bing.net/th/id/OIP.rOQ8Jj7nRPk9tiec56961gHaEK?pid=Api&P=0&h=180"
  }
]


  // TOP 10 CAROUSEL DATA (15 items)
  top10Items: CarouselItem[] = [
  {
    id: 1,
    title: 'Kantara',
    image: 'https://tse1.mm.bing.net/th/id/OIP.DutLYHTqpFXii7TD8i_JBgHaEK?pid=Api&rs=1&c=1&qlt=95&w=212&h=119',
    badge: 'AMAZON ORIGINAL',
    isCrowned: true,
    year: '2023',
    rating: 'U/A 13+',
    description: 'A gripping action drama film'
  },
  {
    id: 2,
    title: 'Baaghi 4',
    image: 'https://tse4.mm.bing.net/th/id/OIP.wYp2yEPRafyY-iZNLWSS3gHaEK?pid=Api&P=0&h=180',
    badge: 'AMAZON ORIGINAL',
    isCrowned: true,
    year: '2024',
    rating: 'U/A 18+',
    description: 'High-octane action thriller'
  },
  {
    id: 3,
    title: 'Gooli',
    image: 'https://tse3.mm.bing.net/th/id/OIP.sgdMBhvcAS7qkTPg_qOOrAHaEK?pid=Api&P=0&h=180',
    badge: 'AMAZON',
    isCrowned: true,
    year: '2023',
    rating: 'U/A 16+',
    description: 'Intense crime drama'
  },
  {
    id: 4,
    title: 'Housefull 5',
    image: 'https://tse2.mm.bing.net/th/id/OIP.t7v7UlEPvyJDpqYqPyI7ywHaJQ?pid=Api&P=0&h=180',
    badge: 'AMAZON ORIGINAL',
    isCrowned: true,
    year: '2024',
    rating: 'U/A 13+',
    description: 'Comedy-filled family entertainer'
  },
  {
    id: 5,
    title: 'WishaaNCH',
    image: 'https://tse3.mm.bing.net/th/id/OIP.6F8QFChUp9KW-yC8sCk_1QHaEK?pid=Api&P=0&h=180',
    badge: 'AMAZON',
    isCrowned: true,
    year: '2023',
    rating: 'U/A 16+',
    description: 'Adventure drama with twists'
  },
  {
    id: 6,
    title: 'RRR',
    image: 'https://tse1.mm.bing.net/th/id/OIP.1TDxlW4gnL97TFrzHtu-EwHaEK?pid=Api&P=0&h=180',
    badge: 'AMAZON ORIGINAL',
    isCrowned: true,
    year: '2022',
    rating: 'U/A 18+',
    description: 'Epic historical action drama'
  },
  {
    id: 7,
    title: 'Animal',
    image: 'https://tse1.mm.bing.net/th/id/OIP.TE_LOF2lqkPBhzVu6lC3YQHaKX?pid=Api&P=0&h=180',
    badge: 'AMAZON',
    isCrowned: true,
    year: '2024',
    rating: 'U/A 18+',
    description: 'Action-packed thriller with intense drama'
  }
]


  // GRID LAYOUT DATA (18 items)
  gridItems: CarouselItem[] = [
  {
    id: 1,
    title: 'The Crown',
    image: 'https://tse4.mm.bing.net/th/id/OIP.xHllloxeQgfMwKVmZ7WNewHaEK?pid=Api&P=0&h=180',
    description: 'Historical Drama',
    year: '2023',
    rating: 'U/A 13+'
  },
  {
    id: 2,
    title: 'Stranger Things',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop&q=80',
    description: 'Sci-Fi Horror',
    year: '2023',
    rating: 'U/A 16+'
  },
  {
    id: 3,
    title: 'The Mandalorian',
    image: 'https://tse1.mm.bing.net/th/id/OIP.yfOukRDrLeJEgj0p_047-AHaK-?pid=Api&P=0&h=180',
    badge: 'NEW EPISODE',
    year: '2024',
    rating: 'U/A 13+',
    description: 'Star Wars adventure series'
  },
  {
    id: 4,
    title: 'Wednesday',
    image: 'https://tse3.mm.bing.net/th/id/OIP.cQDeJ1WD-xwZHCRKCOxrvAHaHa?pid=Api&P=0&h=180',
    year: '2024',
    rating: 'U/A 16+',
    description: 'Mystery comedy-drama'
  },
  {
    id: 5,
    title: 'The Witcher',
    image: 'https://tse4.mm.bing.net/th/id/OIP.f0G0jQB0zlZRftE0hKNJ1AHaEK?pid=Api&P=0&h=180',
    year: '2023',
    rating: 'U/A 16+',
    description: 'Fantasy action series'
  },
  {
    id: 6,
    title: 'House of Dragon',
    image: 'https://tse3.mm.bing.net/th/id/OIP.m218duSDU9NKiANEiqSTGQHaFj?pid=Api&P=0&h=180',
    year: '2024',
    rating: 'U/A 18+',
    description: 'Epic prequel to Game of Thrones'
  },
  {
    id: 7,
    title: 'Ozark',
    image: 'https://tse4.mm.bing.net/th/id/OIP.fF0XvfJr5uVJhuoR9NJMyAHaK-?pid=Api&P=0&h=180',
    badge: 'TRENDING',
    year: '2023',
    rating: 'U/A 18+',
    description: 'Crime drama series'
  },
  {
    id: 8,
    title: 'Lucifer',
    image: 'https://tse2.mm.bing.net/th/id/OIP.EF844G8otlg0WeQx_6ByzwHaEK?pid=Api&P=0&h=180',
    year: '2023',
    rating: 'U/A 16+',
    description: 'Comedy-drama about the Devil'
  },
  {
    id: 9,
    title: 'Dark',
    image: 'https://tse1.mm.bing.net/th/id/OIP.lAAQgxyQENm-oPQK_0xf2wAAAA?pid=Api&P=0&h=180',
    description: 'Mystery Thriller',
    year: '2023',
    rating: 'U/A 16+'
  },
  {
    id: 10,
    title: 'Westworld',
    image: 'https://tse4.mm.bing.net/th/id/OIP.ecVAaCXZotLiGIog8847iQHaEU?pid=Api&P=0&h=180',
    year: '2024',
    rating: 'U/A 16+',
    description: 'Sci-Fi drama about AI and humans'
  },
  {
    id: 11,
    title: 'The Umbrella Academy',
    image: 'https://tse2.mm.bing.net/th/id/OIP.2U_N2yTBuPMToDR3PqbvwAHaEK?pid=Api&P=0&h=180',
    badge: 'NEW SEASON',
    year: '2024',
    rating: 'U/A 13+',
    description: 'Superhero family drama'
  },
  {
    id: 12,
    title: 'Loki',
    image: 'https://tse3.mm.bing.net/th/id/OIP.itTnxxFtmeYkutGwXH-ejwHaKe?pid=Api&P=0&h=180',
    year: '2024',
    rating: 'U/A 13+',
    description: 'Marvel fantasy series'
  },
  {
    id: 13,
    title: 'Moon Knight',
    image: 'https://tse3.mm.bing.net/th/id/OIP.gy3ksh6OdSm7V5mBFw_WzgHaLZ?pid=Api&P=0&h=180',
    year: '2024',
    rating: 'U/A 16+',
    description: 'Superhero mystery series'
  },
  {
    id: 14,
    title: 'Peacemaker',
    image: 'https://tse4.mm.bing.net/th/id/OIP.iU_L12mvLTHb14_-zDWZtwHaEK?pid=Api&P=0&h=180',
    year: '2023',
    rating: 'U/A 16+',
    description: 'Action comedy series'
  },
  {
    id: 15,
    title: 'Andor',
    image: 'https://tse2.mm.bing.net/th/id/OIP.necSiHL7lXDwmHnDUZ_J4gHaEK?pid=Api&P=0&h=180',
    description: 'Star Wars Series',
    year: '2024',
    rating: 'U/A 13+'
  },
  {
    id: 16,
    title: 'Severance',
    image: 'https://tse4.mm.bing.net/th/id/OIP.teKsP4g_Y_r8cdo0Zb3_HAHaDt?pid=Api&P=0&h=180',
    badge: 'TRENDING',
    year: '2024',
    rating: 'U/A 16+',
    description: 'Corporate psychological thriller'
  },
  {
    id: 17,
    title: 'The Last of Us',
    image: 'https://tse4.mm.bing.net/th/id/OIP.FoYFehq3r9s3Tk0iJLHOrgHaEG?pid=Api&P=0&h=180',
    year: '2023',
    rating: 'U/A 18+',
    description: 'Post-apocalyptic drama'
  },
  {
    id: 18,
    title: 'Rings of Power',
    image: 'https://tse4.mm.bing.net/th/id/OIP.G9iRYQGRkOiDzyhWTIoWigHaFj?pid=Api&P=0&h=180',
    description: 'Fantasy Epic',
    year: '2024',
    rating: 'U/A 13+'
  }
]


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
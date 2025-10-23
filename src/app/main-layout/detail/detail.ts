import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CardCarousel, CarouselItem } from '../../card-carousel/card-carousel';
import { Card } from '../card/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
  selector: 'app-detail',
  imports: [CommonModule, CardCarousel, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class Detail {
  id!: string;
  private route = inject(ActivatedRoute);
  // Movie Data
  movieTitle = 'Madharaasi';
  rankBadge = '#4 in India';
  description = "Premnath, a tough NIA officer, uncovers a syndicate's plot to smuggle guns into Tamil Nadu. Raghu, traumatized by his family's death, finds love in Malathy but is dragged into the mission. When Chirag abducts her, Raghu and Premnath must race against time to stop Virat's gang, leading to an emotional and action-packed showdown.";
  duration = '2 h 46 min';
  year = '2025';
  rating = 'U/A 16+';
  genre = 'Action';
  backgroundImage = 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000';
 
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
 
  // State
  isLiked = false;
  isDisliked = false;

  // Event Handlers
  onWatchClick() {
    console.log('Watch with Prime clicked');
  }

  onRentClick() {
    console.log('Rent clicked');
  }

  onMoreOptionsClick() {
    console.log('More options clicked');
  }

  onTrailerClick() {
    console.log('Trailer clicked');
  }

  onAddToListClick() {
    console.log('Add to list clicked');
  }

  onLikeClick() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.isDisliked = false;
    }
    console.log('Like clicked', this.isLiked);
  }

  onDislikeClick() {
    this.isDisliked = !this.isDisliked;
    if (this.isDisliked) {
      this.isLiked = false;
    }
    console.log('Dislike clicked', this.isDisliked);
  }

  onShareClick() {
    console.log('Share clicked');
  }
  ngOnInit() {
    // Option 1: Snapshot (for static routes)
    this.id = this.route.snapshot.paramMap.get('id')!;

    // Option 2: Subscribe (for dynamic param changes)
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!;
    });

    console.log('User ID:', this.id);
  }

  tabs = ['Episodes', 'Extras', 'Related', 'Details'];
  selectedTab = 'Episodes'; // Default tab

  episodes = [
    {
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop&q=80',
      title: 'S3 E1 - Rangbaazi',
      date: 'May 28, 2024',
      duration: '48min',
      type:'First episode free',
      description:
        "Pradhan's desperate attempt to prevent Abhishek's impending transfer intensifies the conflict between the Pradhan gang and the MLA. Prahlad finds it difficult to make peace with his new reality.",
    },
    {
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1920&h=1080&fit=crop&q=80',
      title: 'S3 E2 - Gaddha',
      date: 'May 28, 2024',
      duration: '41min',
      type:'Watch with a Prime membership',
      description:
        'Abhishek returns with the resolve of staying away from village politics. Fearing loss of reputation, Pradhan seeks Abhishek’s help.',
    },
  ];
  cast = [
    'Jitendra Kumar',
    'Neena Gupta',
    'Raghubir Yadav',
    'Chandan Roy',
    'Faisal Malik',
  ];
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
    extras = [
    {
         image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000'
         ,
      title: 'Culpa Mia & Tuya Recap',
      duration: '1min | A | Subtitles available',
      description:
        "Jenna and Lion's wedding brings about the long-awaited reunion between Noah and Nick after their breakup. Nick’s inability to forgive Noah stands as an insurmountable barrier.",
    },
    {
      image:
        'https://images.unsplash.com/photo-1500964757637-c85e8a162699?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
      title: 'Behind The Scenes',
      duration: '3min | U/A 13+',
      description:
        'Go behind the making of “Our Fault”, with unseen moments and exclusive interviews from the main cast.',
    },
  ];
}

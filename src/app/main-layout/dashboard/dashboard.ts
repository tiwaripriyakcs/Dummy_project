import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
interface Movie {
  id: number;
  title: string;
  image: string;
  transform: string;
}

interface Subscription {
  id: number;
  name: string;
  logo: string;
  bgColor: string;
}
@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  private router = inject(Router);

 readonly festiveReleases = [
    {
      id: 1,
      title: 'Godzilla',
      subtitle: '(Hindi)',
      badge: 'NEW ORIGINAL MOVIE',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500',
      gradient: 'from-blue-900/50 to-black/80'
    },
    {
      id: 2,
      title: 'Two Much',
      subtitle: 'TWO TWINKLE',
      badge: 'NEW EPISODE THURSDAY',
      image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=500',
      gradient: 'from-green-900/50 to-black/80'
    },
    {
      id: 3,
      title: 'Play Dirty',
      subtitle: '',
      badge: 'NEW ORIGINAL MOVIE',
      image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500',
      gradient: 'from-red-900/50 to-black/80'
    },
    {
      id: 4,
      title: 'Maharaasi',
      subtitle: '',
      badge: 'NEW ORIGINAL SERIES',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500',
      gradient: 'from-yellow-900/50 to-black/80'
    }
  ];
  readonly rentalMovies: Movie[] = [
    {
      id: 1,
      title: 'Sister Midnight',
      image: 'https://tse4.mm.bing.net/th/id/OIP.xYkT6R5sVR-RhBjmeCym1QHaEK?pid=Api&P=0&h=180',
      transform: 'rotate-[-8deg] translate-x-[10%] translate-y-[-5%]'
    },
    {
      id: 2,
      title: 'Mission Impossible',
    image: 'https://tse4.mm.bing.net/th/id/OIP.xYkT6R5sVR-RhBjmeCym1QHaEK?pid=Api&P=0&h=180',
      transform: 'rotate-[-4deg] translate-x-[5%] translate-y-[-2%]'
    },
    {
      id: 3,
      title: 'Jurassic World Rebirth',
      image: 'https://tse4.mm.bing.net/th/id/OIP.xYkT6R5sVR-RhBjmeCym1QHaEK?pid=Api&P=0&h=180',
      transform: 'rotate-[0deg] z-10'
    },
    {
      id: 4,
      title: 'Spider-Man',
     image: 'https://tse4.mm.bing.net/th/id/OIP.xYkT6R5sVR-RhBjmeCym1QHaEK?pid=Api&P=0&h=180',
      transform: 'rotate-[4deg] translate-x-[-5%] translate-y-[2%]'
    },
    {
      id: 5,
      title: 'Nobody 2',
      image: 'https://tse4.mm.bing.net/th/id/OIP.xYkT6R5sVR-RhBjmeCym1QHaEK?pid=Api&P=0&h=180',
      transform: 'rotate-[8deg] translate-x-[-10%] translate-y-[5%]'
    },
    {
      id: 6,
      title: 'The Naked Gun',
      image: 'https://tse4.mm.bing.net/th/id/OIP.xYkT6R5sVR-RhBjmeCym1QHaEK?pid=Api&P=0&h=180',
      transform: 'rotate-[12deg] translate-x-[-15%] translate-y-[8%]'
    }
  ];

  // Subscriptions Section Data
  readonly subscriptions: Subscription[] = [
    {
      id: 1,
      name: 'Apple TV+',
      logo: 'tv+',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-900'
    },
    {
      id: 2,
      name: 'Crunchyroll',
      logo: 'Crunchyroll',
      bgColor: 'bg-gradient-to-br from-orange-600 to-orange-800'
    },
    {
      id: 3,
      name: 'Lionsgate Play',
      logo: 'LIONSGATE PLAY',
      bgColor: 'bg-gradient-to-br from-blue-700 to-blue-900'
    },
    {
      id: 4,
      name: 'Discovery+',
      logo: 'discovery+',
      bgColor: 'bg-gradient-to-br from-slate-600 to-slate-800'
    },
    {
      id: 5,
      name: 'Anime Times',
      logo: 'Anime Times',
      bgColor: 'bg-gradient-to-br from-indigo-700 to-indigo-900'
    },
    {
      id: 6,
      name: 'ManoramaMAX',
      logo: 'manoramaMAX',
      bgColor: 'bg-gradient-to-br from-teal-700 to-teal-900'
    },
    {
      id: 7,
      name: 'Chaupal',
      logo: 'CHAUPAL',
      bgColor: 'bg-gradient-to-br from-blue-800 to-blue-950'
    },
    {
      id: 8,
      name: 'BBC Player',
      logo: 'BBC PLAYER',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-900'
    },
    {
      id: 9,
      name: 'Fancode',
      logo: 'FANCODE',
      bgColor: 'bg-gradient-to-br from-cyan-700 to-cyan-900'
    }
  ];

   navigateToDetail(itemId: string): void {
    this.router.navigate(['/detail', itemId]);
  }
}
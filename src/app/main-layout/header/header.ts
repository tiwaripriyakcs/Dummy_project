import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private router = inject(Router);
  showLanguageDropdown = signal(false);
  showGridDropdown = signal(false);
  showUserDropdown = signal(false);
  showMobileMenu = signal(false);
  selectedLanguage = signal('EN');
  isScrolled = signal(false);

  readonly languages = [
    'Bahasa Indonesia', 'Italiano', 'Suomi', 'العربية', '한국어',
    'Bahasa Melayu', 'Magyar', 'Svenska', 'हिन्दी',
    'Dansk', 'Nederlands', 'Türkçe', 'தமிழ்',
    'Deutsch', 'Norsk', 'Wikang Filipino', 'తెలుగు',
    'English', 'Polski', 'Čeština', 'ไทย',
    'Español', 'Português (Brasil)', 'Ελληνικά', '日本語',
    'Español Latinoamérica', 'Português (Portugal)', 'Pусский', '简体中文',
    'Français', 'Română', 'עברית', '繁體中文'
  ];

  readonly genres = [
    'Action and adventure', 'Mystery and thrillers', 'Anime', 'Romance',
    'Comedy', 'Science fiction', 'Documentary', 'Drama',
    'Fantasy', 'Horror', 'Kids'
  ];

  readonly featuredCollections = [
    'Home Premiere', 'New Releases', 'MX Player', 'Critically acclaimed', 'Kids'
  ];

  readonly navLinks = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Movies', path: '/movies' },
    { label: 'TV shows', path: '/tv-shows' },
    { label: 'Live TV', path: '/live-tv' },
    { label: 'Subscriptions', path: '/movies' }
  ];

  readonly userMenuItems = [
    { label: 'Sign in', path: '/login' },
    { label: 'help', path: '/help' },
    { label: 'Watch Anywhere', path: '/watch-anywhere' },
  ];

  toggleMobileMenu() {
    this.showMobileMenu.update(v => !v);
  }

  selectLanguage(lang: string) {
    this.selectedLanguage.set(lang);
    this.showLanguageDropdown.set(false);
  }

  setLanguageDropdown(v: boolean) {
    this.showLanguageDropdown.set(v);
  }

  setGridDropdown(v: boolean) {
    this.showGridDropdown.set(v);
  }

  setUserDropdown(v: boolean) {
    this.showUserDropdown.set(v);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    this.isScrolled.set(scrollY > 50);
  }

  goToCollection(data: any) {
    this.router.navigate(['/features-collection',data]);
    this.showGridDropdown.set(false);

  }
}

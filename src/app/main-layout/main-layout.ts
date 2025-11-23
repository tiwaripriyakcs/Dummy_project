import { Component, inject } from '@angular/core';
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-layout',
  imports: [Footer, Header, RouterOutlet,CommonModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
isPanelOpen = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.isPanelOpen = !!this.route.snapshot.children.find(r => r.outlet === 'sidepanel');
    });
  }

  closePanel() {
    this.router.navigate([{ outlets: { sidepanel: null } }]);
  }
}



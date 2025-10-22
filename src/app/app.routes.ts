import { Routes } from '@angular/router';
import { Dashboard } from './main-layout/dashboard/dashboard';
import { Movies } from './main-layout/movies/movies';
import { TvShows } from './main-layout/tv-shows/tv-shows';
import { Login } from './login/login';
import { MainLayout } from './main-layout/main-layout';
import { TermsCondition } from './main-layout/terms-condition/terms-condition';
import { Detail } from './main-layout/detail/detail';
import { WatchAnywhere } from './main-layout/watch-anywhere/watch-anywhere';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout, // layout with header/footer
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'movies', component: Movies },
      { path: 'tv-shows', component: TvShows },
      { path: 'detail/:id', component: Detail },

      { path: 'terms-condition', component: TermsCondition },
      { path: 'watch-anywhere', component: WatchAnywhere }

    ],
  },
  { path: 'login', component: Login }, // no header/footer

];

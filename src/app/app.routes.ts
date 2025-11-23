import { Routes } from '@angular/router';
import { Dashboard } from './main-layout/dashboard/dashboard';
import { Movies } from './main-layout/movies/movies';
import { TvShows } from './main-layout/tv-shows/tv-shows';
import { Login } from './login/login';
import { MainLayout } from './main-layout/main-layout';
import { TermsCondition } from './main-layout/terms-condition/terms-condition';
import { Detail } from './main-layout/detail/detail';
import { WatchAnywhere } from './main-layout/watch-anywhere/watch-anywhere';
import { NotificationSlide } from './main-layout/notification-slide/notification-slide';
import { LiveTv } from './main-layout/live-tv/live-tv';
import { FeatureCollection } from './main-layout/feature-collection/feature-collection';
import { HelpPage } from './main-layout/help-page/help-page';

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
      {path:'live-tv',component:LiveTv},
      {path:'help',component:HelpPage},

      {path:'features-collection/:data',component:FeatureCollection},


      { path: 'terms-condition', component: TermsCondition },
      { path: 'watch-anywhere', component: WatchAnywhere },
    {
        path: 'notification',
        component: NotificationSlide,
        outlet: 'sidepanel'
      }


    ],
  },
  { path: 'login', component: Login }, // no header/footer

];

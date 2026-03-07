import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { BrowseComponent } from './pages/browse/browse.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'browse', component: BrowseComponent },
  { path: '**', redirectTo: 'profiles' }
];

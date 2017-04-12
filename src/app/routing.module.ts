import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BeersComponent } from './beers.component';
import { FavoritesComponent } from './favorites.component';

const routes: Routes = [
  { path: '', redirectTo: 'favorites', pathMatch: 'full' },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'beer', component: BeersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }

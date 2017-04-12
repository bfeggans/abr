import { Component } from '@angular/core';

import { Beer } from './models/beer';
import { BeerService } from './beer.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent {
  bs: BeerService;
  favorites: Beer[];

  constructor() {
    this.bs = new BeerService();
    this.favorites = this.bs.getFavoriteBeers();
  }
}

import { Component } from '@angular/core';

import { Beer } from './models/beer';
import { BeerService } from './beer.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent {
  favorites: Beer[];

  constructor(private beerService: BeerService) {
    this.favorites = this.beerService.getFavoriteBeers();
  }
}

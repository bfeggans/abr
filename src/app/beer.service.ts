import { Injectable } from '@angular/core';

import { Beer } from './models/beer';

@Injectable()
export class BeerService {
  getBeers() {
    return [
      new Beer('Miller Lite', 3, true),
      new Beer('PBR', 2, false),
      new Beer('Fall Green Hat', 2, false)
    ];
  }

  getFavoriteBeers() {
    return this.getBeers().filter(beer => beer.isFavorite);
  }
}

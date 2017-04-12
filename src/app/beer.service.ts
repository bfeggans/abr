import { Beer } from './models/beer';

export class BeerService {
  getBeers() {
    let beers: Beer[];
    beers = [
      new Beer('Miller Lite', 3, true),
      new Beer('PBR', 2, false),
      new Beer('Fall Green Hat', 2, false)
    ];

    return beers;
  }

  getFavoriteBeers() {
    return this.getBeers().filter(beer => beer.isFavorite);
  }
}

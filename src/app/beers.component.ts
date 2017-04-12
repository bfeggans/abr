import { Component } from '@angular/core';

import { Beer } from './models/beer';
import { BeerService } from './beer.service';

@Component({
  selector: 'beers',
  templateUrl: './beers.component.html'
})
export class BeersComponent {
  title:string;
  name:string;
  beers:Beer[] = [];
  newBeerName:string;
  newBeerRating:string;
  bs: BeerService;

  constructor() {
    this.bs = new BeerService();
    this.beers = this.bs.getBeers();
  }

  addBeer() {
    this.beers.push(new Beer(this.newBeerName, this.newBeerRating || 3, true));
    this.newBeerName = '';
    this.newBeerRating = '3';
  }
}

import { Component } from '@angular/core';

import { BeerService } from './beer.service';
import { Beer } from './models/beer';

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

  constructor(private beerService: BeerService) {
    this.beers = this.beerService.getBeers();
  }

  addBeer() {
    this.beers.push(new Beer(this.newBeerName, this.newBeerRating || 3, true));
    this.newBeerName = '';
    this.newBeerRating = '3';
  }
}

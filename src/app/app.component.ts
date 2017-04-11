import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  name:string;
  beers:Beer[] = [];
  newBeerName:string;
  newBeerRating:string;

  constructor() {
    this.title = `Beer Rater`;
    this.beers.push(new Beer('Miller Lite', 3));
    this.beers.push(new Beer('PBR', 2));
    this.beers.push(new Beer('Fall Green Hat', 2));
  }

  addBeer() {
    this.beers.push(new Beer(this.newBeerName, this.newBeerRating || 3))
    this.newBeerName = '';
    this.newBeerRating = '3';
  }
}

class Beer {
  name: string;
  rating: number;

  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

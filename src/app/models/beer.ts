export class Beer {
  id: number;
  name: string;
  rating: number;
  isFavorite: boolean;

  constructor(name, rating, isFavorite) {
    this.name = name;
    this.rating = rating;
    this.isFavorite = isFavorite;
  }
}

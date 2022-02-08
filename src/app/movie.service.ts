import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    { id: 1, title: 'Spiderman', year : '2002', director: 'Sam Raini' },
    { id: 2, title: 'Student No: s00210945', year : '2022', director: 'Sean Dowdall' },
    { id: 3, title: 'Pulp Fiction', year : '1994', director: 'Quentin Tarantino' },
  ];

  getMovies() {
    return this.movieList;
  }
}

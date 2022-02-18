import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    { title: 'Spiderman', year : '2002', director: 'Sam Raini' },
    { title: 'Student No: s00210945', year : '2022', director: 'Sean Dowdall' },
    { title: 'Pulp Fiction', year : '1994', director: 'Quentin Tarantino' },
  ];

  getMovies() {
    return this.movieList;
  }

  addMovie(movietitle:string, moviedirector:string , movieyear:string) {
    this.movieList.push({title:movietitle, director:moviedirector, year:movieyear});
  }

  ngOnInit(){
    
  }
}

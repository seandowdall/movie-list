import { Injectable } from '@angular/core';
import { Movie } from "./movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie: Movie;

  constructor() { }

  movieList = [
    new Movie('The Godfather', '1972', 'Francis Ford Coppola'),
    new Movie('Millers Crossing', '1990', 'The Coen Brothers'),
    new Movie('Dial M for Murder', '1954', 'Alfred Hitchcock'),
    new Movie('Sean Dowdall', '2022', 's00210945')
   
  ];

  getMovies() {
    return this.movieList;
  }

  addMovie(movietitle:string, moviedirector:string , movieyear:string, ) {
    this.movieList.push(new Movie(movietitle, movieyear, moviedirector));
  }

  ngOnInit(){
    
  }
}

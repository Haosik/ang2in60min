import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service'

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})

export class UserComponent  {
  name: string;
  occupy: string;
  address: address;
  movies: string[];
  showMovies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    console.log("Component's constructor ran")
    this.name = 'Nick',
    this.occupy = 'Front-End',
    this.address = {
        city: 'Kyiv',
        metro: '"Chernihivska"'
    },
    this.movies = ['The Island', 'Inception', '2012', 'The Day After Tomorrow'],
    this.showMovies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }
  
  toggleMovies() {
    this.showMovies = !this.showMovies;
  }

  addMovie(movie:string) {
    this.movies.push(movie);
  }
  
  deleteThisMovie(i:number) {
    this.movies.splice(i, 1);
  }

}

interface address {
  city: string,
  metro: string
}

interface Post {
  id: number;
  title: string;
  body: string;
}
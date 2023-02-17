import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/users-interfaces';
import { Post } from '../interfaces/posts-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService  {
  apiURL: string = 'https://jsonplaceholder.typicode.com';
  users: User[] = [];

  constructor( private http: HttpClient) { }

  loadUsers() {
    const url = `${this.apiURL}/users`;
    this.http.get<User[]>( url ).subscribe( user => {
      this.users = user;
      this.getPosts();
    });
  }

  getPosts()  {
    for (const user of this.users) {
      this.http.get<Post[]>( `${this.apiURL}/posts?userId=${user.id}` )
      .subscribe( posts => { user.posts = posts })
    }
  }
  
}

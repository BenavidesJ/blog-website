import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { User } from '../../interfaces/users-interfaces';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../interfaces/posts-interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls:['./post.component.css']
})
export class PostsComponent implements OnInit {

  apiURL: string = 'https://jsonplaceholder.typicode.com';
  users: User[] = [];

  constructor( private http: HttpClient) { }
  ngOnInit(): void {
    const url = `${this.apiURL}/users`;
      this.http.get<User[]>( url ).subscribe( user => {
      this.users = user;
      this.getPosts();
    })
  }

  getPosts()  {
    for (const user of this.users) {
      this.http.get<Post[]>( `${this.apiURL}/posts?userId=${user.id}` )
      .subscribe( posts => { user.posts = posts })
    }
  }

}

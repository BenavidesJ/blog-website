import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { PostsResponse } from '../../interfaces/posts-interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls:['./post.component.css']
})
export class PostsComponent implements OnInit{

  posts: PostsResponse[] = [];

  constructor( private postsService: PostsService) {}
  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe( post => {
        this.posts = [...post];
      });
  }
}

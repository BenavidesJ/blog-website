import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsResponse } from '../interfaces/posts-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiURL: string = 'https://jsonplaceholder.typicode.com';

  constructor( private http: HttpClient) { }

  getPosts(): Observable<PostsResponse[]>{
    const url = `${this.apiURL}/posts`;
    return this.http.get<PostsResponse[]>( url );
  }
}

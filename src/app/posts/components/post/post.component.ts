import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/users-interfaces';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/posts-interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() users: User[] = [];

}

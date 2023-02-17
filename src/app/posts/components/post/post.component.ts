import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/users-interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() users: User[] = [];

}

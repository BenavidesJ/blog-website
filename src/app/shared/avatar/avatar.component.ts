import { Component, Input } from '@angular/core';
import { User } from '../../posts/interfaces/users-interfaces';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  @Input() user!: User;
}

import { Component } from '@angular/core';
import { User } from '../../posts/interfaces/users-interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css']
})
export class NavbarComponent {
  showMenu: boolean = false;
  user: User = {
    name: 'Jose Benavides',
    email: 'jose@gmail.com',
    id: 11,
    posts: []
  }


  showProfileMenu() {
    this.showMenu = !this.showMenu;
  }
}

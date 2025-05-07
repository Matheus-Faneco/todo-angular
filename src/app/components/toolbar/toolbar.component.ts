import {Component, OnInit} from '@angular/core';
import {Emitters} from '../../emitters/emitters';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
  authenticated = false;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    Emitters.authEmitter.subscribe(
      (auth: boolean)=> {
        this.authenticated = auth;

      }
    )
  }

  logout() {
    this.userService.logoutUser({withCredentials: true}).subscribe(
      () => this.authenticated = false
    )

  }

}

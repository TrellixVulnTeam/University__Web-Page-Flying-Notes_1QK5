import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent /* implements OnInit */ {

  users: String[] = [];

  constructor(private userService: UserServiceService) {
  }
  /*
  ngOnInit() {
      this.userService.show().subscribe(data => {
        this.users = data;
      });
  }
  */
  place() {
        this.userService.show().subscribe(data => {
          this.users = data;
        });
  }
}

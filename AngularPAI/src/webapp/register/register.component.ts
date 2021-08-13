import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'webapp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserServiceService) {
  }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    let json: any = {
      'firstName': event.target.firstName.value,
      'lastName': event.target.lastName.value,
      'email': event.target.email.value,
      'password': event.target.signPassword.value,
      'type': 'parent'
    }
    let out = this.userService.postSend('register', json);
    return false;
  }

}

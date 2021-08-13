import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'webapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserServiceService) {
  }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    let json: any = {
      'email': event.target.email.value,
      'password': event.target.signPassword.value
    }
    let out: Observable<String[]> = this.userService.postSend('login', json);
    alert(out);
    return false;
  }

}

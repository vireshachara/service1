import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../Services/logger.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-addnewuser',
  templateUrl: './addnewuser.component.html',
  styleUrls: ['./addnewuser.component.css'],
  providers: [UserService]
})
export class AddnewuserComponent implements OnInit {
  users: { name: string; status: string }[] = [];

  name: string = '';
  status: string = '';

  constructor(private userService: UserService , private loggerService : LoggerService) {}

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  addUser(){
    this.userService.addUserDetails(this.name, this.status);
  }
}




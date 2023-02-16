import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  users = [
    { name: 'Veeresh', status: 'Inactive' },
    { name: 'Janu', status: 'active' },
    { name: 'Srikanth', status: 'Inactive' },
  ];
  constructor(private http: HttpClient, private loggerService: LoggerService) {}

  ngOnInit(): void {}

  addUserDetails(name: string, status: string) {
    this.users.push({ name: name, status: status });
    this.loggerService.logMessage(name, status);
  }
}

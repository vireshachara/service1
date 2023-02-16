import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  logMessage(name: string, status: string) {
    alert("An new user name " + name + " with status " + status + " has been added")
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  onClick(title: string) {
    alert('Thank you for Enrolling' + title + 'course');
  }
}

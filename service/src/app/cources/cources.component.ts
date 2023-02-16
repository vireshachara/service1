import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css'],
  providers: [SharedService]
})
export class CourcesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

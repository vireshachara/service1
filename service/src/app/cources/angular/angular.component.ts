import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  title = " Angular ";

  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
  }

  onEnroll(){
    this.sharedService.onClick(this.title)
  }

}

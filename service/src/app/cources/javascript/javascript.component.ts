import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  title = " JavaScript ";

  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
  }
  onEnroll(){
    this.sharedService.onClick(this.title)
  }

}

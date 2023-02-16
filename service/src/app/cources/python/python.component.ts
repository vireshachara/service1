import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {
  title = " Python ";

  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
  }

  onEnroll(){
    this.sharedService.onClick(this.title)
  }

}

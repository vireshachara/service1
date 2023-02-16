import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  title = " React ";

  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
  }
  onEnroll(){
    this.sharedService.onClick(this.title)
  }

}

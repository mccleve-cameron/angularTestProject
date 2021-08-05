import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date: Date;
  startingDate:number = 1923;
  endingDate:number;



  constructor() { }

  ngOnInit() {
    this.date = new Date();
    this.endingDate = this.date.getFullYear();
  }

}

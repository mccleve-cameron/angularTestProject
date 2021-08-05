import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() itemVals:any;
  @Input() index:number;

  itemVal:string;

  numberVal:number = 0;

  constructor() { }

  ngOnInit() {
    this.itemVal = this.itemVals[this.index];
  }

  /**
   * This function should decrement the value in the input element and report
   * to the parent component that a change was made.
   */
  dec(){
    let num = this.numberVal - 1;
    if(num >= 0){
      this.numberVal = num;
    }
  }

  /**
   * This function should increment the input element and report
   * to the parent component that a change was made.
   */
  add(){
    this.numberVal = this.numberVal + 1;
  }
}

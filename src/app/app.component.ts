import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from './inventory-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items:Array<string>;
  cartTotal:number = 0;
  
  constructor(){}
  
  ngOnInit(): void {
    
  }

  /**
   * This is where we will update the number on the cart.
   * @param event 
   */
  updateCart(){
    
  }
}

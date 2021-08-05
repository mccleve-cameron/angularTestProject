import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(private http:HttpClient) { }

  getInventoryItems(){
    return ["Pizza", "Wings", "Desserts", "Subs", "Salads"];
  }

  //how would we query data from an external endpoint?
  getInventoryItemsFromEndpoint(){
    
  }
}



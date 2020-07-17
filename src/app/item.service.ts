import { Injectable } from '@angular/core';
import {Item} from './item.model';
import {Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemChange=new Subject<Item[]>();
private items:Item[]=[
  new Item("Imac",1500),
  new Item("Ipad",500),
  new Item("Iphone",600)
]

  getItem(i:number):Item{
    return this.items[i];
  }

  getItems(){
    return this.items;
  }

  deleteItem(i:number){

      this.items.splice(i,1);
      this.itemChange.next(this.items);

  }

  addItem(i:Item){
    this.items.push(i);
    this.itemChange.next(this.items);
  }

  updateItem(ind:number,i:Item){
    this.items[ind]=i;
    this.itemChange.next(this.items);

  }
  constructor() { }
}

import { Injectable } from '@angular/core';
import {Item} from './item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

private items:Item[]=[
  new Item("Imac",1500),
  new Item("Ipad",500),
  new Item("Iphone",600)
]
  getItems(){
    return this.items;
  }

  constructor() { }
}

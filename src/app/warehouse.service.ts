import { Injectable } from '@angular/core';
import {Warehouse} from './warehouse.model';
import {Stock} from './warehouse.model';
import {Item} from "./item.model";
@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

    warehouses_list:Warehouse[]=[
      new Warehouse(
        [new Stock(new Item('Iphone',600),5),new Stock(new Item('Ipad',500),10)],
        "12,New york street","NewYork"
        ),
      new Warehouse(
        [new Stock(new Item('Imac',1500),15),new Stock(new Item('Ipad',500),10)],
        "22,Washington street","Washington"
        )
      
    ]
getwh(){
  return this.warehouses_list;
}

  constructor() { }
}

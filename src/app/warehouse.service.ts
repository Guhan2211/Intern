import { Injectable } from '@angular/core';
import {Warehouse} from './warehouse.model';
import {Stock} from './warehouse.model';
import {Item} from "./item.model";
import {Subject} from "rxjs";
import {ItemService} from "./item.service";
@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  whChange=new Subject<Warehouse[]>();
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

deleteItem(i:number){

  this.warehouses_list.splice(i,1);
  this.whChange.next(this.warehouses_list);

}

addWh(i:Warehouse){
  this.warehouses_list.push(i);
  this.whChange.next(this.warehouses_list);
}

updateWh(ind:number,i:Warehouse){
  this.warehouses_list[ind].name=i.name;
  this.warehouses_list[ind].address=i.address;
  this.whChange.next(this.warehouses_list);

}

updateStock(whId:number,itemId:number,quan:number){
  var st=new Stock(this.isr.getItem(itemId),quan);
  this.warehouses_list[whId].stock.push(st);
  this.whChange.next(this.warehouses_list);
}

  constructor(private isr:ItemService) { }
}

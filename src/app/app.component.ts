import { Component, OnInit } from '@angular/core';
import {Item} from './item.model';
import {Warehouse} from './warehouse.model';
import { ItemService } from './item.service';
import { WarehouseService } from './warehouse.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  items:Item[];
  wh:Warehouse[];
  whJson:object;
  ngOnInit():void{
    this.items=this.iser.getItems();
    this.wh=this.wsr.getwh();
  }
 constructor(private iser:ItemService,private wsr:WarehouseService){
   
 }

 delete(x){
   this.items.splice(x,1);
 }

  deleteWh(x){
   this.wh.splice(x,1);
 }

 displaywh(ind){
   //var temp=this.wh.slice(ind,1);
   //console.log(temp);
   this.whJson=this.wh[ind];
 }
}
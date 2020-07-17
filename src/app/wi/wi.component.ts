import { Component, OnInit ,ViewChild, OnDestroy} from '@angular/core';
import { WarehouseService } from '../warehouse.service';
import { ItemService } from '../item.service';
import {Warehouse} from '../warehouse.model';
import {Item} from '../item.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wi',
  templateUrl: './wi.component.html',
  styleUrls: ['./wi.component.css']
})
export class WiComponent implements OnInit,OnDestroy {
  wh:Warehouse[];
  items:Item[];
  private whChangeSub:Subscription;
  private ItemChangeSub:Subscription;
  @ViewChild('f',{static:false}) stockForm:NgForm;

  constructor(private wsr:WarehouseService,private isr:ItemService) { }

  ngOnInit(): void {
    this.wh=this.wsr.getwh();
    this.items=this.isr.getItems();
    this.whChangeSub=this.wsr.whChange.subscribe(
      (wh:Warehouse[])=>{
        this.wh=wh;
      }
      )
      this.ItemChangeSub=this.isr.itemChange.subscribe(
        (items:Item[])=>{
          this.items=items;
        }
        )
  }


  updateStock(f:NgForm){
console.log(f);
this.wsr.updateStock(f.value.whId,f.value.itemId,f.value.quantity);

this.stockForm.reset();
  }

ngOnDestroy(){
  this.ItemChangeSub.unsubscribe();
  this.whChangeSub.unsubscribe();
}
}

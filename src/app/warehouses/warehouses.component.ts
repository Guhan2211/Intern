import { Component, OnInit,ViewChild,OnDestroy } from '@angular/core';
import { WarehouseService } from '../warehouse.service';
import {Warehouse} from '../warehouse.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css']
})
export class WarehousesComponent implements OnInit {
  @ViewChild('f',{static:false}) whForm:NgForm;
  private whChangeSub:Subscription;
  wh:Warehouse[];
  whJson:object;
  editedItemIndex:number;
  toggleEditMode=false;
  editMode=false;
  constructor(private wsr:WarehouseService) { }

  ngOnInit(): void {
    this.wh=this.wsr.getwh();
    this.whChangeSub=this.wsr.whChange.subscribe(
      (wh:Warehouse[])=>{
        this.wh=wh;
      }
      )



  }
  deleteWh(x){
    this.wsr.deleteItem(x);
  }


  onEdit(i:number){
    this.toggleEditMode=true;
     this.editMode=true;
     this.editedItemIndex=i;
     this.whForm.setValue({
       name:this.wh[i].name,
       address:this.wh[i].address
     });

    }


  toggler(){
    this.toggleEditMode=!this.toggleEditMode;
    this.editMode=false;
    this.whForm.reset();
  }

  onAddItem(f:NgForm){
    const newWh=new Warehouse([],f.value.address,f.value.name);

    if(this.editMode){
      this.wsr.updateWh(this.editedItemIndex,newWh);

    }
    else{

    this.wsr.addWh(newWh);
    }
    this.toggleEditMode=false;
    this.editMode=false;
    f.reset();
  }






  displaywh(ind){

    this.whJson=this.wh[ind];
  }
  ngOnDestroy(){
    this.whChangeSub.unsubscribe();
  }
}

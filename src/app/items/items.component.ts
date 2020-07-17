import { Component, OnInit ,ViewChild, OnDestroy} from '@angular/core';
import { ItemService } from '../item.service';
import {Item} from '../item.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:false}) itemForm:NgForm;
  private iChangeSub:Subscription;
  toggleEditMode=false;
  editMode=false;
  constructor(private iser:ItemService) { }
  items:Item[];
  editedItemIndex:number;
  ngOnInit(): void {
    this.items=this.iser.getItems();
    this.iChangeSub=this.iser.itemChange.subscribe(
      (items:Item[])=>{
        this.items=items;
      }
      )
  }
  delete(x){
    this.iser.deleteItem(x);
  }

  onEdit(i:number){
  this.toggleEditMode=true;
   this.editMode=true;
   this.editedItemIndex=i;
   this.itemForm.setValue({
     name:this.items[i].name,
     price:this.items[i].price
   });

  }

  onAddItem(f:NgForm){
    const newItem=new Item(f.value.name,f.value.price);

    if(this.editMode){
      this.iser.updateItem(this.editedItemIndex,newItem);

    }
    else{

    this.iser.addItem(newItem);
    }
    this.toggleEditMode=false;
    this.editMode=false;
    f.reset();
  }
  toggler(){
    this.toggleEditMode=!this.toggleEditMode;
    this.editMode=false;
    this.itemForm.reset();
  }
  ngOnDestroy(){
    this.iChangeSub.unsubscribe();
  }


}

import {Item} from "./item.model";


export class Stock{
   public item:Item;
   public quantity:number;
   constructor(item:Item,quantity:number){

    this.item=item;
    this.quantity=quantity;
   

   }
}

export class Warehouse{
 
  public stock:Stock[]
  public address:string;
 
  public name:string;

 
  constructor(stock:Stock[],address:string,name:string){
    this.stock=stock;
    this.address=address;
    this.name=name;

  }

}
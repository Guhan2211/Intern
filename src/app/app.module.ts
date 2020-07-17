import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {WarehouseService} from './warehouse.service';
import {ItemService} from './item.service';
import {FormsModule} from '@angular/forms';

import {DemoMaterialModule} from './material.module';

import { ItemsComponent } from './items/items.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { WiComponent } from './wi/wi.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WarehousesComponent,
    WiComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    FormsModule

  ],
  providers: [WarehouseService,ItemService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

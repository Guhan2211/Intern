import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {WarehouseService} from './warehouse.service';
import {ItemService} from './item.service';


import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WarehouseService,ItemService],
  exports: [MatTableModule,MatButtonModule,MatIconModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddBookComponent } from './add-book/add-book.component';
import { GetBookComponent } from './get-book/get-book.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from './products.service';
import { BuyBookComponent } from './buy-book/buy-book.component';
import { GetOrderStatusComponent } from './get-order-status/get-order-status.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    GetBookComponent,
    BuyBookComponent,
    GetOrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

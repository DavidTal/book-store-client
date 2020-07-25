// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { GetBookComponent} from './get-book/get-book.component';
import {BuyBookComponent} from './buy-book/buy-book.component';
import {GetOrderStatusComponent} from './get-order-status/get-order-status.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddBookComponent
  },
  {
    path: 'buy',
    component: BuyBookComponent
  },
  {
    path: 'books',
    component: GetBookComponent
  },
  {
    path: 'status',
    component: GetOrderStatusComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

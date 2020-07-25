import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-get-order-status',
  templateUrl: './get-order-status.component.html',
  styleUrls: ['./get-order-status.component.css']
})
export class GetOrderStatusComponent implements OnInit {

  constructor(private fb: FormBuilder, public ps: ProductsService) {
    this.createForm();
  }
  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      OrderId: ['', Validators.required ]
    });
  }

  getOrderStatus(OrderId) {
    console.log('in get order status for ID: ' + OrderId);
    this.ps.getOrderStatus(OrderId);
  }

  ngOnInit() {
  }
}

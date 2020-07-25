import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-buy-book',
  templateUrl: './buy-book.component.html',
  styleUrls: ['./buy-book.component.css']
})
export class BuyBookComponent implements OnInit {

  constructor(private fb: FormBuilder, public ps: ProductsService) {
    this.createForm();
  }
  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      BookName: ['', Validators.required ],
      Quantity: ['', Validators.required ]
    });
  }

  buyBook(BookName, Quantity) {
    console.log('in buy book');
    this.ps.buyBook(BookName, Quantity);
  }

  ngOnInit() {
  }
}

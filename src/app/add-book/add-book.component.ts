import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  constructor(private fb: FormBuilder, public ps: ProductsService) {
    this.createForm();
  }
  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      BookName: ['', Validators.required ],
      Author: ['', Validators.required ],
      Quantity: ['', Validators.required ]
    });
  }

  addBook(BookName, Author, Quantity) {
    console.log('in add book');
    this.ps.addBook(BookName, Author, Quantity);
  }

  ngOnInit() {
  }
}

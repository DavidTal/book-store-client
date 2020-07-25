import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})
export class GetBookComponent implements OnInit {

  constructor(private fb: FormBuilder, public ps: ProductsService) {
    this.createForm();
  }
  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
    });
  }

  getAllBooks() {
    console.log('in get all books');
    this.ps.getAllBooks();
  }

  ngOnInit() {
  }
}

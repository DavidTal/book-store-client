import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpParams } from "@angular/common/http";

import Book from './Books';
import {BookData} from './get-book/BookData';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:8080/book';
  public serverAddBookResponse: string;
  public serverBuyBookResponse: string;
  public serverGetOrderStatusResponse: string;
  public serverGetAllBooksResponse: any;
  constructor(private http: HttpClient) { }

  addBook(BookName, Author, Quantity) {
    console.log('In product service - add book..');

    const obj = {
      BookName,
      Author,
      Quantity
    };
    console.log(obj);

    const addUrl = `${this.uri}/add`;
    console.log('Sending: ' + addUrl);

    let params = new HttpParams();
    params = params.append('bookName', BookName);
    params = params.append('author', Author);
    params = params.append('quantity', Quantity);

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    this.http.post(addUrl, 'body', { params, headers, responseType: 'text'})
      .subscribe(
        res => {
          console.log('in post response res: ' + res);
          this.serverAddBookResponse = res;
        },
      error => {
        console.log('in ERROR response res: ' + error);
        this.serverAddBookResponse = error;
      }
      );
  }

  buyBook(BookName, Quantity) {
    console.log('In product service - buy book..');

    const obj = {
      BookName,
      Quantity
    };
    console.log(obj);

    const addUrl = `${this.uri}/buy`;
    console.log('Sending: ' + addUrl);

    let params = new HttpParams();
    params = params.append('bookName', BookName);
    params = params.append('quantity', Quantity);

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    this.http.get(addUrl, { params, responseType: 'text' })
      .subscribe(
        res => {
          console.log('in get response res: ' + res);
          this.serverBuyBookResponse = res;
        },
        error => {
          console.log('in ERROR response res: ' + error);
          this.serverBuyBookResponse = error;
        }
      );
  }

  getOrderStatus(OrderId) {
    console.log('In product service - get order status..');

    const obj = {
      OrderId
    };
    console.log(obj);

    const addUrl = `${this.uri}/order`;
    console.log('Sending: ' + addUrl);

    let params = new HttpParams();
    params = params.append('orderId', OrderId);

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    this.http.get(addUrl, { params, responseType: 'text' })
      .subscribe(
        res => {
          console.log('in get response res: ' + res);
          this.serverGetOrderStatusResponse = res;
        },
        error => {
          console.log('in ERROR response res: ' + error);
          this.serverGetOrderStatusResponse = error;
        }
      );
  }

  getAllBooks(){
    console.log('In product service - get all books..');

    const obj = {
    };
    console.log(obj);

    const addUrl = `${this.uri}/inventory`;
    console.log('Sending: ' + addUrl);

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    this.http.get(addUrl, { responseType: 'text' })
      .subscribe(
        res => {
          console.log('in get response res: ' + res);

          const jsonObj = JSON.parse(res);
          console.log('Got JSON: ' + jsonObj);
          this.serverGetAllBooksResponse = jsonObj;
        },
        error => {
          console.log('in ERROR response res: ' + error);
          this.serverGetAllBooksResponse = error;
        }
      );
  }
}

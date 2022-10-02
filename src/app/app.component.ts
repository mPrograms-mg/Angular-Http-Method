import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from './model/products';
// import { Product } from './model/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Http-Method';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ProductDetails = new FormGroup({
    pName: new FormControl(''),
    desc: new FormControl(''),
    price: new FormControl(''),
  });

  onProduct() {
    let product = JSON.stringify(this.ProductDetails.value);
    console.log('Product....', product);
    const headers = new HttpHeaders({ myHeader: 'Mahesh-Http-Product' });
    this.http
      .post(
        'https://angularhttpmethod-default-rtdb.firebaseio.com/product.json',
        product,
        { headers: headers }
      )
      .subscribe((res) => {
        console.log('Product Details....', res);
      });
  }
}

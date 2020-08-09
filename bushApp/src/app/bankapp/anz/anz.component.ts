import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface AnzProduct {
  productId: string;
  name: string;
  description: string;
  effectiveFrom: Date;
  productCategory: string;
}

export interface AnzData {
  products: AnzProduct[];
}

export interface AnzProductsResponse {
  data: AnzData;
}

@Component({
  selector: 'app-anz',
  templateUrl: './anz.component.html',
  styleUrls: ['./anz.component.scss']
})
export class AnzComponent implements OnInit {

  productsResponse: AnzProductsResponse;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  loadProducts() {
    this.getProducts()
      .subscribe((data: AnzProductsResponse) => this.productsResponse = data);
  }

  getProducts() {
    return this.http.get<AnzProductsResponse>(
      'https://digital-api.westpac.com.au/cds-au/v1/banking/products',
      {
        headers:{
          'x-v': '1'
        }
      }
    )
  }

}

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponse } from './types/products.type';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}
  // api/Products
  getProducts(): Observable<ProductsResponse> {
    const BASE_URL = environment.BASE_URL + 'api/Products';
    return this._HttpClient.get<ProductsResponse>(BASE_URL);
  }
  // api/Products/:id
  // getProductById(id: number): Observable<any> {
  //   const BASE_URL = environment.BASE_URL + `api/Products/${id}`;
  //   return this._HttpClient.get<any>(BASE_URL);
  // }
  // createProduct(data: any): Observable<any> {
  //   const BASE_URL = environment.BASE_URL + 'api/Products';
  //   return this._HttpClient.post<any>(BASE_URL, data);
  // }
  // // delete /api/Products/:id
  // deleteProduct(id: number): Observable<any> {
  //   const BASE_URL = environment.BASE_URL + `api/Products/${id}`;
  //   return this._HttpClient.delete<any>(BASE_URL);
  // }
  // // update put /api/Products/:id
  // updateProduct(id: number, data: any): Observable<any> {
  //   const BASE_URL = environment.BASE_URL + `api/Products/${id}`;
  //   return this._HttpClient.put<any>(BASE_URL, data);
  // }
  // toggleStatus(id: number): Observable<any> {
  //   const URL = environment.BASE_URL + `api/Products/${id}/toggle-status`;
  //   return this._HttpClient.patch<any>(URL, null);
  // }
}

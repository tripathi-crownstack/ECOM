import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductList(data:object){
    let param :HttpParams= this.appendParameters(data);
    return this.http.get<Response>('',{ params: param})
  }

  getProduct(id:string){

  }

  appendParameters(data:any){
    let params=new HttpParams()
    Object.keys(data).forEach(function (key) {
      if (data[key]) params = params.append(key, data[key]);
    });
    return params;
  }
}

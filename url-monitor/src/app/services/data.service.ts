import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) {}

    getRequestStatus(url:string){
      return this._http.get<any>(url)
    }

}

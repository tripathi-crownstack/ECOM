import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getCurrentUser(){
    return localStorage.getItem('user')
  }

  setUser(user:any){
    localStorage.setItem('user',user)
  }

}

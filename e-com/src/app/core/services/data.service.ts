import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private product = new BehaviorSubject(<Array<Number>>([]));
  cartItem = this.product.asObservable()

  quantity = new BehaviorSubject(<Number>(0))
  itemAddedToCart=new BehaviorSubject(<boolean>(false))

  constructor() { }

  setCartItem(cart:Array<Number>){
    this.product.next(cart)
  }

  getCartQuantity(){
    return this.quantity
  }

  setCartQuantity(quantity:Number){
    this.quantity.next(quantity)
  }

}

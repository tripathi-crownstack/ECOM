import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private dataService:DataService) { }

  @Input() product!:any;
  currentItems!:Array<Number>
  isloader:boolean=false

  ngOnInit(): void {
    this.dataService.cartItem.subscribe(result=>{
      this.currentItems=result
    })
  }

  addProductToCart(id:Number){
    if(this.currentItems.includes(id)){
      this.dataService.itemAddedToCart.next(false)
      this.dataService.setCartQuantity(this.currentItems.length)
    }else{
      this.currentItems.push(id)
      this.dataService.itemAddedToCart.next(true)
      this.dataService.setCartQuantity(this.currentItems.length)
      this.dataService.setCartItem(this.currentItems)
    }
  }
}

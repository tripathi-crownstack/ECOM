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

  ngOnInit(): void {
    this.dataService.cartItem.subscribe(result=>{
      this.currentItems=result
    })
  }

  addProductToCart(id:Number){
    this.currentItems.push(id)
    this.dataService.setCartQuantity(this.currentItems.length)
    this.dataService.setCartItem(this.currentItems)
  }

}

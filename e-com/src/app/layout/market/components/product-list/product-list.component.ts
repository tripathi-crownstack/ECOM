import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  productList!:any
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe((response:any)=>{
      this.productList=response.data.items;
    })
  }

}

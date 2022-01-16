import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  productList!:any
  isloader!:boolean;
  page:number=1
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProductList()
  }

  getProductList(){
    this.isloader=true
    this.productService.getProductList({page:this.page}).subscribe((response:any)=>{
      if(response){
        this.isloader=false
        this.productList=response.data.items;
      }
    },error=>{
      this.isloader=false
      console.error("No data Available :",{error})
    })
  }
  setPage(page:number){
    this.page=page;
    this.getProductList()
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './market/components/product-list/product-list.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './market/components/product-details/product-details.component';


const routes:Routes=[{
  path:'',
  component: LayoutComponent
},
  {
  path:"product",
  component: ProductListComponent
}]

@NgModule({
  exports:[RouterModule],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProductListComponent,
    LayoutComponent,
    ProductDetailsComponent,
  ],
})
export class LayoutModule { }

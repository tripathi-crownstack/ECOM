import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    FooterComponent,
    LoaderComponent,
    CardComponent,
    HeaderComponent,
    PaginationComponent
  ],
  exports: [
    FooterComponent,
    LoaderComponent,
    CardComponent,
    HeaderComponent,
    PaginationComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

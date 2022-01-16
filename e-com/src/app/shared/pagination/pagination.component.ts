import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  page: number=1
  odd=true

  @Output() currentPage = new EventEmitter<number>();

  ngOnInit(): void {
    this.currentPage.subscribe(result =>{
      this.odd=result%2==1;
    })
  }

  getCartItems(event:number){
    this.currentPage.emit(event)
  }

  // Inconsistent

  // previousPage(page?:number){
  //   if(this.page>1)this.page--;
  //   this.currentPage.emit(this.page)
  //   this.odd=true;
  // }

  // nextPage(page?:number){
  //   this.page++
  //   this.currentPage.emit(this.page)
  //   this.odd=false;
  // }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService:DataService) { }

  quantity!:Number

  ngOnInit(): void {
    this.dataService.quantity.subscribe(result => {
      this.quantity=result
    })
  }
}
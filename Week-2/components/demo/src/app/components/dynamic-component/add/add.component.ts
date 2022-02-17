import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  constructor() { }
  @Input() data: any;

  ngOnInit(): void {
  }


}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated',
  templateUrl: './emulated.component.html',
  styleUrls: ['./emulated.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

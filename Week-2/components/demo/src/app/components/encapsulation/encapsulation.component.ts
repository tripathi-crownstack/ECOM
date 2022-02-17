import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.scss']
})
export class EncapsulationComponent implements OnInit {

  constructor() { }

data:string="@Component({ \n " +
    "selector: 'app-no-encapsulation', \n " +
    "template:' \n "+
      "<span>None</span> \n "+
      "<div class='none-message'>No encapsulation</div> \n "+
    "', \n "+
    "styles: ['h2, .none-message { color: red; }'], \n "+
    "encapsulation: ViewEncapsulation.None, \n "+
  "}) \n "+
  "export class NoEncapsulationComponent { } \n "

  ngOnInit(): void {
  }

}

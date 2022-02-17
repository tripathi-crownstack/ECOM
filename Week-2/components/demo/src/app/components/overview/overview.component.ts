import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  constructor() { }

  declarations=[
    "@Component({ \n  "+
    "selector: 'app-root', \n  " +
    "template:'\n  "+
    "  <h1>This is template</h1> \n    <app-overview ></app-overview> "+
    " \n ', " + "\n "+
    "styles: ['h1 { font-weight: normal; }'] \n"+
   "})",

    "@Component({ \n  "+
    "selector: 'app-root', \n  " +
    "templateUrl: './component-overview.component.html', \n  "+
    "styles:['./component-overview.component.css'] \n"+
    "})",

   " @Component({ \n  " +
     " selector: 'app-component-overview', \n  "+
     " template: '<h1>Hello World!</h1>', \n  "+
     " styles: ['h1 { font-weight: normal; }'] \n "+
    " })"

  ]

  ngOnInit(): void {
  }

}

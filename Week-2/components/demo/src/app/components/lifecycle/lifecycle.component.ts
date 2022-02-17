import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("onInit callled")
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngOnDestroy() {
   console.log("destroy called")
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialize
    console.log("viewInit called")
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    console.log("view checked called")
  }

  // Query for a VIEW child of type `ChildViewComponent`

  ngAfterContentInit() {
    // contentChild is set after the content has been initialize
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
  }

}

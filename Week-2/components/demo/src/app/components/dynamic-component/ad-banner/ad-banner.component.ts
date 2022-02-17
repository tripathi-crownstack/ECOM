import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AddDirective } from 'src/app/directives/add.directive';
import { AdItem } from 'src/app/models/add-item';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html'
})
export class AdBannerComponent implements AddComponent {

  data: any;
  currentAdIndex = -1;
  interval!: any | undefined;
  @Input() ads: AdItem[] = [];
  @ViewChild(AddDirective, {static: true}) adHost!: AddDirective;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AddComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds(): void {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

}

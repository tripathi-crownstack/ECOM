import { Component, OnInit } from '@angular/core';
import { AdItem } from 'src/app/models/add-item';
import { AddService } from 'src/app/services/add.service';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AddService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}

import { Injectable } from '@angular/core';
import { AddComponent } from '../components/dynamic-component/add/add.component';
import { ProfileComponent } from '../components/dynamic-component/profile/profile.component';
import { AdItem } from '../models/add-item';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() { }

  getAds() {
    return [
      new AdItem(
        ProfileComponent,
        { name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        ProfileComponent,
        { name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new AdItem(
        AddComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new AdItem(
        AddComponent,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }
}

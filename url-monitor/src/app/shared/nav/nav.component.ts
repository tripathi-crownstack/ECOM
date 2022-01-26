import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService) { }

  currentUser:any

  ngOnInit(): void {
    this.currentUser=this.authService.getCurrentUser();
  }

  logout(){
    localStorage.removeItem('user')
  }

}

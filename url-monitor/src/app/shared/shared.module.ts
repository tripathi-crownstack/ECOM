import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MonitorTableComponent } from './monitor-table/monitor-table.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    MonitorTableComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent,HeaderComponent]
})
export class SharedModule { }

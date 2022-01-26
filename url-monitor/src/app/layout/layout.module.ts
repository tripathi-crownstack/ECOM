import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { MonitorInputComponent } from './components/monitor-input/monitor-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes:Routes=[{
  path:"",
  component: LandingPageComponent
}]

@NgModule({
  declarations: [
    LandingPageComponent,
    AdminComponent,
    MonitorInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutModule { }
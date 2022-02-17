import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [{
  path:'',
  redirectTo:'overview',
  pathMatch: 'full'
},
  {
  path: 'overview',
  component:OverviewComponent,
},
{
  path: 'lifecycle',
  component:LifecycleComponent,
},
{
  path: 'encapsulation',
  component:EncapsulationComponent,
},
{
  path: 'dynamic',
  component:DynamicComponentComponent,
},
{
  path: 'component-interaction',
  component:ComponentInteractionComponent,
},
// {
//   path: 'angular-element',
//   component:AngularElementComponent,
// },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

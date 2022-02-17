import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { SvgTemplateComponent } from './components/svg-template/svg-template.component';
import { TempateReferenceComponent } from './components/tempate-reference/tempate-reference.component';
import { TemplateStatementComponent } from './components/template-statement/template-statement.component';
import { TextInterpolationComponent } from './components/text-interpolation/text-interpolation.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [{
  path:'text-interpolation',
  component:TextInterpolationComponent
},
{
  path:'template-statement',
  component:TemplateStatementComponent
},
{
  path:'pipe',
  component:PipeComponent
},
{
  path:'property-binding',
  component:PropertyBindingComponent
},
{
  path:'event-binding',
  component:EventBindingComponent
},
{
  path:'two-way-binding',
  component:TwoWayBindingComponent

},
{
  path:'template-reference',
  component:TempateReferenceComponent

},
{
  path:'svg-template',
  component:SvgTemplateComponent

}]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInterpolationComponent } from './components/text-interpolation/text-interpolation.component';
import { TemplateStatementComponent } from './components/template-statement/template-statement.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TempateReferenceComponent } from './components/tempate-reference/tempate-reference.component';
import { SvgTemplateComponent } from './components/svg-template/svg-template.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInterpolationComponent,
    TemplateStatementComponent,
    PipeComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    TempateReferenceComponent,
    SvgTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

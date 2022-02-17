import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { AddDirective } from './directives/add.directive';
import { AdBannerComponent } from './components/dynamic-component/ad-banner/ad-banner.component';
import { JokesComponent } from './components/lifecycle/jokes/jokes.component';
import { JokeListComponent } from './components/lifecycle/joke-list/joke-list.component';
import { NoEncapsulationComponent } from './components/encapsulation/no-encapsulation/no-encapsulation.component';
import { ShadowDomComponent } from './components/encapsulation/shadow-dom/shadow-dom.component';
import { EmulatedComponent } from './components/encapsulation/emulated/emulated.component';
import { AddComponent } from './components/dynamic-component/add/add.component';
import { ProfileComponent } from './components/dynamic-component/profile/profile.component';
import { ChildComponent } from './components/component-interaction/child/child.component';
import { ParentComponent } from './components/component-interaction/parent/parent.component';
import { NameChildComponent } from './components/component-interaction/name-child/name-child.component';
import { NameParentComponent } from './components/component-interaction/name-parent/name-parent.component';
import { VersionChildComponent } from './components/component-interaction/version-child/version-child.component';
import { VersionParentComponent } from './components/component-interaction/version-parent/version-parent.component';
import { VoterComponent } from './components/component-interaction/voter/voter.component';
import { CountDownComponent } from './components/component-interaction/count-down/count-down.component';
import { CountLocalVarComponent } from './components/component-interaction/count-local-var/count-local-var.component';
import { CountDownParentComponent } from './components/component-interaction/count-down-parent/count-down-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LifecycleComponent,
    EncapsulationComponent,
    ComponentInteractionComponent,
    DynamicComponentComponent,
    // AngularElementComponent,
    AddDirective,
    AddComponent,
    ProfileComponent,
    AdBannerComponent,
    JokesComponent,
    JokeListComponent,
    NoEncapsulationComponent,
    ShadowDomComponent,
    EmulatedComponent,
    ChildComponent,
    ParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    CountDownComponent,
    CountLocalVarComponent,
    CountDownParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

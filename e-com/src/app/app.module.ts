import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptorInterceptor } from './core/interceptors/api-interceptor.interceptor';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,

  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }

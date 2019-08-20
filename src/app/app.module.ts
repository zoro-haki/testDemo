import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WstrComponent } from './wstr/jstr/jstr.component';

@NgModule({
  declarations: [
    AppComponent,
    WstrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, WstrComponent]
})
export class AppModule { }

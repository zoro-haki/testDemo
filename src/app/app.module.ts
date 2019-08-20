import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JstrComponent } from './wstr/jstr/jstr.component';

@NgModule({
  declarations: [
    AppComponent,
    JstrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, JstrComponent]
})
export class AppModule { }

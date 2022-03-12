import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UberComponent } from './uber/uber.component';
import { PuntosColombiaComponent } from './puntos-colombia/puntos-colombia.component';

@NgModule({
  declarations: [
    AppComponent,
    UberComponent,
    PuntosColombiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

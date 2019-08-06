import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ClientComponent } from './client/client.component';
import { LandingComponent } from './landing/landing.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ClientComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

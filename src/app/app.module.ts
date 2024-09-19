import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayhelloworldComponent } from './Components/displayhelloworld/displayhelloworld.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

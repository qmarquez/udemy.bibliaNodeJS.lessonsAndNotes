import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputDashboardComponent } from './components/input-dashboard/input-dashboard.component';
import { Approutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    InputDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Approutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

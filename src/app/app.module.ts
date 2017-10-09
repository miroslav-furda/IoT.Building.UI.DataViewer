import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { InputDashboardComponent } from './components/input-dashboard/input-dashboard.component';
import { Approutes } from './app.routes';
import { ChartComponent } from './components/chart/chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataLoaderService } from './services/data-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    InputDashboardComponent,
    ChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Approutes,
    ChartsModule
  ],
  providers: [DataLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { InputChartData } from '../../models/input-chart-data.model';
import { DataLoaderService } from '../../services/data-loader.service';

@Component({
  selector: 'app-input-dashboard',
  templateUrl: './input-dashboard.component.html',
  styleUrls: ['./input-dashboard.component.css']
})
export class InputDashboardComponent implements OnInit {

  inputChartdata: InputChartData = new InputChartData();

  constructor(private dataLoaderService: DataLoaderService) {
  }

  loadDataForDashboard() {
    this.dataLoaderService.get(this.inputChartdata.deviceID, this.inputChartdata.timestampFrom, this.inputChartdata.timestampTo);
    // this.inputChartdata.deviceID = '';
    // this.inputChartdata.timestampFrom = null;
    // this.inputChartdata.timestampTo = null;
  }

  ngOnInit() {
  }

}

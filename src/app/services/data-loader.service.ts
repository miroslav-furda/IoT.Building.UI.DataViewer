import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { LineChartData } from '../models/line-chart-data.model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

const urlForGetData = 'http://localhost:7777/ts/v1/query ';

@Injectable()
export class DataLoaderService {

  constructor(private http: HttpClient) { }

  result: Object;

  get(deviceID, timestampFrom, timestampTo): Observable<Response> {
    if (deviceID && timestampFrom && timestampTo) {
      console.log('REST URL for get() method: ' + urlForGetData + '--data "Select * from SensorData0_2 WHERE deviceId = \''
        + deviceID + '\' AND time > ' + timestampFrom + ' AND time < ' + timestampTo + '"');

      console.log('Input is: ' + deviceID + timestampFrom + timestampTo);

      // this.http.get('http://localhost:7777/ts/v1/tables/SensorData/list_keys', )
      //   .subscribe(result => console.log(result));
      // ;

      this.http.post(urlForGetData, 'Select * from SensorData0_2 WHERE deviceId = \''
        + deviceID + '\' AND time > ' + timestampFrom + ' AND time < ' + timestampTo)
        .subscribe(result => this.result = result);

      console.log('Output is: ', this.result.toString());

      return null;


      // return this.http.get(serviceGetData + ' --data "Select * from SensorData0_2 WHERE deviceId = '
      //   + deviceID + ' AND time > ' + timestampFrom + ' AND time < ' + timestampTo + ' "');
    }
  }

  writeInputData(input) {
    console.log('Inserted input is: ' + input);

  }

}

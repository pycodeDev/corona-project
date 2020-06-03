import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DataRona } from './datarona';

@Injectable()
export class DataronaService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('api/dayone/country/indonesia');
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Positif } from './positif';
import { DataSelect } from './dataselect';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  getPositif(): Observable<Positif[]> {
    return this.http.get<Positif[]>('api/summary');
  }

  getData(id: string): Observable<any> {
    const url = `api/country/${id}`;
    return this.http.get(url);
  }
}

import { Component, OnInit } from '@angular/core';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';

import { Positif } from './positif';
import { DataGlobal } from './dataglobal';
import { DataSelect } from './dataselect';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  faVirus = faVirus;
  faUserCheck = faUserCheck;

  optselected: string;
  lstpositif: Observable<Positif>;
  lstdata: DataGlobal[];
  lstsel: Observable<Array<any>>;
  sign: boolean;
  constructor(private apiServ: DashboardService) {}

  ngOnInit() {
    this.getData();
    this.optselected = 'Afghanistan';
    this.sign = false;
    // this.getSelectData(this.optselected);
  }

  getData(): void {
    this.apiServ.getPositif().subscribe((data) => {
      this.lstpositif = of(data['Global']);
      this.lstdata = data['Countries'];
      console.log(this.lstpositif);
    });
  }

  getSelectData(name: any): void {
    this.optselected = name;
    this.sign = true;
    this.apiServ.getData(name).subscribe((data) => {
      this.lstsel = data;
      console.log(data);
    });
  }

  transDate(date) {
    let a = new Date(date);
    let b = a.toString();
    let res = b.split(' ');
    return res[2] + ' ' + res[1] + ' ' + res[3];
  }
}

import { Component, OnInit } from '@angular/core';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

import { DataRona } from './datarona';
import { DataronaService } from './datarona.service';

@Component({
  selector: 'app-datarona',
  templateUrl: './datarona.component.html',
  styleUrls: ['./datarona.component.css'],
})
export class DataronaComponent implements OnInit {
  faVirus = faVirus;
  faUserCheck = faUserCheck;

  connow: number;
  deanow: number;
  recnow: number;

  positif: number;
  sembuh: number;
  meninggal: number;

  lastupdate: string;
  lstdata: DataRona[];

  constructor(private apiServ: DataronaService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiServ.getData().subscribe((data) => {
      let a = Object.keys(data).length;
      this.positif = data[a - 1]['Confirmed'];
      this.meninggal = data[a - 1]['Deaths'];
      this.sembuh = data[a - 1]['Recovered'];

      this.connow = data[a - 1]['Confirmed'] - data[a - 2]['Confirmed'];
      this.recnow = data[a - 1]['Recovered'] - data[a - 2]['Recovered'];
      this.deanow = data[a - 1]['Deaths'] - data[a - 2]['Deaths'];

      this.lastupdate = data[a - 1]['Date'];

      this.lstdata = data;
      console.log(data[a - 1]);
    });
  }

  transDate(date) {
    let a = new Date(date);
    let b = a.toString();
    let res = b.split(' ');
    return res[2] + ' ' + res[1] + ' ' + res[3];
  }
}

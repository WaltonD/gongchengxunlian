import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {
  data = {
    columns: [
      {
        key: 'id',
        title: '学号'
      },
      {
        key: 'name',
        title: '姓名'
      },
      {
        key: 'qjNum',
        title: '请假次数'
      },
      {
        key: 'kkNum',
        title: '旷课次数'
      },
      {
        key: 'ansNum',
        title: '上课发言次数'
      }
    ],
    data: <any>[]
  };

  private apiUrl = environment.tableApi;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.getQuery();
  }

  getQuery() {
    const url = `${this.apiUrl}/static.json`;
    this._http
      .get(url)
      .toPromise()
      .then(res => {
        this.data.data = res;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tealist',
  templateUrl: './tealist.component.html',
  styleUrls: ['./tealist.component.scss']
})
export class TealistComponent implements OnInit {
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
        key: 'xy',
        title: '学院'
      },
      {
        key: 'gxsj',
        title: '更新时间'
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
    const url = `${this.apiUrl}/tealist.json`;
    this._http
      .get(url)
      .toPromise()
      .then(res => {
        this.data.data = res;
      });
  }
}

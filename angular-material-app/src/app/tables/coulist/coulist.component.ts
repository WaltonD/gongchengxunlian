import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-coulist',
  templateUrl: './coulist.component.html',
  styleUrls: ['./coulist.component.scss']
})
export class CoulistComponent implements OnInit {
  data = {
    columns: [
      {
        key: 'kcbh',
        title: '课程编号'
      },
      {
        key: 'kcmc',
        title: '课程名称'
      },
      {
        key: 'sksj',
        title: '上课时间'
      },
      {
        key: 'kcrs',
        title: '课程人数'
      },
      {
        key: 'kczc',
        title: '课程周次'
      },
      {
        key: 'szxq',
        title: '所在学期'
      },
      {
        key: 'kcdd',
        title: '课程地点'
      },
      {
        key: 'gxrq',
        title: '更新日期'
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
    const url = `${this.apiUrl}/coulist.json`;
    this._http
      .get(url)
      .toPromise()
      .then(res => {
        this.data.data = res;
      });
  }
}

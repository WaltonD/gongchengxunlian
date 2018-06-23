import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-stulist',
  templateUrl: './stulist.component.html',
  styleUrls: ['./stulist.component.scss']
})
export class StulistComponent implements OnInit {
  data = {
    columns: [
      {
        key: 'name',
        title: '姓名'
      },
      {
        key: 'id',
        title: '学号'
      },
      {
        key: 'bj',
        title: '班级'
      },
      {
        key: 'zy',
        title: '专业'
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
    const url = `${this.apiUrl}/stulist.json`;
    this._http
      .get(url)
      .toPromise()
      .then(res => {
        this.data.data = res;
      });
  }
}

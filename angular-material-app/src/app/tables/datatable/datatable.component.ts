import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit {

  columnsDemo;
  selectData;

  constructor(@Inject('dataTableService') private service) {
    this.service.select();

    this.columnsDemo = {
      columns: [
        {
          title: '姓名',
          key: 'name',
          width: 10,
          fixed: 'left'
        },
        {
          title: '请假OR旷课',
          key: 'select',
          width: 100,
        },
        {
          title: '时间',
          key: 'time',
          width: 50
        }
      ],
      columns1: [
        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        {
          title: '姓名',
          key: 'name',
          // fixed: 'left'
        },
        {
          title: '年龄',
          key: 'age',
        },
        {
          title: '省份',
          key: 'province',
        },
        {
          title: '市区',
          key: 'city',
        },
        {
          title: '地址',
          key: 'address',
        },
        {
          title: '邮编',
          key: 'zip',
        }
      ],
      columns2: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          width: 117,
          fixed: 'left'
        },
        {
          title: '年龄',
          key: 'age',
          width: 100
        },
        {
          title: '省份',
          key: 'province',
          width: 100
        },
        {
          title: '市区',
          key: 'city',
          width: 100
        },
        {
          title: '地址',
          key: 'address',
          width: 200
        },
        {
          title: '邮编',
          key: 'zip',
          width: 100
        }, {
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 120,
        }
      ],
      data: [
        {
          name: '王小明',
          select: '请假',
          time: '第5周，周四，5-6节',
        },
        {
          name: '王小明',
          select: '请假',
          time: '第7周，周二，3-4节',
        },
        {
          name: '王小明',
          select: '旷课',
          time: '第7周，周四，5-6节',
        },
        {
          name: '王小明',
          select: '旷课',
          time: '第8周，周二，5-6节',
        },
        {
          name: '王小明',
          select: '旷课',
          time: '第9周，周四，5-6节',
        },
        {
          name: '王小明',
          select: '旷课',
          time: '第10周，周四，5-6节',
        }
      ]
    };
  }

  ngOnInit() {
  }

  onSelectChange($event) {
    this.selectData = $event;
  }

}

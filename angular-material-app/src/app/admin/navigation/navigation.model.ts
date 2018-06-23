export class NavigationModel {

  public model: any[];

  constructor() {
    this.model = [
      {
        'id': 'studentlist',
        'title': '学生列表',
        'type': 'item',
        'icon': 'account_box',
        'url': '/tables/stulist'
      },
      {
        'id': 'teacherlist',
        'title': '教师列表',
        'type': 'item',
        'icon': 'account_box',
        'url': '/tables/tealist'
      },
      {
        'id': 'record',
        'title': '请假及旷课记录',
        'icon': 'attach_file',
        'type': 'item',
        'url': '/tables/datatable'
      },
      {
        'id': 'user',
        'title': '平常表现汇总',
        'type': 'item',
        'icon': 'assignment_late',
        'url': '/tables/biaoxian'
      },
      {
        'id': 'elements',
        'title': '课程列表',
        'type': 'item',
        'icon': 'format_color_text',
        'url': '/tables/coulist'
      },
      {
        'id': 'validation',
        'title': '用户管理',
        'type': 'item',
        'icon': 'format_color_text',
        'url': '/pages/user'
      }
    ];
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import {StulistComponent} from './stulist/stulist.component';
import {TealistComponent} from './tealist/tealist.component';
import {RecordsComponent} from './records/records.component';
import {BiaoxianComponent} from './biaoxian/biaoxian.component';
import {CoulistComponent} from './coulist/coulist.component';

const routes: Routes = [
  { path: '', component: TablesComponent },
  { path: 'static', component: StaticComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'dynamic', component: DynamicComponent },
  { path: 'stulist', component: StulistComponent },
  { path: 'tealist', component: TealistComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'biaoxian', component: BiaoxianComponent },
  { path: 'coulist', component: CoulistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TablesRoutingModule {
}


import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {NzGridModule} from 'ng-zorro-antd/grid';

import {DefaultPageComponent} from './pages/default-page/default-page.component';
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {SharedModule} from "../../shared/shared.module";
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import {NzIconModule} from "ng-zorro-antd/icon";

const routes: Routes = [
  {path: '', component: DefaultPageComponent}
]

@NgModule({
  declarations: [
    DefaultPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzGridModule,
    NzTypographyModule,
    NzDividerModule,
    SharedModule,
    NzStatisticModule,
    NzIconModule
  ]
})
export class ProfileModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzIconModule} from "ng-zorro-antd/icon";

import {SharedModule} from "../../shared/shared.module";
import {DefaultPageComponent} from './pages/default-page/default-page.component';
import {HistoryCardComponent} from './components/history-card/history-card.component';
import {HistoryItemPageComponent} from './pages/history-item-page/history-item-page.component';

const routes: Routes = [
  {path: '', component: DefaultPageComponent},
  {path: ':id', component: HistoryItemPageComponent}
]

@NgModule({
  declarations: [
    DefaultPageComponent,
    HistoryCardComponent,
    HistoryItemPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTypographyModule,
    NzDividerModule,
    NzCardModule,
    NzMessageModule,
    NzIconModule,
    SharedModule
  ]
})
export class HistoryModule { }

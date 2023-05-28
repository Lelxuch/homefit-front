import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzLayoutModule} from "ng-zorro-antd/layout";

import {DefaultPageComponent} from './pages/default-page/default-page.component';

const routes: Routes = [
  {path: '', component: DefaultPageComponent}
]

@NgModule({
  declarations: [
    DefaultPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTypographyModule,
    NzLayoutModule
  ]
})
export class LandingModule { }

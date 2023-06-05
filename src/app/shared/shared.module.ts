import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzSpinModule} from "ng-zorro-antd/spin";

import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {LoadingComponent} from './components/loading/loading.component';
import {HeaderComponent} from './components/header/header.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    LoadingComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzButtonModule,
    NzTypographyModule,
    NzSpinModule,
  ],
  exports: [
    NotFoundPageComponent,
    LoadingComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

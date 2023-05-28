import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzSpinModule} from "ng-zorro-antd/spin";

import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {LoadingComponent} from './components/loading/loading.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzButtonModule,
    NzTypographyModule,
    NzSpinModule
  ],
  exports: [
    NotFoundPageComponent,
    LoadingComponent
  ]
})
export class SharedModule { }

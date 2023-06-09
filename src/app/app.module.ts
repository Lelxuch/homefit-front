import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconsProviderModule} from './icons-provider.module';
import {RouterModule} from '@angular/router';

import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzTypographyModule} from "ng-zorro-antd/typography";

import {SharedModule} from "./shared/shared.module";
import {BaseComponent} from "./sections/base.component";
import {ApiInterceptor} from "./core/interceptors/api";
import {NzMessageModule} from "ng-zorro-antd/message";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzTypographyModule,
    NzMessageModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BaseComponent} from './sections/base.component';
import {AuthGuard} from "./core/guards/auth.guard";
import {NotFoundPageComponent} from "./shared/components/not-found-page/not-found-page.component";

const routes: Routes = [
  {path: '', loadChildren: () => import('./sections/landing/landing.module').then(m => m.LandingModule)},
  {path: '', component: BaseComponent,
    children: [
      {path: 'history', loadChildren: () => import('./sections/history/history.module').then(m => m.HistoryModule)},
    ],
  },
  {path: '', loadChildren: () => import('./sections/auth/auth.module').then(m => m.AuthModule)},
  {path: '**', component: NotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

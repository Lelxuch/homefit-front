import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

import {NzMessageService} from "ng-zorro-antd/message";

import {HistoryService} from "../../../../core/services/history.service";

@Component({
  selector: 'app-history-item-page',
  templateUrl: './history-item-page.component.html',
  styleUrls: ['./history-item-page.component.scss']
})
export class HistoryItemPageComponent implements OnInit{

  loading: boolean = false;
  videoSource: string = '';
  id: number;

  private activatedRoute$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private historyService: HistoryService,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    this.activatedRoute$ = this.activatedRoute.params
      .subscribe(p => {
        this.id = p['id'];
        this.loading = true;
        this.historyService.getHistoryItem(this.id)
          .subscribe(res => {
            console.log(res);
            this.loading = false;
          }, err => {
            console.log(err);
            this.message.error((err.error.message));
            this.loading = false;
          })
      });
  }

}

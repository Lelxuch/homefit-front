import {Component, OnInit} from '@angular/core';
import {HistoryService} from "../../../../core/services/history.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {IHistory} from "../../../../core/model/history";

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit{

  historyData: IHistory[];

  loading: boolean = false;

  constructor(
    private historyService: HistoryService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.historyService.getHistoryList()
      .subscribe(res => {
        this.historyData = res;
        this.loading = false;
      }, err => {
        this.message.error(err.error.message || 'Внутренняя ошибка сервера');
        this.loading = false;
      })
  }
}

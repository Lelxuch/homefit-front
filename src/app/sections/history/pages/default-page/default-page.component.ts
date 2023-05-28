import {Component, OnInit} from '@angular/core';
import {HistoryService} from "../../../../core/services/history.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit{

  historyData = [
    {
      id: 1,
      type: 'squats',
      name: 'Squats',
      date: '25.05.2023 | 13:35'
    },
    {
      id: 2,
      type: 'pushups',
      name: 'Pushups',
      date: '25.05.2023 | 13:35'
    },
    {
      id: 3,
      type: 'lateral-raise',
      name: 'Lateral Raise',
      date: '25.05.2023 | 13:35'
    },
    {
      id: 4,
      type: 'abs-legs',
      name: 'Abs',
      date: '25.05.2023 | 13:35'
    },
    {
      id: 5,
      type: 'curls',
      name: 'Curls',
      date: '25.05.2023 | 13:35'
    }
  ];

  loading: boolean = false;

  constructor(
    private historyService: HistoryService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    // this.historyService.getHistoryList()
    //   .subscribe(res => {
    //     console.log(res);
    //     this.loading = false;
    //   }, err => {
    //     this.message.error(err.error.message || 'Внутренняя ошибка сервера');
    //     this.loading = false;
    //   })
  }
}

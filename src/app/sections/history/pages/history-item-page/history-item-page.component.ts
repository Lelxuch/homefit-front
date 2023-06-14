import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

import {NzMessageService} from "ng-zorro-antd/message";

import {HistoryService} from "../../../../core/services/history.service";
import {IHistoryItem} from "../../../../core/model/history";

@Component({
  selector: 'app-history-item-page',
  templateUrl: './history-item-page.component.html',
  styleUrls: ['./history-item-page.component.scss']
})
export class HistoryItemPageComponent implements OnInit{

  loading: boolean = false;
  videoSource: SafeUrl;
  id: number;

  historyItemData: IHistoryItem;

  downloadUrl: any;
  downloadFileName: string;

  private activatedRoute$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private historyService: HistoryService,
    private message: NzMessageService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute$ = this.activatedRoute.params.subscribe(p => {
      this.id = p['id'];
      this.historyService.getHistoryItem(this.id).subscribe(res => {
        this.historyItemData = res;
        console.log(this.historyItemData);

        // Convert base64 string to a Blob
        const byteCharacters = atob(res.video);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'video/mp4' });

        // Create object URL
        this.videoSource = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));

        this.loading = false;
      }, err => {
        console.log(err);
        this.message.error((err.error.message));
        this.loading = false;
      })
    });
  }

}

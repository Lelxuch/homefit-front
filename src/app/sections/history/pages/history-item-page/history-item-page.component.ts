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
    this.activatedRoute$ = this.activatedRoute.params.subscribe(p => {
      this.id = p['id'];
      this.loading = true;
      this.historyService.getHistoryItem(this.id).subscribe(res => {
        this.historyItemData = res;

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

  handleMetadata(event: Event, video: HTMLVideoElement) {
    console.log('Metadata for video loaded', event, video);
  }

  handleError(event: Event, video: HTMLVideoElement) {
    console.log('An error occurred', event, video);
    if (video.error) {
      switch (video.error.code) {
        case video.error.MEDIA_ERR_ABORTED:
          console.error('You aborted the video playback.');
          break;
        case video.error.MEDIA_ERR_NETWORK:
          console.error('A network error caused the video download to fail.');
          break;
        case video.error.MEDIA_ERR_DECODE:
          console.error('The video playback was aborted due to a corruption problem or because the video used features your browser did not support.');
          break;
        case video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          console.error('The video could not be loaded, either because the server or network failed or because the format is not supported.');
          break;
        default:
          console.error('An unknown error occurred.');
          break;
      }
    }
  }


}

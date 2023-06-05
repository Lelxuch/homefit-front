import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../../../core/services/profile.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {IProfile} from "../../../../core/model/profile";

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit{

  loading: boolean = false;

  profileData: IProfile;

  constructor(
    private profileService: ProfileService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.profileService.getProfile()
      .subscribe((res: IProfile) => {
        this.profileData = res;
        this.loading = false;
      }, err => {
        this.message.error('Внутренняя ошибка сервера');
        this.loading = false;
      })
  }
}

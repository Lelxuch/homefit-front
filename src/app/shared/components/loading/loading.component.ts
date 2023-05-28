import {Component, Input, OnInit} from '@angular/core';

import {NzSizeLDSType} from "ng-zorro-antd/core/types";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() type: string = 'local'
  @Input() blackout: boolean = false;
  @Input() size: NzSizeLDSType = 'large';

  constructor() { }

  ngOnInit(): void {
  }

}

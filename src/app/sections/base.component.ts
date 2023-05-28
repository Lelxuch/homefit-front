import {Component, OnInit} from '@angular/core';

import {AuthService} from "../core/services/auth.service";
import {PermissionService} from "../core/services/permission.service";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private permissionService: PermissionService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }

  isAdmin(): boolean {
    return this.permissionService.isAdmin;
  }

}

import {Component, Input} from '@angular/core';

import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() isTransparent: boolean = false;
  @Input() isAbsolute: boolean = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  isLogged(): boolean {
    return this.authService.isLogged;
  }

  logout(): void {
    this.authService.logout();
  }

}

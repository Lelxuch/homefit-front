import {Component} from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent {

  constructor(
    private authService: AuthService,
  ) { }

  logout(): void {
    this.authService.logout();
  }
}

import {Injectable} from '@angular/core';

import {AuthService} from "./auth.service";
import {UserRole} from "../models";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(
    private authService: AuthService
  ) { }

  get isAdmin(): boolean {
    return this.authService?.currentUser?.role === UserRole.ADMIN;
  }

  get defaultSection(): string {
    if (this.isAdmin) {
      return '/admin';
    }
    return '/history';
  }

}

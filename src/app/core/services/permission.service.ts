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

  get defaultSection(): string {
    return '/history';
  }

}

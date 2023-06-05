import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProfile} from "../model/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile() {
    return this.http.get<IProfile>('api/accounts/profile');
  }
}

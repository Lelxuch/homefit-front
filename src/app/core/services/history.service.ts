import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private http: HttpClient
  ) { }

  getHistoryList() {
    return this.http.get('');
  }

  getHistoryItem(id: number) {
    return this.http.get(`${id}`);
  }
}

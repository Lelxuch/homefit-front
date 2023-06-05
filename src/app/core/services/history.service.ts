import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IHistory, IHistoryItem} from "../model/history";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private http: HttpClient
  ) { }

  getHistoryList() {
    return this.http.get<[IHistory]>('/api/accounts/history/id');
  }

  getHistoryItem(id: number) {
    return this.http.get<IHistoryItem>(`/api/accounts/history/${id}`);
  }
}

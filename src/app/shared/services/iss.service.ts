import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssPosition, SearchResponse } from './../interfaces/iss.interfaces';

@Injectable({ providedIn: 'root' })
export class IssService {
  private serviceURL: string = 'http://api.open-notify.org/iss-now.json';
  private locationHistory: IssPosition[] = [];

  public onNewCoordinates: EventEmitter<IssPosition> = new EventEmitter<IssPosition>();
  public onLocationHistoryUpdate: EventEmitter<IssPosition[]> = new EventEmitter<IssPosition[]>();

  constructor(private http: HttpClient) {}

  getIssPosition(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.serviceURL);
  }

  emitNewCoordinates(coordinates: IssPosition): void {
    this.locationHistory.unshift(coordinates);
    if (this.locationHistory.length > 10) {
      this.locationHistory.pop();
    }

    this.onNewCoordinates.emit(coordinates);
    this.onLocationHistoryUpdate.emit(this.locationHistory);
  }
}

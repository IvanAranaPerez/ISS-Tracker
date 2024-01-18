import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssPosition, SearchResponse } from './../interfaces/iss.interfaces';

@Injectable({ providedIn: 'root' })
export class IssService {
  private serviceURL: string = 'http://api.open-notify.org/iss-now.json';

  public onNewCoordinates: EventEmitter<IssPosition> = new EventEmitter<IssPosition>();

  constructor(private http: HttpClient) {}

  getIssPosition(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.serviceURL);
  }

  emitNewCoordinates(coordinates: IssPosition): void {
    console.log('Emitting new coordinates:', coordinates);
    this.onNewCoordinates.emit(coordinates);
  }
}

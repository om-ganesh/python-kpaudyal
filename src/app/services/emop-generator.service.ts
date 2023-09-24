import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockData } from '../models/emop-data';
import { DATA } from '../models/mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MathRequest, MathResult } from '../models/math-result';

@Injectable({
  providedIn: 'root',
})
export class EmopGeneratorService {
  private dummyServerUrl = 'http://localhost:8080/api/dummy'; // URL to web api
  private calculateUrl = 'http://localhost:8080/api/calculate'; // URL to web api

  constructor(private http: HttpClient) {}

  getMockData(): Observable<MockData[]> {
    const data = of(DATA);
    return data;
  }

  getDataFromServer(): Observable<MockData[]> {
    return this.http.get<MockData[]>(this.dummyServerUrl);
  }

  getJsonResultFromServer(data: MathRequest): Observable<MathResult> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<MathResult>(this.calculateUrl, data, {
      headers: headers,
    });
  }
}

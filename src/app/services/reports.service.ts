import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportsI } from '../models/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/reports/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllReports(): Observable<ReportsI[]> {
    return this.http
      .get<ReportsI[]>(this.base_path);
  }

  getOneReport(id: number): Observable<ReportsI> {
    return this.http
      .get<ReportsI>(`${this.base_path}${id}/`); 
  }

  createReports(data: any): Observable<ReportsI> {
    return this.http.post<ReportsI>(this.base_path, data);
  }

  updateReports(id: number, data: any): Observable<ReportsI> {
    return this.http.put<ReportsI>(`${this.base_path}${id}/`, data); 
  }

  deleteReports(id: number): Observable<ReportsI> {
    return this.http.delete<ReportsI>(`${this.base_path}${id}/`); 
  }
}

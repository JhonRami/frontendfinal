import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoansI } from '../models/loans';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/loans/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllLoans(): Observable<LoansI[]> {
    return this.http
      .get<LoansI[]>(this.base_path);
  }

  getOneLoan(id: number): Observable<LoansI> {
    return this.http
      .get<LoansI>(`${this.base_path}${id}/`);  
  }

  createLoans(data: any): Observable<LoansI> {
    return this.http.post<LoansI>(this.base_path, data);
  }

  updateLoans(id: number, data: any): Observable<LoansI> {
    return this.http.put<LoansI>(`${this.base_path}${id}/`, data); 
  }

  deleteLoans(id: number): Observable<LoansI> {
    return this.http.delete<LoansI>(`${this.base_path}${id}/`); 
  }
}

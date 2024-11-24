import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdmissionI } from '../models/admission';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/admission/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllAdmission(): Observable<AdmissionI[]> {
    return this.http
      .get<AdmissionI[]>(this.base_path);
  }

  getOneAdmission(id: number): Observable<AdmissionI> {
    return this.http
      .get<AdmissionI>(`${this.base_path}${id}/`); 

  }

  createAdmission(data: any): Observable<AdmissionI> {
    return this.http.post<AdmissionI>(this.base_path, data);
  }

  updateAdmission(id: number, data: any): Observable<AdmissionI> {
    return this.http.put<AdmissionI>(`${this.base_path}${id}/`, data); 
  }

  deleteAdmission(id: number): Observable<AdmissionI> {
    return this.http.delete<AdmissionI>(`${this.base_path}${id}/`); 
  }
}

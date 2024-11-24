import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfessorsI } from '../models/professors';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/professors/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllProfessors(): Observable<ProfessorsI[]> {
    return this.http
      .get<ProfessorsI[]>(this.base_path);
  }

  getOneProfessor(id: number): Observable<ProfessorsI> {
    return this.http
      .get<ProfessorsI>(`${this.base_path}${id}/`);  
  }

  createProfessors(data: any): Observable<ProfessorsI> {
    return this.http.post<ProfessorsI>(this.base_path, data);
  }

  updateProfessors(id: number, data: any): Observable<ProfessorsI> {
    return this.http.put<ProfessorsI>(`${this.base_path}${id}/`, data); 
  }

  deleteProfessors(id: number): Observable<ProfessorsI> {
    return this.http.delete<ProfessorsI>(`${this.base_path}${id}/`); 
  }
}

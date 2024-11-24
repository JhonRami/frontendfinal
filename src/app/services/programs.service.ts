import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgramsI } from '../models/programs';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/programs/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllPrograms(): Observable<ProgramsI[]> {
    return this.http
      .get<ProgramsI[]>(this.base_path);
  }

  getOneProgram(id: number): Observable<ProgramsI> {
    return this.http
      .get<ProgramsI>(`${this.base_path}${id}/`); 
  }

  createPrograms(data: any): Observable<ProgramsI> {
    return this.http.post<ProgramsI>(this.base_path, data);
  }

  updatePrograms(id: number, data: any): Observable<ProgramsI> {
    return this.http.put<ProgramsI>(`${this.base_path}${id}/`, data); 
  }

  deletePrograms(id: number): Observable<ProgramsI> {
    return this.http.delete<ProgramsI>(`${this.base_path}${id}/`); 
  }
}

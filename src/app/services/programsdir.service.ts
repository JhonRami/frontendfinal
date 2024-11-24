import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgramsdirI } from '../models/programsdir';

@Injectable({
  providedIn: 'root'
})
export class ProgramsdirService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/programsdir/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllProgramsdir(): Observable<ProgramsdirI[]> {
    return this.http
      .get<ProgramsdirI[]>(this.base_path);
  }

  getOneProgramsdir(id: number): Observable<ProgramsdirI> {
    return this.http
      .get<ProgramsdirI>(`${this.base_path}${id}/`); 
  }

  createProgramsdir(data: any): Observable<ProgramsdirI> {
    return this.http.post<ProgramsdirI>(this.base_path, data);
  }

  updateProgramsdir(id: number, data: any): Observable<ProgramsdirI> {
    return this.http.put<ProgramsdirI>(`${this.base_path}${id}/`, data); 
  }

  deleteProgramsdir(id: number): Observable<ProgramsdirI> {
    return this.http.delete<ProgramsdirI>(`${this.base_path}${id}/`); 
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentsI } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/students/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllStudents(): Observable<StudentsI[]> {
    return this.http
      .get<StudentsI[]>(this.base_path);
  }

  getOneStudent(id: number): Observable<StudentsI> {
    return this.http
      .get<StudentsI>(`${this.base_path}${id}/`); 
  }

  createStudents(data: any): Observable<StudentsI> {
    return this.http.post<StudentsI>(this.base_path, data);
  }

  updateStudents(id: number, data: any): Observable<StudentsI> {
    return this.http.put<StudentsI>(`${this.base_path}${id}/`, data); 
  }

  deleteStudents(id: number): Observable<StudentsI> {
    return this.http.delete<StudentsI>(`${this.base_path}${id}/`); 
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queryadv3I } from '../../models/queryadv3';

@Injectable({
  providedIn: 'root'
})
export class Queryadv3Service {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/programsdir/query3/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllQueryadv3(): Observable<Queryadv3I[]> {
    return this.http
      .get<Queryadv3I[]>(this.base_path);
  }

  getOneQueryadv3(id: number): Observable<Queryadv3I> {
    return this.http
      .get<Queryadv3I>(`${this.base_path}${id}/`);
  }

  createQueryadv3(data: any): Observable<Queryadv3I> {
    return this.http.post<Queryadv3I>(this.base_path, data);
  }

  updateQueryadv3(id: number, data: any): Observable<Queryadv3I> {
    return this.http.put<Queryadv3I>(`${this.base_path}${id}/`, data);
  }

  deleteQueryadv3(id: number): Observable<Queryadv3I> {
    return this.http.delete<Queryadv3I>(`${this.base_path}${id}/`);
  }
}

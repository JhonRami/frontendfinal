import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queryadv1I } from '../../models/queryadv1';

@Injectable({
  providedIn: 'root'
})
export class Queryadv1Service {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/programsdir/query1/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllQueryadv1(): Observable<Queryadv1I[]> {
    return this.http
      .get<Queryadv1I[]>(this.base_path);
  }

  getOneQueryadv1(id: number): Observable<Queryadv1I> {
    return this.http
      .get<Queryadv1I>(`${this.base_path}${id}/`);
  }

  createQueryadv1(data: any): Observable<Queryadv1I> {
    return this.http.post<Queryadv1I>(this.base_path, data);
  }

  updateQueryadv1(id: number, data: any): Observable<Queryadv1I> {
    return this.http.put<Queryadv1I>(`${this.base_path}${id}/`, data);
  }

  deleteQueryadv1(id: number): Observable<Queryadv1I> {
    return this.http.delete<Queryadv1I>(`${this.base_path}${id}/`);
  }
}

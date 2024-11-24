import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queryadv6I } from '../../models/queryadv6';

@Injectable({
  providedIn: 'root'
})
export class Queryadv6Service {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/programsdir/query6/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllQueryadv6(): Observable<Queryadv6I[]> {
    return this.http
      .get<Queryadv6I[]>(this.base_path);
  }

  getOneQueryadv6(id: number): Observable<Queryadv6I> {
    return this.http
      .get<Queryadv6I>(`${this.base_path}${id}/`);
  }

  createQueryadv6(data: any): Observable<Queryadv6I> {
    return this.http.post<Queryadv6I>(this.base_path, data);
  }

  updateQueryadv6(id: number, data: any): Observable<Queryadv6I> {
    return this.http.put<Queryadv6I>(`${this.base_path}${id}/`, data);
  }

  deleteQueryadv6(id: number): Observable<Queryadv6I> {
    return this.http.delete<Queryadv6I>(`${this.base_path}${id}/`);
  }
}

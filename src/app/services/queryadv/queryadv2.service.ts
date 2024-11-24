import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queryadv2I } from '../../models/queryadv2';

@Injectable({
  providedIn: 'root'
})
export class Queryadv2Service {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/programsdir/query2/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllQueryadv2(): Observable<Queryadv2I[]> {
    return this.http
      .get<Queryadv2I[]>(this.base_path);
  }

  getOneQueryadv2(id: number): Observable<Queryadv2I> {
    return this.http
      .get<Queryadv2I>(`${this.base_path}${id}/`);
  }

  createQueryadv2(data: any): Observable<Queryadv2I> {
    return this.http.post<Queryadv2I>(this.base_path, data);
  }

  updateQueryadv2(id: number, data: any): Observable<Queryadv2I> {
    return this.http.put<Queryadv2I>(`${this.base_path}${id}/`, data);
  }

  deleteQueryadv2(id: number): Observable<Queryadv2I> {
    return this.http.delete<Queryadv2I>(`${this.base_path}${id}/`);
  }
}

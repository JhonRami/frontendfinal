import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queryadv5I } from '../../models/queryadv5';

@Injectable({
  providedIn: 'root'
})
export class Queryadv5Service {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/programsdir/query5/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllQueryadv5(): Observable<Queryadv5I[]> {
    return this.http
      .get<Queryadv5I[]>(this.base_path);
  }

  getOneQueryadv5(id: number): Observable<Queryadv5I> {
    return this.http
      .get<Queryadv5I>(`${this.base_path}${id}/`);
  }

  createQueryadv5(data: any): Observable<Queryadv5I> {
    return this.http.post<Queryadv5I>(this.base_path, data);
  }

  updateQueryadv5(id: number, data: any): Observable<Queryadv5I> {
    return this.http.put<Queryadv5I>(`${this.base_path}${id}/`, data);
  }

  deleteQueryadv5(id: number): Observable<Queryadv5I> {
    return this.http.delete<Queryadv5I>(`${this.base_path}${id}/`);
  }
}

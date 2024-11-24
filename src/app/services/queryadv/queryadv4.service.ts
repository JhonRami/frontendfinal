import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queryadv4I } from '../../models/queryadv4';

@Injectable({
  providedIn: 'root'
})
export class Queryadv4Service {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/programsdir/query4/`;

  constructor(
    private http: HttpClient
  ) { }

  getAllQueryadv4(): Observable<Queryadv4I[]> {
    return this.http
      .get<Queryadv4I[]>(this.base_path);
  }

  getOneQueryadv4(id: number): Observable<Queryadv4I> {
    return this.http
      .get<Queryadv4I>(`${this.base_path}${id}/`);
  }

  createQueryadv4(data: any): Observable<Queryadv4I> {
    return this.http.post<Queryadv4I>(this.base_path, data);
  }

  updateQueryadv4(id: number, data: any): Observable<Queryadv4I> {
    return this.http.put<Queryadv4I>(`${this.base_path}${id}/`, data);
  }

  deleteQueryadv4(id: number): Observable<Queryadv4I> {
    return this.http.delete<Queryadv4I>(`${this.base_path}${id}/`);
  }
}


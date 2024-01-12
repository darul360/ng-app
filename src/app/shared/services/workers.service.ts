import { Injectable } from '@angular/core';
import { HttpServiceModel } from '../util/types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Api } from '../util/api';

@Injectable({
  providedIn: 'root'
})
export class WorkersService implements HttpServiceModel{

  constructor(private http: HttpClient) { }
  fetch(filters?: { [key: string]: any; } | undefined): Observable<any> {
    return this.http.get(Api.DATA_WORKERS);
  }
  get(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  add(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
}

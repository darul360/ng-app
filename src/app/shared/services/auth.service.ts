import { Injectable } from '@angular/core';
import { AuthDataModel, AuthServiceInterface } from '../util/types';
import { HttpClient } from '@angular/common/http';
import { Api } from '../util/api';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {
  private _access: any;
  public get access(): any {
    return this._access;
  }
  constructor(
    private http: HttpClient
  ) {
    this.logged();
  }
  logged(): void {
    this.http.get(Api.AUTH_IS_LOGGED)
      .pipe(
        catchError((err) => {
          this.logOut();
          return throwError(() => err)
        })
      )
      .subscribe((resp:any) => {
        if(resp.warning){
          this.logOut();
        } else {
          this._access = true;
        }
      })
  }
  logIn(value: AuthDataModel): void {
    this.http.post(Api.AUTH_LOGIN, value).subscribe((resp: any) => {
      this._access = true;
      localStorage.setItem('token', resp.data.accessToken)
    })
  }
  logOut(): void {
    localStorage.removeItem('token');
    this._access = false;
  }
}
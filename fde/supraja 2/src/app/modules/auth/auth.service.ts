import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseURl;
  constructor(protected _httpClient: HttpClient) { }
  login(payload) {
    let params = new HttpParams().append('username', payload.username).append('password', payload.password)
    return this._httpClient.get(this.baseUrl + 'audit/user', { params });
  }

}

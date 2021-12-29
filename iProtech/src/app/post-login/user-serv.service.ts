import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserServService {
  URL = "https://jsonplaceholder.typicode.com/"
  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get(this.URL+"users")
  }

  // get User by Id
  getUser(id){
    return this.http.get(this.URL+"users/"+id)
  }
}

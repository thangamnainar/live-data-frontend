import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }


  get(apiEndPoint: string) {
    return this.http.get<any>('http://localhost:3000/web-socket/' + apiEndPoint);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  BASE_API = 'http://ec2-13-232-87-27.ap-south-1.compute.amazonaws.com/events/?active=true';

  constructor(private http: HttpClient) {

  }

  getList() {
    return this.http.get(this.BASE_API);
  }
}

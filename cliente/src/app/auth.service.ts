import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base = environment.base;

  constructor(private http: HttpClient) {}


  getProducts():any{
    return this.http.get(`${this.base}products`);
  }


  }


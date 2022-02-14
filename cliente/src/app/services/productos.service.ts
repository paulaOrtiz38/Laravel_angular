import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Producto } from '../interfaces/producto';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

   base = environment.base;

  constructor( private authService:AuthService,private httpClient:HttpClient) { }

  getProducts(){
    return this.authService.getProducts();
  }

  save(producto:Producto){
    console.log('datos enviados',producto);
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(`${this.base}products`,producto,{headers:headers});

  }

  put(producto:Producto){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(`${this.base}products/${producto.id}`,producto,{headers:headers});
  }

}

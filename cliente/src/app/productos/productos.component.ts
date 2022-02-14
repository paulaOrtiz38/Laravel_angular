import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductosService} from '../services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  title = 'productos';
  productos = [];

  constructor( private authService:AuthService, private  productoSevice:ProductosService) {
    this.productoSevice.getProducts().subscribe( (data: any) => {
      this.productos = data;
      }, (error:any) => {
        console.log(error);
        alert('ocurrio un error');
      });
  }

  ngOnInit(): void {
    //console.log(this.productos);
  }

}

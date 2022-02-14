import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../interfaces/producto';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  file: File | null = null;
  producto:  Producto = {
    id:undefined,
    nombre:undefined,
    cantidad: 0,
    estado: undefined,
    imagen:null,
    ciudades:undefined,
    observaciones: undefined,
    precio: undefined,
    created_at: undefined,
    updated_at: undefined,
  };

  id:any;
  editing:boolean;
  productos = [];


  constructor( private productosService: ProductosService, private activateRoute: ActivatedRoute) {
    //console.log(this.producto);
    this.id = this.activateRoute.snapshot.params['id'];
    this.editing =false;

    if(this.id){
        this.editing = true;
        this.productosService.getProducts().subscribe( (data:any) =>{
          this.productos = data;
          //console.log(data);
         this.asignaProducto(this.productos);
        });
    }


  }

  ngOnInit(): void {
  }
  saveProducto(){

    if (this.file) {
      this.producto.imagen = this.file;
    }

    if(this.editing){
        this.productosService.put(this.producto).subscribe( (data : any) => {
          console.log('datos devueltos',data);
          alert('Producto actualizado');
        }, (error) =>{
          console.log(error);
          alert('ocurrio un error');
        });
    }else{
        this.productosService.save(this.producto).subscribe( (data : any) => {
          console.log('datos devueltos',data);
          alert('Producto Guardado');
        }, (error) =>{
          console.log(error);
          alert('ocurrio un error');
        });
    }



  }

  asignaProducto(productos:any){
    let resproducto = productos.find( (m:any) =>{return m.id == this.id});
    this.producto.nombre = resproducto.nombre;
    this.producto.cantidad = resproducto.cantidad;
    this.producto.estado = resproducto.estado;
    this.producto.observaciones = resproducto.observaciones;
    this.producto.precio = resproducto.precio;
    this.producto.id = resproducto.id;
    this.producto.ciudades = resproducto.ciudades;
  }
  handleImage(event:any):void{
    //console.log(event.target.files[0])
    this.file = event.target.files[0]
  }



}

import { Injectable } from '@angular/core';
import { Carrito } from '../modelo/carrito';
import { Producto } from '../modelo/producto';

@Injectable({providedIn: 'root'})

export class CarritoService {

  private listCarrito: Carrito[]= [];
  
  getCarrito() { 
    this.obtenerSession();
    return this.listCarrito;
  }

  agregar(producto: Producto , cantidad: number = 1) { 
    this.obtenerSession();
    const index = this.listCarrito.findIndex(item => item.producto.id == producto.id);

    if (index === -1) {
      const item = new Carrito(producto, cantidad)
      this.listCarrito.push(item);
    } else {
      this.actualizar(index, this.listCarrito[index].cantidad + cantidad);
    }
    this.guardarSession();
  }

  actualizar(index: number , cantidad: number){
    if(index>=0 && index < this.listCarrito.length){
      this.listCarrito[index].cantidad=cantidad;
      this.guardarSession();
    }
  }

  cantidad(){
    this.obtenerSession();
    return this.listCarrito.length;
  }

  total(){
    const total = this.listCarrito.reduce((sum , item)=>sum + item.producto.precio*item.cantidad,0);
    return total;
  }


  eliminar(index: number){
    if(index>=0 && index < this.listCarrito.length){
      this.listCarrito.splice(index,1);
      this.guardarSession();
    }
  }
  guardarSession(){
    localStorage.setItem('carrito', JSON.stringify(this.listCarrito));
  }

  obtenerSession(){
    if(typeof window != 'undefined' && window.localStorage){
      const carrito = localStorage.getItem('carrito');
      if(carrito != null){
        this.listCarrito = JSON.parse(carrito);
      }
    }
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from '../../../core/services/carrito.service';
import { Carrito } from '../../../core/modelo/carrito';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito-listado',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './carrito-listado.component.html',
  styleUrl: './carrito-listado.component.css'
})
export class CarritoListadoComponent implements OnInit {
  public carritoService = inject(CarritoService);
  listCarrito: Carrito[] = [];

  ngOnInit(): void {
    this.getListCarrito();
  }

  getListCarrito(){
    this.listCarrito = this.carritoService.getCarrito();
  }
  eliminarItem(index: number) {
    this.carritoService.eliminar(index);
    this.getListCarrito();
  }
  onKeyDown(event: any){
    event.preventDefault();
  }
  actualizar(item: Carrito, index: number){
    this.carritoService.actualizar(index, item.cantidad);
  }


}

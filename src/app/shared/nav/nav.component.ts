import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { CarritoService } from '../../core/services/carrito.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit, OnDestroy  {
  public carritoService = inject(CarritoService);


  /// LOGIN
  userLoginOn: boolean = false;
  constructor(private loginService:LoginService){}
  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:((userLoginOn) =>{
        this.userLoginOn = userLoginOn;
      })
    })
  }
}

import { Routes } from '@angular/router';
import { CatalogoInicioComponent } from './components/catalogo/catalogo-inicio/catalogo-inicio.component';
import { CarritoListadoComponent } from './components/carrito/carrito-listado/carrito-listado.component';

export const routes: Routes = [
    { path: '', component:CatalogoInicioComponent},
    { path: 'carrito', component:CarritoListadoComponent},
    { path: '**', pathMatch: 'full',redirectTo: '' },
];

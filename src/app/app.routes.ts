import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Inventario } from './pages/inventario/inventario';
import { Movimientos } from './pages/movimientos/movimientos';
import { Productos } from './pages/productos/productos';
import { Reportes } from './pages/reportes/reportes';

export const routes: Routes = [
  { path: 'inicio', component: Inicio },
  { path: 'inventario', component: Inventario },
  { path: 'movimientos', component: Movimientos },
  { path: 'productos', component: Productos },
  { path: 'reportes', component: Reportes },
];

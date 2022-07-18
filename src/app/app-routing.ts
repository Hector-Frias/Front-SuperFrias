//Importar los modulos de router de angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes a los cuale les quiero hacer una pagina exclusiva

import { HomeComponent } from './componentes/home/home.component';
import { ConfirmarpedidosComponent } from './componentes/confirmarpedidos/confirmarpedidos.component';
import { VerpedidosComponent } from './componentes/verpedidos/verpedidos.component';
import { AgreareditarproductoComponent } from './componentes/agreareditarproducto/agreareditarproducto.component';

//Array de rutas

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'confirmarpedidos',
    component: ConfirmarpedidosComponent,
  },
  {
    path: 'verpedidos',
    component: VerpedidosComponent,
  },
  {
    path: 'agregareditarproducto',
    component: AgreareditarproductoComponent,
  },
];

//Exportar el  modulo de rutas

export const appRoutingPoviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);

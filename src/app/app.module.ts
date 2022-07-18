import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingPoviders } from './app-routing';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { FooterhomeComponent } from './componentes/footerhome/footerhome.component';
import { ResumepedidosComponent } from './componentes/resumepedidos/resumepedidos.component';
import { DatospedidosComponent } from './componentes/datospedidos/datospedidos.component';
import { ConfirmarpedidosComponent } from './componentes/confirmarpedidos/confirmarpedidos.component';
import { VerpedidosComponent } from './componentes/verpedidos/verpedidos.component';
import { FiltrospedidosComponent } from './componentes/filtrospedidos/filtrospedidos.component';
import { AgreareditarproductoComponent } from './componentes/agreareditarproducto/agreareditarproducto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductoComponent,
    FooterhomeComponent,
    ResumepedidosComponent,
    DatospedidosComponent,
    ConfirmarpedidosComponent,
    VerpedidosComponent,
    FiltrospedidosComponent,
    AgreareditarproductoComponent,
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingPoviders],
  bootstrap: [AppComponent],
})
export class AppModule {}

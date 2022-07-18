import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concatWith } from 'rxjs';
import { ObjProducto } from 'src/app/models/ObjProducto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductoService],
})
export class HomeComponent implements OnInit {
  public productos: ObjProducto[];

  constructor(
    private router: Router,
    private _productoservice: ProductoService
  ) {
    this.productos = [];
  }

  addProd() {
    localStorage.removeItem('edit');
    this.router.navigate(['/agregareditarproducto']);
  }

  async ngOnInit(): Promise<void> {
    console.log(this._productoservice.holamundo());
    this.productos = await this._productoservice.getProducto();
    console.log(this.productos);

    fetch('https://localhost:7236/api/Categorias/ObtenerCategorias', {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('categorias', JSON.stringify(result));
      })
      .catch((error) => console.log('error', error));

    fetch('https://localhost:7236/api/Clientes/ObtenerCLientes', {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) =>
        localStorage.setItem('clientes', JSON.stringify(result))
      )
      .catch((error) => console.log('error', error));

    fetch('https://localhost:7236/api/Pedidos/ObtenerPedidos', {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => localStorage.setItem('pedidos', JSON.stringify(result)))
      .catch((error) => console.log('error', error));
  }
}

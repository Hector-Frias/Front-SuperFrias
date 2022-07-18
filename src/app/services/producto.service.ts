import { Injectable } from '@angular/core';
import { ObjProducto } from '../models/ObjProducto';

@Injectable()
export class ProductoService {
  holamundo() {
    return 'Hola gente';
  }

  async getProducto() {
    var res: any = [];
    await fetch('https://localhost:7236/api/Productos/ObtenerProductos', {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => (res = result))
      .catch((error) => console.log('error', error));
    return res;
  }

  async addProducto() {
    var res: any = [];
    await fetch('https://localhost:7236/api/Productos/ObtenerProductos', {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => (res = result))
      .catch((error) => console.log('error', error));
    return res;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verpedidos',
  templateUrl: './verpedidos.component.html',
  styleUrls: ['./verpedidos.component.css'],
})
export class VerpedidosComponent implements OnInit {
  public pedidos: any;
  public clientes: any;

  public jsped: string;

  constructor() {
    this.jsped = '';
  }

  getClient(idCli: any) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].id == idCli) {
        return this.clientes[i].nombre;
      }
    }
  }

  ngOnInit(): void {
    let a = localStorage.getItem('pedidos');
    if (a != null) {
      this.jsped = a;
    }
    this.pedidos = JSON.parse(this.jsped);

    let b = localStorage.getItem('clientes');
    if (b != null) {
      this.jsped = b;
    }
    this.clientes = JSON.parse(this.jsped);
  }
}

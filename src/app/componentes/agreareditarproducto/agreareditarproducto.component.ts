import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agreareditarproducto',
  templateUrl: './agreareditarproducto.component.html',
  styleUrls: ['./agreareditarproducto.component.css'],
})
export class AgreareditarproductoComponent implements OnInit {
  public titulo: string;
  public nombre: string;
  public precio: number;
  public id_categoria: string;
  public categorias: any;
  public catLS: string;

  public editando: boolean;

  constructor() {
    this.titulo = 'Crear Producto';
    this.nombre = '';
    this.precio = 0;
    this.id_categoria = '';
    this.catLS = '';
    this.editando = false;
  }

  crearProducto() {
    var myHeaders = new Headers();
    myHeaders.append('accept', 'text/plain');
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      id_categoria: 1,
      nombre: 'chorizo',
      precio: 550,
    });
    fetch('https://localhost:7236/api/Productos', {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => alert('Producto creado'))
      .catch((error) => console.log('error', error));

    var myHeaders = new Headers();
    myHeaders.append('accept', 'text/plain');
    myHeaders.append('Content-Type', 'application/json');
  }

  ngOnInit(): void {
    let edir = localStorage.getItem('edit');
    if (edir != null) {
      this.editando = true;
      this.titulo = 'Editar Producto';
      let obj = JSON.parse(edir);
      this.nombre = obj.nombre;
      this.precio = obj.precio;
      this.id_categoria = obj.id_categoria;
    } else {
      this.editando = false;
    }
    let tt = localStorage.getItem('categorias');
    if (tt != null) {
      this.catLS = tt;
      this.categorias = JSON.parse(this.catLS);
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  @Input() public nombre: string;
  @Input() public precio: number;
  public cantidad: number = 0;
  @Input() public color: string;
  @Input() public imagen: string;
  @Input() public nombreCat: string;
  @Input() public idCat: number;

  constructor(private router: Router) {
    this.nombre = '';
    this.precio = 0;
    this.color = '';
    this.imagen = '';
    this.nombreCat = '';
    this.idCat = 0;
  }

  editProd() {
    localStorage.setItem(
      'edit',
      JSON.stringify({
        nombre: this.nombre,
        precio: this.precio,
        id_categoria: this.idCat,
      })
    );
    this.router.navigate(['/agregareditarproducto']);
  }

  aumentar() {
    this.cantidad = this.cantidad + 1;
    console.log(this.cantidad);
    this;
  }

  disminuir() {
    if (this.cantidad > 0) this.cantidad = this.cantidad - 1;
    console.log(this.cantidad);
  }

  ngOnInit(): void {
    this.cantidad = 0;
  }
}

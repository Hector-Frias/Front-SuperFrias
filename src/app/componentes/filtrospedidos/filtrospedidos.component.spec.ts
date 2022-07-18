import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrospedidosComponent } from './filtrospedidos.component';

describe('FiltrospedidosComponent', () => {
  let component: FiltrospedidosComponent;
  let fixture: ComponentFixture<FiltrospedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrospedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrospedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

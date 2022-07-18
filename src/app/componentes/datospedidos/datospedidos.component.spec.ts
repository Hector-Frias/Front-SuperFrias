import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospedidosComponent } from './datospedidos.component';

describe('DatospedidosComponent', () => {
  let component: DatospedidosComponent;
  let fixture: ComponentFixture<DatospedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatospedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatospedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

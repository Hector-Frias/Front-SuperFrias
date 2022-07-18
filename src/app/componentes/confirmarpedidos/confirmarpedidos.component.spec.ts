import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarpedidosComponent } from './confirmarpedidos.component';

describe('ConfirmarpedidosComponent', () => {
  let component: ConfirmarpedidosComponent;
  let fixture: ComponentFixture<ConfirmarpedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarpedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarpedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

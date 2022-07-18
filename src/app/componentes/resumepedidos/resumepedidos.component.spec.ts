import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumepedidosComponent } from './resumepedidos.component';

describe('ResumepedidosComponent', () => {
  let component: ResumepedidosComponent;
  let fixture: ComponentFixture<ResumepedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumepedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumepedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

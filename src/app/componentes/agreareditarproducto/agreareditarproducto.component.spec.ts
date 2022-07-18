import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreareditarproductoComponent } from './agreareditarproducto.component';

describe('AgreareditarproductoComponent', () => {
  let component: AgreareditarproductoComponent;
  let fixture: ComponentFixture<AgreareditarproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreareditarproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgreareditarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

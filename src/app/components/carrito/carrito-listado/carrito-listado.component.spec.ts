import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoListadoComponent } from './carrito-listado.component';

describe('CarritoListadoComponent', () => {
  let component: CarritoListadoComponent;
  let fixture: ComponentFixture<CarritoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

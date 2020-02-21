import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavInicialComponent } from './barra-nav-inicial.component';

describe('BarraNavInicialComponent', () => {
  let component: BarraNavInicialComponent;
  let fixture: ComponentFixture<BarraNavInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNavInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

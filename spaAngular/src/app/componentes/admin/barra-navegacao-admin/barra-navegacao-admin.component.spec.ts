import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacaoAdminComponent } from './barra-navegacao-admin.component';

describe('BarraNavegacaoAdminComponent', () => {
  let component: BarraNavegacaoAdminComponent;
  let fixture: ComponentFixture<BarraNavegacaoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNavegacaoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacaoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

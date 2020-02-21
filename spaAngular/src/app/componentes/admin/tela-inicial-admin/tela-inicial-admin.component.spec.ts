import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialAdminComponent } from './tela-inicial-admin.component';

describe('TelaInicialAdminComponent', () => {
  let component: TelaInicialAdminComponent;
  let fixture: ComponentFixture<TelaInicialAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaInicialAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaInicialAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

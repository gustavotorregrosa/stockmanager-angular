import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraUsuarioComponent } from './registra-usuario.component';

describe('RegistraUsuarioComponent', () => {
  let component: RegistraUsuarioComponent;
  let fixture: ComponentFixture<RegistraUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

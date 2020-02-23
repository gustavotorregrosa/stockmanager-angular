import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeUsuarioComponent } from './exibe-usuario.component';

describe('ExibeUsuarioComponent', () => {
  let component: ExibeUsuarioComponent;
  let fixture: ComponentFixture<ExibeUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibeUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

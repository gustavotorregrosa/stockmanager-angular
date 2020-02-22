import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeUsuarioComponent } from './le-usuario.component';

describe('LeUsuarioComponent', () => {
  let component: LeUsuarioComponent;
  let fixture: ComponentFixture<LeUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

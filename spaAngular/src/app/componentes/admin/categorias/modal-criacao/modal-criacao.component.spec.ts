import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriacaoComponent } from './modal-criacao.component';

describe('ModalCriacaoComponent', () => {
  let component: ModalCriacaoComponent;
  let fixture: ComponentFixture<ModalCriacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCriacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletaComponent } from './modal-deleta.component';

describe('ModalDeletaComponent', () => {
  let component: ModalDeletaComponent;
  let fixture: ComponentFixture<ModalDeletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

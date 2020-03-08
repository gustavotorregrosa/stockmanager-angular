import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletaProdutoComponent } from './modal-deleta-produto.component';

describe('ModalDeletaProdutoComponent', () => {
  let component: ModalDeletaProdutoComponent;
  let fixture: ComponentFixture<ModalDeletaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeletaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeletaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

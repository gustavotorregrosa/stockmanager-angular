import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriaEditaProdutoComponent } from './modal-cria-edita-produto.component';

describe('ModalCriaEditaProdutoComponent', () => {
  let component: ModalCriaEditaProdutoComponent;
  let fixture: ComponentFixture<ModalCriaEditaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCriaEditaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCriaEditaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

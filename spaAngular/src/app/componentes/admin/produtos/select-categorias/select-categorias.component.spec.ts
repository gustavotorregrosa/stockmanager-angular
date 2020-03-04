import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategoriasComponent } from './select-categorias.component';

describe('SelectCategoriasComponent', () => {
  let component: SelectCategoriasComponent;
  let fixture: ComponentFixture<SelectCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

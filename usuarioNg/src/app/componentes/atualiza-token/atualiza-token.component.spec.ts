import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaTokenComponent } from './atualiza-token.component';

describe('AtualizaTokenComponent', () => {
  let component: AtualizaTokenComponent;
  let fixture: ComponentFixture<AtualizaTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizaTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

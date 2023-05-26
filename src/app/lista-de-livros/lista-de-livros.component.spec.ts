import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeLivrosComponent } from './lista-de-livros.component';

describe('ListaDeLivrosComponent', () => {
  let component: ListaDeLivrosComponent;
  let fixture: ComponentFixture<ListaDeLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeLivrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

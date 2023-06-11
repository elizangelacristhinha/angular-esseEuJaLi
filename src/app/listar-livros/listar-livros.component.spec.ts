import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ListarLivrosComponent } from './listar-livros.component';

export class AppModule {

}
describe('ListarLivrosComponent', () => {
  let component: ListarLivrosComponent;
  let fixture: ComponentFixture<ListarLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLivrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //matTableModule.Component.getTestBed();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

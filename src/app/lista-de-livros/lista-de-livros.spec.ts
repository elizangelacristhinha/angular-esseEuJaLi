import { ListaDeLivros } from './lista-de-livros';

describe('ListaDeLivros', () => {
  it('should create an instance', () => {
    expect(new ListaDeLivros("", "","")).toBeTruthy();
  });
});

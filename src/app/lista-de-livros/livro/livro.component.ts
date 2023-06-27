import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  livro: { id: string, titulo: string, autor: string }

  constructor() { }

  ngOnInit(): void {
    this.livro = {
      id: '4',
      titulo: 'Titulo 4',
      autor: 'Autor 4'
    }
  }

}

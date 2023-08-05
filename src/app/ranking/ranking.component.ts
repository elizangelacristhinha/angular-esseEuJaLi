import { Component, OnInit } from '@angular/core';
import { Pontos } from '../lista-de-livros/pontos';
import { PontosService } from '../services/pontos.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public ranking: Pontos[];

  constructor(private pontosService: PontosService) { }


  ngOnInit(): void {
    this.pontosService.getRanking()
    .subscribe(
        retorno => {
          this.ranking = retorno.map (iten =>
           {
                return new Pontos(
                   iten.id,
                   iten.login,
                   iten.pontos
                )
            }
          )
        }
    )
  }

}

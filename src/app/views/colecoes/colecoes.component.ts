import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Colecao } from 'src/app/Interfaces/colecao/colecao';
import { ColecoesService } from 'src/app/servicos/colecoes/colecoes.service';


@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent implements OnInit {

  public colecoes$!: Observable<Colecao[]>;

  constructor(private _colecaoService: ColecoesService) { }

  ngOnInit(): void {
    this.colecoes$ = this._colecaoService.list();
  }

}

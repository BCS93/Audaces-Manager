import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Colecao } from 'src/app/Interfaces/colecao/colecao';
import { ColecoesService } from 'src/app/servicos/colecoes/colecoes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public colecoes$!: Observable<Colecao[]>;
  public name: string = '';

  constructor(private _colecaoService: ColecoesService) { }

  ngOnInit(): void {
    this.colecoes$ = this._colecaoService.list();
  }

  

}

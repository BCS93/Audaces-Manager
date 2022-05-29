import { Component, OnInit } from '@angular/core';
import { catchError, empty, Observable, pipe } from 'rxjs';
import { Modelo } from 'src/app/Interfaces/modelo/modelo';
import { ModelosService } from 'src/app/servicos/modelos/modelos.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  public modelos$!: Observable<Modelo[]>;

  constructor(private _modeloService: ModelosService) { }

  ngOnInit(): void {
    this.modelos$ = this._modeloService.list();
  }


}

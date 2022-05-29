import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError, empty, Observable } from 'rxjs';
import { Colecao } from 'src/app/Interfaces/colecao/colecao';
import { Modelo } from 'src/app/Interfaces/modelo/modelo';
import { ColecoesService } from 'src/app/servicos/colecoes/colecoes.service';
import { ModelosService } from 'src/app/servicos/modelos/modelos.service';



@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.scss']
})
export class CriarModeloComponent implements OnInit {

  public formModelo!: FormGroup;
  public submitted = false;
  public title: string = 'Criar Modelo';
  public register: any;
  public btnExcluir = false;
  public colecoes$!: Observable<Colecao[]>;
  public modelos$!: Observable<Modelo[]>;

  constructor(
    private _fBModelo: FormBuilder,
    private _modelosService: ModelosService,
    private _route: ActivatedRoute,
    private _location: Location,
    private _colecaoService: ColecoesService
  ) { }

  ngOnInit(): void {

    this.colecoes$ = this._colecaoService.list();


    this.formModelo = this._fBModelo.group({
      id: null,
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      responsavel: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      tipo: [null, [Validators.required]],
      colecao: [null, [Validators.required]],
      bordado: [null, [Validators.required]],
      estampa: [null, [Validators.required]]
    });

    this._route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        if (id !== undefined) {
          this.title = 'Editar Modelo';
          this.btnExcluir = true;
          const modelo$ = this._modelosService.loadById(id);
          modelo$.subscribe(modelo => {
            this.register = modelo;
            this.updateFormModelo(modelo);
          })
        }
      }
    )
  }

  public onSubmit() {
    this.submitted = true;
    if (this.formModelo.valid) {
      console.log(this.formModelo.value);

      if (this.formModelo.value.id) {
        this._modelosService.update(this.formModelo.value).subscribe();
        this._location.back();
      } else {
        this._modelosService.create(this.formModelo.value).subscribe();
        this._location.back();
      }
    }
  }

  public updateFormModelo(modelo: any) {
    this.formModelo.patchValue({
      id: modelo.id,
      nome: modelo.nome,
      responsavel: modelo.responsavel,
      tipo: modelo.tipo,
      colecao: modelo.colecao,
      bordado: modelo.bordado,
      estampa: modelo.estampa
    });
  }

  onCancel() {
    this.submitted = false;
    this.formModelo.reset();
    this._location.back();
  }

  onDelete() {
    this._modelosService.delete(this.formModelo.value.id).subscribe();
    this._location.back();
  }

  /* onRefresh() {
     this.modelos$ = this._modelosService.list().pipe(
       catchError(error => {
         console.error(error);
         return empty();
       })
     )
   }*/
}

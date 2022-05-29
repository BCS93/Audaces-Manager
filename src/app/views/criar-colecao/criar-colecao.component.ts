import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ColecoesService } from 'src/app/servicos/colecoes/colecoes.service';

@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.scss']
})
export class CriarColecaoComponent implements OnInit {

  public formColecao!: FormGroup;
  public submitted = false;
  public title: string = 'Criar Coleção';
  public register: any;

  constructor(
    private _fBColecao: FormBuilder,
    private _colecoesService: ColecoesService,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {

    this.formColecao = this._fBColecao.group({
      id: null,
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      responsavel: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      estacao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(17)]],
      marca: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      orcamento: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      ano: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });

    this._route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        if (id !== undefined) {
          this.title = 'Editar Coleção';
          const colecao$ = this._colecoesService.loadById(id);
          colecao$.subscribe(colecao => {
            this.register = colecao;
            this.updateFormColecao(colecao);
          })
        }
      }
    )
  }


  public onSubmit() {
    this.submitted = true;
    if (this.formColecao.valid) {

      if (this.formColecao.value.id) {

        this._colecoesService.update(this.formColecao.value).subscribe();
        this._location.back();
      } else {
        this._colecoesService.create(this.formColecao.value).subscribe();
        this._location.back();
      }
    }
  }

  public updateFormColecao(colecao: any) {
    this.formColecao.patchValue({
      id: colecao.id,
      nome: colecao.nome,
      responsavel: colecao.responsavel,
      estacao: colecao.estacao,
      marca: colecao.marca,
      orcamento: colecao.orcamento,
      ano: colecao.ano
    });
  }

  onCancel() {
    this.submitted = false;
    this.formColecao.reset();
    this._location.back();
  }



}

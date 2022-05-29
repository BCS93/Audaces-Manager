import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, pipe } from 'rxjs';
import { Colecao } from 'src/app/Interfaces/colecao/colecao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColecoesService {

  private readonly API = `${environment.API}colecoes`;

  constructor(private _httpClient: HttpClient) { }

  public list(): Observable<Colecao[]> {
    return this._httpClient.get<Colecao[]>(this.API);
  }

  public create(colecao: Colecao) {
    return this._httpClient.post(this.API, colecao).pipe(take(1));
  }

  public loadById(id: number) {
    return this._httpClient.get<Colecao[]>(`${this.API}/${id}`).pipe(take(1));
  }

  public update(colecao: Colecao) {
    console.log(colecao);
    return this._httpClient.put(`${this.API}/${colecao.id}`, colecao).pipe(take(1));
  }

}
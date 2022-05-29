import { Injectable } from '@angular/core';
import { Observable, take, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Modelo } from 'src/app/Interfaces/modelo/modelo';


@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  private readonly API = `${environment.API}modelos`;

  constructor(private _httpClient: HttpClient) { }

  public list(): Observable<Modelo[]> {
    return this._httpClient.get<Modelo[]>(this.API);
  }
  public create(modelo: Modelo) {
    return this._httpClient.post(this.API, modelo).pipe(take(1));
  }

  public loadById(id: number) {
    return this._httpClient.get<Modelo[]>(`${this.API}/${id}`).pipe(take(1));
  }

  public update(modelo: Modelo) {
    return this._httpClient.put(`${this.API}/${modelo.id}`, modelo).pipe(take(1));
  }

  public delete(id: Number){
    return this._httpClient.delete(`${this.API}/${id}`).pipe(take(1));
  }
}

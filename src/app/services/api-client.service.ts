import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private urlBase: string;

  constructor(private http: HttpClient) {
    this.urlBase = 'https://pokeapi.co/api/v2/pokemon';
  }


  getPokemons(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.urlBase}/?limit=${limit}&offset=${offset}`);
  }

  getPokemon(id: string): Observable<any> {
    return this.http.get(`${this.urlBase}/${id}`);
  }
}

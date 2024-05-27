import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(
    private http: HttpClient
  ) { }

  public getSchools() {
    return this.http.get(`https://api.escuelajs.co/api/v1/products`);
  }

  public getPokemon() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
  }
}

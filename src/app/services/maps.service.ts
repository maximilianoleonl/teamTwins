import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(
    private http: HttpClient
  ) { }

  public getMapxD() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
  }
}

import { Injectable } from '@angular/core';
import { Pokemon } from "./pokemon";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, catchError, tap } from "rxjs";

@Injectable()
export class PokemonsService {

  constructor(private http: HttpClient) {  }

  private pokemonsUrl = 'api/pokemons';

  // avec mock-pokemons.ts
  // getPokemons(): Pokemon[] {
  //   return POKEMONS;
  // }

  private log(log: string) {
    console.info(log)
  }

  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  getPokemons() : Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_=> this.log(`fetched pokemons`)),
      catchError(this.handleError('getPokemons', []))
    );
  }

  // getPokemon(id: number) : Pokemon | null {
  //   // let pokemons = this.getPokemons();
  //   // for(let i = 0; i < pokemons.length; i++) {
  //   //   if(id === pokemons[i].id) {
  //   //     return pokemons[i];
  //   //   }
  //   // }
  //   // return null;
  //
  //   return this.getPokemons().find( (pokemon) => id === pokemon.id);
  // }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      tap(_=> this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    )
  }

  getPokemonTypes(): Array<string> {
    return [
      'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_=> this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    )
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(_=> this.log(`delete pokemon id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    )
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap((pokemon: Pokemon) => this.log(`added pokemon with id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>('addPokemon'))
    )
  }

  searchPokemons(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
      return of ([])
    }

    return this.http.get<Pokemon[]>(`api/pokemon/?name=${term}`).pipe(
      tap(_=> this.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemons', []))
    )
  }
}

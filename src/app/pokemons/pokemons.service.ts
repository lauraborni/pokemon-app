import { Injectable } from '@angular/core';
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Injectable()
export class PokemonsService {

  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  getPokemon(id: number) : Pokemon | null {
    // let pokemons = this.getPokemons();
    // for(let i = 0; i < pokemons.length; i++) {
    //   if(id === pokemons[i].id) {
    //     return pokemons[i];
    //   }
    // }
    // return null;

    return this.getPokemons().find( (pokemon) => id === pokemon.id);
  }

  getPokemonTypes(): Array<string> {
    return [
      'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
  }
}

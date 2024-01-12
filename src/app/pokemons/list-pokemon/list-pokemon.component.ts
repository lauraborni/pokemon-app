import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from "../mock-pokemons";
import { Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css',
  providers: [PokemonsService]
})
export class ListPokemonComponent {
  title = 'pokemon-app';
  pokemons: Pokemon[] = null;

  constructor(
    private router: Router,
    private  pokemonsService: PokemonsService
  ) {}

  ngOnInit() {
    // this.pokemons = POKEMONS;
    this.getPokemons();
  }

  // avec mock-pokemon
  // getPokemons() {
  //   this.pokemons = this.pokemonsService.getPokemons();
  // }

  getPokemons(): void {
    this.pokemonsService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}


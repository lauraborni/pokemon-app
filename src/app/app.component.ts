import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemons/pokemon';
import { POKEMONS } from "./pokemons/mock-pokemons";

@Component({
  selector: 'pokemon-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pokemon-app';
  pokemons: Pokemon[] = null;
  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez sélectionné ' + pokemon.name);
  }
}

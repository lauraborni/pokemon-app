import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from "../mock-pokemons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent {
  title = 'pokemon-app';
  pokemons: Pokemon[] = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import {debounceTime, distinctUntilChanged, switchMap, Observable, Subject, of} from "rxjs";

import { Pokemon } from "../pokemon";
import { PokemonsService } from "../pokemons.service";


@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.css'
})
export class SearchPokemonComponent implements OnInit {

  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private pokemonSearchServices: PokemonsService,
    private router: Router
  ) {  }

  search(term: string) {
    this.searchTerms.next(term)
  }

  ngOnInit() {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonSearchServices.searchPokemons(term))
    )
  }

  gotoDetail(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link)
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params, Route} from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonsService } from "../pokemons.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css',
  providers: [PokemonsService]
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit() {
    // let id = +this.route.snapshot.paramMap.get('id');
    // this.pokemon = this.pokemonsService.getPokemon(id);

    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack() {
    window.history.back();
  }

  goEdit(pokemon: Pokemon) {
    let link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

  delete(pokemon: Pokemon) {
    this.pokemonsService.deletePokemon(pokemon)
      .subscribe(_=> this.goBack())
  }
}

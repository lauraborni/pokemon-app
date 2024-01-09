import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params, Route} from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonsService } from "../pokemons.service";

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
    let id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonsService.getPokemon(id);
  }

  goBack() {
    window.history.back();
  }
}

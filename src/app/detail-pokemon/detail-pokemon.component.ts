import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params, Route} from "@angular/router";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock-pokemons";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit {
  pokemons: Pokemon[] = null;
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.pokemons = POKEMONS;
    let id = +this.route.snapshot.paramMap.get('id');

    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].id == id) {
        this.pokemon = this.pokemons[i];
      }
    }
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }
}

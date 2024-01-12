import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../pokemon";

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.css'
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor() {  }

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

}

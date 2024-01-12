import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";
import { Pokemon } from "../pokemon";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  types: Array<string>;
  isAddForm: boolean;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router
  ) {  }

  ngOnInit() {
    this.types = this.pokemonsService.getPokemonTypes();
    this.isAddForm = this.router.url.includes('add')
  }

  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (~index) return true;
    return false;
  }

  selectType($event: any, type: string) {
    let checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (~index) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    if (this.isAddForm) {
      this.pokemonsService.addPokemon(this.pokemon)
        .subscribe(pokemon => {
          this.pokemon = pokemon;
          this.goBack()
        })
    } else {
      this.pokemonsService.updatePokemon(this.pokemon)
        .subscribe(() => this.goBack())
    }
  }

  goBack() {
    let link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link)
  }
}

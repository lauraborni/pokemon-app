import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonsRoutingModule} from "./pokemons-routing.module";

import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import { PokemonsService } from "./pokemons.service";
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';




@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule
  ],
  providers: [PokemonsService]
})
export class PokemonsModule { }

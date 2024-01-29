import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonsRoutingModule} from "./pokemons-routing.module";

import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import { PokemonsService } from "./pokemons.service";
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import {FormsModule} from "@angular/forms";
import { LoginPokemonComponent } from './login-pokemon/login-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import {LoaderComponent} from "../loader/loader.component";
import {AuthGuardService} from "../auth-guard.service";




@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    LoginPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    FormsModule
  ],
  providers: [PokemonsService, AuthGuardService]
})
export class PokemonsModule { }

import { AppState } from "../AppState.js";
import { userPokemonService } from "../services/UserPokemonService.js";
import { Pop } from "../utils/Pop.js";

function _drawUserPokemon(){
console.log('Drawing USER POKEMON', AppState.userPokemon);

  let template = /*html*/`
  <div class="">
    <div class="d-flex">
      <p>
        <b>
        ${AppState.userPokemon.length}</p>
        </b>
      </div>
  </div>
`

AppState.userPokemon.forEach(p => {
  template += p.UserPokemonTemplate
})

setHTML('userPokemon', template)

}



export class UserPokesController{
constructor(){

AppState.on('account', this.getUserPokemon)
AppState.on('userPokemon', _drawUserPokemon)
  

}

async getUserPokemon(){
  try {
    await userPokemonService.getUserPokemon()
  } catch (error) {
    Pop.error(error)
  }
}

async addPokemon(){
  try {
    await userPokemonService.addPokemon()
  } catch (error) {
    Pop.error(error)
  }
}




}
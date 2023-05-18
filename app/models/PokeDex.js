import { AppState } from "../AppState.js";

export class Pokemon {
  constructor(data){

this.id = data.id
this.name = data.name
this.url = data.url 


  }


get ActivePokemonTemplate(){
  return /*html*/ `
  <div class="card sticky-top my-4">
        <div class="card-body">
          <p class="fs-2">${this.name}</p>
          ${this.PokemonButton}
        </div>
      </div>
  
  
  `
}

get PokemonButton(){
if (!AppState.account){
return /*html*/ `
<button class="btn btn-primary" onclick="app.AuthController.login()">Login to Add to PokeDex</button>
`
}
return /*html*/`
      <button class="btn btn-primary" onclick="app.UserPokesController.addPokemon()">Add to PokeDex</button>`
} 

}
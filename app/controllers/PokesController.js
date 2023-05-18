import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { pokesService } from "../services/PokesService.js"
import { setHTML } from "../utils/Writer.js";

function _drawPokeDex(){
  console.log('pokeDex', AppState.pokeDex);

  let template = ''

  AppState.pokeDex.forEach(p=>{
    template += /*html*/`
    <div>
    <p class="fs-4 selectable" role="button" onclick="app.PokesController.setActivePokemon('${p.id}')">${p.name}</p>
    </div>
    `
  })
    setHTML('pokeDex', template)

}

function _drawActivePokemon(){
  setHTML('activePokemon', AppState.activePokemon.ActivePokemonTemplate)
}






export class PokesController{

  

  constructor(){
  console.log('Is the controller working?');
  
  AppState.on('activePokemon', _drawActivePokemon)
  AppState.on('pokeDex', _drawPokeDex)
  
  this.getPokeFromApi()
  }

async getPokeFromApi(){
try {
  await pokesService.getPokes()
} catch (error) {
  Pop.error(error)
}
}
async setActivePokemon(id) {
  try {
    await pokesService.setActivePokemon(id)
  } catch (error) {
    Pop.error(error)
  }
}
}
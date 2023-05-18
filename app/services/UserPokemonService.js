import { AppState } from "../AppState.js"
import { Pokemon } from "../models/PokeDex.js"
import { sandboxApi } from "./AxiosService.js"

class UserPokemonService {


async getUserPokemon() {
  const res = await sandboxApi.get('api/pokemon')
  console.log('my Pokemon', res.data)
  AppState.userPokemon = res.data.map(p => new Pokemon(p))

}
async addPokemon() {
  const res = await sandboxApi.post('api/pokemon', AppState.activePokemon)
  const newPokemon = new Pokemon(res.data)
  AppState.userPokemon.push(newPokemon)
  AppState.emit('userPokemon')

}


}

export const userPokemonService = new UserPokemonService()
import { AppState } from "../AppState.js";
import { Pokemon } from "../models/PokeDex.js";
import { pokeApi } from "./AxiosService.js"




class PokesService {


  async setActivePokemon(name) {
    // const res = await pokeApi.get('/api/v2/pokemon/' + id)
    const res = await pokeApi.get(`api/v2/pokemon/${name}`)

    console.log('what is the res', res.data)

    AppState.activePokemon = new Pokemon(res.data)

  }




  async getPokes(){
    const res = await pokeApi.get('/api/v2/pokemon')

    console.log('WHAT DID WE GET', res.data);

    AppState.pokeDex = res.data.results

  }


}




export const pokesService = new PokesService()
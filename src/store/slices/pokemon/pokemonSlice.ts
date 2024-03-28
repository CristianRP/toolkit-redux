import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  isLoading: boolean;
  page: number;
  pokemons: Pokemon[];
}

interface PokemonPayload {
  page: number;
  pokemons: Pokemon[];
}


const initialState: PokemonState = {
  isLoading: false,
  page: 0,
  pokemons: []
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<PokemonPayload>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  }
});
       
// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
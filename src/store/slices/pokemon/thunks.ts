import { Action, ThunkAction } from '@reduxjs/toolkit';
import { setPokemons, startLoadingPokemons } from '.'
import { RootState } from '../..';
import { pokemonApi } from '../../../api/pokemonApi';

export const getPokemons = ( page = 0 ): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async ( dispatch, getState ) => {
    dispatch( startLoadingPokemons() );
    
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
    console.log(getState());
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    dispatch( setPokemons({
      page: page + 1,
      pokemons: data.results
    }))
  }
}

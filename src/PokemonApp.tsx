import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const { isLoading, page, pokemons } = useAppSelector( state => state.pokemons ); 
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  }, [dispatch])
  

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { isLoading ? 'True' : 'False' }</span>
      <ul>
        {
          pokemons.map(pokemon => (
            <li key={ pokemon.name }>{ pokemon.name }</li>
          ))
        }
      </ul>

      <button
        disabled={ isLoading }
        onClick={ () => dispatch( getPokemons(page) ) }
      >
        Next
      </button>
    </>
  )
}

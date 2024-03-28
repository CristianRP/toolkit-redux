import { useAppDispatch, useAppSelector } from './store/hooks'
import { decrement, increment, incrementByAmount } from './store/slices/counter';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const { counter } = useAppSelector( state => state.counter );
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is { counter }</p>
        <button onClick={() => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={() => dispatch( decrement() ) }>
          Decrement
        </button>
        <button onClick={() => dispatch( incrementByAmount(2) ) }>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App

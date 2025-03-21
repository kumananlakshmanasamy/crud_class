import { useEffect, useState } from 'react'
import './App.css'


// state  -- two way binding  --- content changes 
// props  --  sigle way binding  -- content visualise 
// rerendering  state 

// hooks 
// use state
// use effect
// use memo
// use ref
// use context 
// use callback 
// custom hooks

function App() {
  const [count, setCount] = useState(0)
  // arrow function 
  const increment =()=>{
    setCount((count) => count + 1)
  }
  const decrement =()=>{
    setCount((count) => count - 1)
  }

  const reset =()=>{
    setCount(0)
  }

  useEffect(()=>{
    setTimeout(() => {
      increment()
    }, 1000);
  },[count])

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{count}</p>
        <button onClick={increment}>increment
        </button>
        <button onClick={decrement}>decrement
        </button>
        <button onClick={reset}>reset
        </button>
      </div>
      <p className="read-the-docs">
       LMS CODE BUILDERS
      </p>
    </>
  )
}

export default App

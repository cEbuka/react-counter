import { useState, Fragment } from 'react';


const App = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(prev => prev + 1)
  }

  function decrementCount() {
    setCount(prev => prev - 1)
  }

  return <Fragment>
    <h1>Count: <span className='count__display'>{count}</span></h1>
    <button onClick={incrementCount}>Increment count</button>
    <button onClick={decrementCount} disabled={count === 0}>Decrement count</button>
  </Fragment>
}

export default App;
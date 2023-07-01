import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
        <h2 className='text-center'>{count}</h2>
        <button onClick={() => { setCount(count + 1) }} className="btn btn-primary">+</button>
      </div>
    </div>
  );
}

export default App

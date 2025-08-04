import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <Counter />
      <Notif/>
    </div>
  )
}

function Counter() {
  const [count,setCount] = useState(0)


  function Fun(){
    // count = count + 1;
    setCount(count+1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={Fun}>Increment</button> 
    </div>
  )
}

function Notif(){
  const [notif,setnotif] = useState(0);

  function Funn(){
    setnotif(!notif);
  }

  return(
    <div>
      <button onClick={Funn}>Inc Notif</button>
      {notif ?  (<p> the message has been printed</p>): null}
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"

function App() {

  const [ducks, setDucks] = useState([])
  const [featuredDuck, setFeaturedDuck] = useState({ name: "Duck name goes here", likes: 0})
  const [duckFormOpen, setDuckFormOpen] = useState(true)

  useEffect(() => {
    fetch("http://localhost:4001/ducks")
    .then(response => response.json())
    .then(data => setDucks(data))
  }, [])

  console.log(featuredDuck);

  function handleClick() {
    setDuckFormOpen(prevValue => !prevValue);
  }

  return (
    <div className="App">

      <h1>Duck Manager 2022 - React Edition</h1>

      {/* { ducks.length !== 0 ? <DuckList ducks={ducks} setFeaturedDuck={setFeaturedDuck}/> : null} */
      <DuckList ducks={ducks} setFeaturedDuck={setFeaturedDuck}/>
      }

      <DuckDisplay featuredDuck={featuredDuck} setFeaturedDuck={setFeaturedDuck} setDucks={setDucks} ducks={ducks}/>

      <button onClick={handleClick}>{duckFormOpen ? "Close Duck Form" : "Open Duck Form"}</button>

      {duckFormOpen ? <DuckForm ducks={ducks} setDucks={setDucks} /> : null}
      
    </div>
  );
}

export default App;

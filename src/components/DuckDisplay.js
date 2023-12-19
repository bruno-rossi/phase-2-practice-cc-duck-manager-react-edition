import React from 'react'

function DuckDisplay({featuredDuck, setFeaturedDuck, setDucks, ducks}) {

  function handleLikes() {

    const editedDuckObj = { ...featuredDuck, likes: featuredDuck.likes +1 }

    fetch(`http://localhost:4001/ducks/${editedDuckObj.id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedDuckObj)
    })
    .then(response => response.json())
    .then( () => {

      const editedDucksArray = ducks.map(duck => {
        if ( duck.id !== featuredDuck.id ) {
          return duck;
        } else {
          return editedDuckObj;
        }
      })
      
      setFeaturedDuck(editedDuckObj)
      setDucks(editedDucksArray)
    })
  }

  return (
    <div className="duck-display">

      {/* show all the details for the featuredDuck state here */}

      <h2>{featuredDuck.name}</h2>

      <img src={featuredDuck.img_url} alt={featuredDuck.name} />

      <button onClick={handleLikes}>{featuredDuck.likes} likes</button>

    </div>
  )
}

export default DuckDisplay

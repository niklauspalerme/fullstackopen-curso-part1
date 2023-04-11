import React, { useState } from 'react'
import ReactDOM from 'react-dom'


//Componente Condicional Hijo
const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      <p>Clicks Totales: {allClicks.length}</p>
      <p>button press history: {allClicks.join(' ')}</p>
    </div>
  )
}


//Componente Padre
const App = () => {

  //1) Estados tambien puede ser objettos
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const [allClicks, setAll] = useState([])



  //2) Funciones Aux
  const handleLeftClick = () => {
    const newClicks = { 
      ...clicks, 
      left: clicks.left + 1 
    }
    setClicks(newClicks);
    setAll([...allClicks, "L"]); // Asi se modifica un state de []

  }

  const handleRightClick = () => {
    const newClicks = { 
      ...clicks, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
    //Otra forma de modificar el estado del []
    setAll( statePrevClick =>([...statePrevClick, 'R']))

  }

  //3) Retorno
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <History allClicks={allClicks} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root')) 

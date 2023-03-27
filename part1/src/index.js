import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Contador = ({number}) => <h1>{number}</h1>

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {

  //Estado
  const [contador,setContador] = useState(0);

  //Metodos
  const handleClickPlus = () =>{
    setContador(contador+1)
  }

  const handleReset = () =>{
    setContador(0)
  }

  //Variable dinamica
  const isEven = contador%2 === 0

  //Retorno
  return (
    <div>
      <h1>Contador</h1>
      <p>EL valor del contador es:</p>
      <Contador number={contador}/>
      <p>{isEven ? "Es Par": "Es Impar"}</p>
      <Button handleClick={handleClickPlus} text={"Plus +"}/>
      <Button handleClick={handleReset} text={"Reset to 0"}/>
     
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root')) 

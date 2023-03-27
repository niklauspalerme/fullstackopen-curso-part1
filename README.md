# fullstackopen-curso-part1

  //Explicación del useState
  //El useState retorna un array de 2 valores
  
  cons contador1 = useState(0) -> Se define el valor inicial del state
  const contadorValue = contador1[0] -> EL valor inicial que es 0
  const setContador = contador[1] -> EL valor para actualizar el state

  AL final todo eso es igual a:
    
  const [contador,setContador] = useState(0);

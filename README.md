# fullstackopen-curso-part1

  //Explicación del useState
  //El useState retorna un array de 2 valores
  
  cons contador1 = useState(0) -> Se define el valor inicial del state
  const contadorValue = contador1[0] -> EL valor inicial que es 0
  const setContador = contador[1] -> EL valor para actualizar el state

  AL final todo eso es igual a:
    
  const [contador,setContador] = useState(0);

# Modificaciones del state de []

  Para modificar un state que posea el array no se puede utilizar en metodo push().
  Esto se debe a que React requiere que se mantenga una referencia inmutable al estado 
  anterior para poder realizar las actualizaciones y comparaciones necesarias 
  para determinar qué elementos deben actualizarse en la interfaz de usuario.

  Cuando se utiliza el método push() para agregar un nuevo elemento a un array 
  en el estado, se está modificando directamente el array existente, lo que 
  puede provocar problemas inesperados. Por ejemplo, si se utiliza el método 
  push() para agregar un elemento a un array y luego se llama a setState(), e
  s posible que React no detecte el cambio en el array porque la referencia del 
  array no ha cambiado.

  En cambio, para actualizar el estado correctamente en React, se debe crear
  una nueva copia del estado y actualizarla mediante setState(). Para actualizar 
  un array en el estado, se puede utilizar métodos como concat(), slice(), map(), 
  filter(), reduce(), o el operador spread (...) para crear una nueva copia del
    array y luego actualizarla en el estado.

# Ejemplo

const app = {

  const [state,setState] = ({
    miArray: []
  };)

  # Forma 1

  const agregarElemento = ({elemento}) => {
    setState({
      miArray: [...this.state.miArray, elemento]
    });
  }

  # Forma 2

  const agregarElemento = (elemento) => {
    this.setState({
      miArray: [...this.state.miArray, elemento]
    });
  }

}







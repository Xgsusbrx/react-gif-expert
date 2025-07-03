import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setImputValue] = useState("");
    //funcion que se encarga de cambiar el estado cuando haya algun cambio de valor esto es solo para editar el input  
    const onImputChange = ({target}) => {
    
        setImputValue(target.value);
  };
//funcion del formulario que se activa para enviar algun valor 
  const onSubmit =(event) => {
    event.preventDefault()
    if (inputValue.trim().length<=1) return
    //funcion que agrega el valor introducido en el imput al arreglo de categorias  
    //setCategories(categories => [inputValue, ... categories]) 
    //esta funcion agg el valor del input al arreglo 
    onNewCategory(inputValue.trim())
     //este comando limpia el input una vez se ejecuta     
    setImputValue('')
  }
  return (
    <form onSubmit = {onSubmit}>
      <input
        type="text"
        placeholder="buscar gifs" 
        value={inputValue}
        onChange={onImputChange}
      ></input>
 </form>
  );
};

import React, {useState} from 'react'
import {Button, InputGroup, FormControl} from 'react-bootstrap';

export default function ItemCount({stock, initial, onAdd}) {
   const [contador, setContador] = useState(initial);

  
   const disminuirClick =() => {
       contador > parseInt(initial) 
       ? setContador(contador -1) 
       : alert(`NO PUEDE ELEGUIR MENOR QUE ${initial}`);
   };

   const aumentarClick=() => {
        contador < parseInt(stock)  
       ? setContador(contador +1) 
       : alert(`El STOCK DE PRODUCTOS ES ${stock}`);
   };
   
    return (
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick={disminuirClick}>
                -
                </Button>
                <FormControl 
                className="text-center" 
                aria-label ="Example text whit two button addons" 
                value={contador} />
                <Button variant="outline-primary" onClick={aumentarClick}>
                +
                </Button>
            </InputGroup>
            <Button variant="primary" onClick={() => onAdd(contador)} >Agregar al carrito </Button>
        </div>
        
    )
}




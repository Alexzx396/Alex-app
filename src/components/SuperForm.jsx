import { Children } from "react";

export const SuperButon =({ButtonText='Soy Buton'}) => {
    const MostrarEnConsola = () => {
        console.log ('Hola Camada');
    }
    return (
        <> 
            <button onClick={MostrarEnConsola}>{ButtonText}</button>
        </>
    )
}

export default function SuperForm({title, children, componenteRender}){
    // console.log(props);
    return (
        <>
            <h1>{title}</h1>
            {children[0]}
            {componenteRender({ButtonText: 'SuperFormButon'})}
        </>
    )  
}
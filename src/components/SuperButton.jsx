export const SuperButon =({buttonText='Soy Button'}) => {
    const mostrarEnConsola =()=>{
        console.log('Hola Camada');
    }

    console.log('antes del evento')
    return (
        <>
            <button onClick={mostrarEnConsola}>{buttonText}</button>
        </>
    )
}
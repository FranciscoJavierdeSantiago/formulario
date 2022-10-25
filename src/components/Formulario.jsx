import React, {Fragment, useState} from "react";

const Formulario = () => {
    const [datos, SetDatos]= useState({
        nombre: ' ',
        apellido: ' '
    })

    const Capturar = (event) =>{
        //console.log(event.target.valeu)
        SetDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const envioDato = (event) => {
        event.preventDefault();
        console.log(datos.nombre +' '+ datos.apellido)
    }

    return(
        <Fragment>
            <h1>Formulario</h1>
                <form onSubmit={envioDato}>
                        <input placeholder="Ingresa tu Nombre" 
                        type="text"
                        name="nombre"
                        onChange={Capturar}
                        ></input>

                        <input placeholder="Ingresa tus apellidos" 
                        type="text"
                        name="apellido"
                        onChange={Capturar}
                        ></input>
                    
                    
                    <button type="submit">Enviar</button>                   
                </form>
                <h4>{datos.nombre} - {datos.apellido}</h4>
        </Fragment>
    );
}
export default Formulario;
import React from "react";
import "../estilos/Boton.css"

export function Boton({texto, esBotonClick, manejarClick}) {
    return (
        <button 
            className={esBotonClick ? "boton-click" : "boton-reiniciar" }
            onClick={manejarClick}>
                {texto}
        </button>
    )
}
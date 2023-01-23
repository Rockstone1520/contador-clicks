import React from "react";
import "../estilos/Contador.css"

export function Contador(props) {
    return (
        <div className="contenedor-contador">
            <p className="numero-contador">{props.cuenta}</p>
        </div>
    )
}
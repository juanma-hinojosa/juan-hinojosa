import React from "react";
import { Link } from "react-router-dom";
// Al importar Link estamos creando una etiqueta Link
// Que al estar vinculada al Navlink vamos con una ruta
// Si usamos esa misma ruta, todo lo que se haya Guardado en la etiqueta Link se va a renderizar

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    return (
        <div>
            <h2>Skills</h2>
            <div>
                <Link to="/about-me">
                    <p>Comming Soon you can put your own blog post!!</p>
                </Link>
            </div>
        </div>
    ); 
}
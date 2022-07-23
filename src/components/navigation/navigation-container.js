/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavigationContainer extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink to ="/" className={"nav-link-active"}>
                            {/* exact to ="/" 
                                Nos estaba arrojando una advertencia
                                pero de todas forma funciona con o el sin "exact"
                            */}
                            <i class="fas fa-home"></i>
                            Home
                        </NavLink>
                    </div>
                   
                    <div className="nav-link-wrapper">
                        <NavLink to ="/about-me" className={"nav-link-active"}>
                            <i class="fas fa-user"></i>
                            About
                        </NavLink>               
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to = "/contact" className={"nav-link-active"}>
                            <i class="fas fa-paper-plane"></i>
                            Contact
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to = "/skills" className={"nav-link-active"}>
                            <i class="fas fa-code"></i>
                            Skills
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to = "/portfolio" className={"nav-link-active"}>
                            <i class="fas fa-suitcase"></i>
                            portfolio
                        </NavLink>
                    </div>

                    {/* No usamos etiquetas A como en los html
                    Porque sino pasariamos por alto la manera de como funciona react en renderizar componentes y en vez de eso va recargar toda la pagina
                    Por ese motivo usamos NavLink a menos que queramos redirigir a una pagina externa 
                    -- activeClassName nos cambaria el nombre de nuestra clase llamada active.
                    */}

                    {/* {false ? <button>Add Blog</button> : null} */}
                    {/* La mejor practica para las condiciones debem ser operadiores ternarios */}
                </div>
                <div className="right-side">Juan Hinojosa</div>
            </div>
        )
    }
}

export default NavigationContainer;
import React from "react";
import { Link } from "react-router-dom";

const Contato = () => {
    return (
        <>
            <h1>Contato 2</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre-empresa">Sobre Empresa</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Contato;

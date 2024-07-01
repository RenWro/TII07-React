import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import SobreEmpresa from "../Pages/SobreEmpresa";
import Contato from "../Pages/Contato";

const Router = () => {
    return (
        <BrowserRouter>
            
                <Route component={ Home } path="/" exact />
                <Route component={ SobreEmpresa } path="/sobre-empresa" />
                <Route component={ Contato } path="/contato" />
           
        </BrowserRouter>
    );
}

export default Router;

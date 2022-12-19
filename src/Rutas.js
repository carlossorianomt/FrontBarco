import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgregarCliente from "./componentes/AgregarCliente";
import Clientes from "./componentes/clientes";
import Menu from "./componentes/Menu";
import EditarCliente from "./componentes/EditarCliente";


class Rutas extends Component{
    render(){
        return(
             <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<div>HOME</div>} />
                    <Route path="/clientes" element = {<Clientes />} />
                    <Route path="/agregarCliente" element = {<AgregarCliente />} />
                    <Route path="/editarCliente" element = {<EditarCliente />} />
                </Routes>
                </BrowserRouter>
        );
    }
}

export default Rutas;
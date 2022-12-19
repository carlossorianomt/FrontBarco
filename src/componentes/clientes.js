import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clientes extends Component {
    render(){
        return(
            <React.Fragment>
                <h1>Clientes</h1>
                <Link to="/agregarCliente" className="btn btn-success">Agregar Cliente</Link>
                <table className="table mt-5 table-info table-striped">
                <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Correo</th>
                            <th>Contraseña</th>
                            <th>Imagen</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <td>
                        <button className="btn btn-success">
                        <Link to="/editarCliente" className="btn btn-success">
                            Editar
                            </Link></button>

                        <button className="btn btn-danger ms-3">Eliminar</button>
                    </td>
                </table>
            </React.Fragment>

        );
    }

}

export default Clientes;
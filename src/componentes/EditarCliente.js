import React, { Component } from "react";

class EditarCliente extends Component {
    render(){
        return(
            <React.Fragment>
                
                    <div className="container">
                    <h1>Editar Cliente</h1>
                    <div class="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" />
                    </div>
                    <div class="mb-3">
                    <label for="age" class="form-label">Edad</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="" />
                    </div>
                    <div class="mb-3">
                    <label for="email" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="formGroupExampleInput" placeholder="" />
                    </div>
                    <div class="mb-3">
                    <label for="pass" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="formGroupExampleInput" placeholder="" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>    
                    
            </React.Fragment>

        );
    }

}

export default EditarCliente;
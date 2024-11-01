import { FaUserCircle } from "react-icons/fa";
import React, { useState } from "react";
import './Login.css'

function Login () {  
  const [showTextEmail, setShowTextEmail] = useState(false);
  const [showTextContraseña, setShowTextContraseña] = useState(false);

  return(
    <div className="fondo-login">
			<div className='container menu-login'>
        <FaUserCircle className="icono-usuario-login"/>
        <p className="text-center fw-semibold titulo-menu-login">INICIA SESIÓN CON TU CUENTA</p>
        {/*-----------------------------------CAMPO DE CORREO-----------------------------------*/}
        <div className="input-group mb-3 direccion-campo-login">
          <div className="orientacion-campo-login">
            <div id="inputEmail" className="entryarea">
              <input type="text" required
                onClick={(e) => {
                  e.target.style.color = "aqua"
                  e.target.style.borderBottom = "2px solid aqua";
                  setShowTextEmail(true);
                }}
                onBlur={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.borderBottom = "2px solid white";
                  e.target.nextSibling.style.color = "white";
                  setShowTextEmail(false);
                }}
                onFocus={(e) => {
                  e.target.nextSibling.style.color = "aqua";
                }}/>
              <label className="labelLine" for="myInput">E-mail</label>
            </div>
          </div>
        </div>
        {showTextEmail && (
          <p className="texto-emergente-campo-login">
            Escribe tú E-mail
          </p>
        )}
        {/*-----------------------------------CAMPO DE CORREO-----------------------------------*/}
        <div className="espacio-componentes-login-2"></div>
        {/*---------------------------------CAMPO DE CONTRASEÑA---------------------------------*/}
        <div className="input-group mb-3 direccion-campo-login">
          <div className="orientacion-campo-login">
            <div id="inputPassword" className="entryarea">
              <input type="password" required
                onClick={(e) => {
                  e.target.style.color = "aqua"
                  e.target.style.borderBottom = "2px solid aqua";
                  setShowTextContraseña(true);
                }}
                onBlur={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.borderBottom = "2px solid white";
                  e.target.nextSibling.style.color = "white";
                  setShowTextContraseña(false);
                }}
                onFocus={(e) => {
                  e.target.nextSibling.style.color = "aqua";
                }}/>
              <label className="labelLine" for="myInput">Contraseña</label>
            </div>
          </div>
        </div>
        {showTextContraseña && (
          <p className="texto-emergente-campo-login">
            Escribe tú contraseña
          </p>
        )}
        {/*---------------------------------CAMPO DE CONTRASEÑA---------------------------------*/}
        <div className="espacio-componentes-login-1"></div>
        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
          INICIAR SESIÓN
        </button>
        <div className="espacio-componentes-login-3"></div>
        <a href="#">Crear cuenta</a>
      </div>
		</div>
  );
}

export default Login;
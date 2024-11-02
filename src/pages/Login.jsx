import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import './Login.css'
import Logo from "../../img/Logo-1.png"

function Login () {  
  const [showTextEmail, setShowTextEmail] = useState(false);
  const [showTextContraseña, setShowTextContraseña] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "SXW - INICIAR SESIÓN"
    toast("¡Bienvenido(a) a Sonido Xaviers Web!",{
      className: "toast-mensaje-informacion"
    });
    toast("¡Inicia sesión para acceder a la pagina principal!",{
      className: "toast-mensaje-informacion"
    });
  },[]);

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const CrearCuenta = async () => {
    setLoading(true);
    document.title = "Cargando...";
    await delay(2000);
    navigate("/CrearCuenta",{replace: true});
    await delay(2000);
    document.title = "SXW - CREAR CUENTA";
    setLoading(false);
  };

  return(
    <div className="fondo-login">

      <ToastContainer
      position="top-right"
      autoClose={5000}
      closeOnClick
      pauseOnHover
      draggable
      limit={2}/>

			<div className='container menu-login'>
        <img src={Logo} alt="Logo de SXW" className="logo-menu-login"/>
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
        {loading ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Cargando...</span>
          </div>
          ) : (
            <button className="btn btn-link" onClick={CrearCuenta}>Crear Cuenta</button>
          )
        }    
      </div>
		</div>
  );
}

export default Login;
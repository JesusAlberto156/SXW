import { FaUserCircle } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import './CreateAccounts.css'
import Logo from "../../img/Logo-1.png"

function CreateAccounts () {  
    const [showTextNombre, setShowTextNombre] = useState(false);
    const [showTextUsuario, setShowTextUsuario] = useState(false);
    const [showTextEmail, setShowTextEmail] = useState(false);
    const [showTextContraseña, setShowTextContraseña] = useState(false);
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [loadingHome, setLoadingHome] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "SXW - CREAR CUENTA"
        toast("¡Bienvenido(a) a Sonido Xaviers Web!",{
        className: "toast-mensaje-informacion"
        });
        toast("¡Crea tu cuenta para acceder a la pagina principal!",{
        className: "toast-mensaje-informacion"
        });
    },[]);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const IniciarSesion = async () => {
        setLoadingLogin(true);
        document.title = "Cargando...";
        await delay(2000);
        navigate("/",{replace: true});
        await delay(2000);
        document.title = "SXW - INICIAR SESION";
        setLoadingLogin(false);
    };

    const Inicio = async () => {
        setLoadingHome(true);
        document.title = "Cargando...";
        toast("¡Se creo la cuenta correctamente!",{
          className: "toast-mensaje-correcto",
          autoClose: 2000
        });
        await delay(3000);
        navigate("/Inicio",{replace: true});
        await delay(2000);
        document.title = "SXW - INICIO";
        setLoadingHome(false);
    };

    return(
        
        <div className="fondo-createAccounts">

            <ToastContainer
            position="top-right"
            autoClose={5000}
            closeOnClick
            pauseOnHover
            draggable
            limit={2}/>

            
            <div className='container menu-createAccounts'>
                <img src={Logo} alt="Logo de SXW" className="logo-menu-createAccounts"/>
                <p className="text-center fw-semibold titulo-menu-createAccounts">CREA TU CUENTA</p>
                {/*-----------------------------------CAMPO DE NOMBRE COMPLETO-----------------------------------*/}
                <div className="input-group mb-3 direccion-campo-createAccounts">
                    <div className="orientacion-campo-createAccounts">
                        <div id="inputNombreCompleto" className="entryarea">
                            <input type="text" required
                                onClick={(e) => {
                                    e.target.style.color = "aqua"
                                    e.target.style.borderBottom = "2px solid aqua";
                                    setShowTextNombre(true);
                                }}
                                onBlur={(e) => {
                                    e.target.style.color = 'white';
                                    e.target.style.borderBottom = "2px solid white";
                                    e.target.nextSibling.style.color = "white";
                                    setShowTextNombre(false);
                                }}
                                onFocus={(e) => {
                                    e.target.nextSibling.style.color = "aqua";
                                }}
                            />
                            <label className="labelLine" for="myInput">Nombre</label>
                        </div>
                    </div>
                </div>
                {showTextNombre && (
                <p className="texto-emergente-campo-createAccounts">
                    Escribe tú nombre completo
                </p>
                )}
                {/*-----------------------------------CAMPO DE NOMBRE COMPLETO-----------------------------------*/}
                <div className="espacio-componentes-createAccounts-2"></div>
                {/*-----------------------------------CAMPO DE USUARIO-----------------------------------*/}
                <div className="input-group mb-3 direccion-campo-createAccounts">
                    <div className="orientacion-campo-createAccounts">
                        <div id="inputNombreUsuario" className="entryarea">
                            <input type="text" required
                                onClick={(e) => {
                                    e.target.style.color = "aqua"
                                    e.target.style.borderBottom = "2px solid aqua";
                                    setShowTextUsuario(true);
                                }}
                                onBlur={(e) => {
                                    e.target.style.color = 'white';
                                    e.target.style.borderBottom = "2px solid white";
                                    e.target.nextSibling.style.color = "white";
                                    setShowTextUsuario(false);
                                }}
                                onFocus={(e) => {
                                    e.target.nextSibling.style.color = "aqua";
                                }}
                            />
                            <label className="labelLine" for="myInput">Usuario</label>
                        </div>
                    </div>
                </div>
                {showTextUsuario && (
                <p className="texto-emergente-campo-createAccounts">
                    Escribe tú nombre de usuario
                </p>
                )}
                {/*-----------------------------------CAMPO DE USUARIO-----------------------------------*/}
                <div className="espacio-componentes-createAccounts-2"></div>
                {/*-----------------------------------CAMPO DE CORREO-----------------------------------*/}
                <div className="input-group mb-3 direccion-campo-createAccounts">
                    <div className="orientacion-campo-createAccounts">
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
                                }}
                            />
                            <label className="labelLine" for="myInput">E-mail</label>
                        </div>
                    </div>
                </div>
                {showTextEmail && (
                <p className="texto-emergente-campo-createAccounts">
                    Escribe tú E-mail
                </p>
                )}
                {/*-----------------------------------CAMPO DE CORREO-----------------------------------*/}
                <div className="espacio-componentes-createAccounts-2"></div>
                {/*---------------------------------CAMPO DE CONTRASEÑA---------------------------------*/}
                <div className="input-group mb-3 direccion-campo-createAccounts">
                    <div className="orientacion-campo-createAccounts">
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
                                }}
                            />
                            <label className="labelLine" for="myInput">Contraseña</label>
                        </div>
                    </div>
                </div>
                {showTextContraseña && (
                <p className="texto-emergente-campo-createAccounts">
                    Escribe tú contraseña
                </p>
                )}
                {/*---------------------------------CAMPO DE CONTRASEÑA---------------------------------*/}
                <div className="espacio-componentes-createAccounts-1"></div>
                {loadingHome ? (
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div> 
                ) : (
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"
                        onClick={
                            Inicio
                        }
                    >
                        CREAR CUENTA
                    </button>
                )
                }
                <div className="espacio-componentes-createAccounts-3"></div>
                {loadingLogin ? (
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>
                    ) : (
                        <button className="btn btn-link" onClick={IniciarSesion}>Iniciar Sesión</button>
                    )
                }    
            </div>
        </div>
    );
}

export default CreateAccounts;
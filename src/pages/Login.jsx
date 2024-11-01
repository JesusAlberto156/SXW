import { FaUserCircle } from "react-icons/fa";
import React, { useState } from "react";

function Login () {  
  const [showTextEmail, setShowTextEmail] = useState(false);
  const [showTextContraseña, setShowTextContraseña] = useState(false);

    return(
      <div style={{
          backgroundImage: "url('/img/Login.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          display: "flex",
          justifyContent: "center", 
          alignItems: "center", 
        }}>
			  <div
          className='container'
          style={{
            background: 'rgba(0, 0, 0, 0.7)', 
            width: "20%",
            padding: "20px",
            borderRadius: "8px",
            position: "relative", 
          }}
        >
          <FaUserCircle
            style={{
              color: "white",
              fontSize: "6rem",
              padding: "10px", 
              marginBottom: "10px"
            }}
          />
          <div></div>
          <p className="text-center fw-semibold" style={{color: "white",marginBottom: "40px"}}>INICIA SESIÓN CON TU CUENTA</p>
          {/*-----------------------------------CAMPO DE CORREO-----------------------------------*/}
          <style>
            {`
              #floatingInputEmail::placeholder {
                color: ${showTextEmail ? 'aqua' : 'white'};
                opacity: 1;
              }
            `}
          </style>
          <div className="input-group mb-3" style={{ display: "flex", flexDirection: "column"}}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span class="input-group-text" style={{background: showTextEmail ? "aqua" : "white",
                                                     borderRadius: "0",
                                                     border: showTextEmail ? '1px solid aqua' : '1px solid white' 
              }}>E-mail</span>
              <input
                type="email"
                className="form-control"
                id="floatingInputEmail"
                placeholder="name@example.com"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: 'none',
                  borderBottom: '1px solid white',
                  outline: 'none',
                  borderRadius: "0",
                }}
                onClick={(e) => {
                  e.target.style.borderBottom = '1px solid aqua';
                  setShowTextEmail(true);
                }}
                onBlur={(e) => {
                  e.target.style.borderBottom = '1px solid white';
                  setShowTextEmail(false);
                }}
              />
            </div>
            {showTextEmail && (
              <p style={{ color: "aqua", textAlign: "left", fontSize: "0.8rem", marginTop: "40px", position:"absolute"}}>
                Escribe tú E-mail
              </p>
            )}
          </div>
          {/*-----------------------------------CAMPO DE CORREO-----------------------------------*/}
          <div style={{marginBottom: "50px"}}></div>
          {/*---------------------------------CAMPO DE CONTRASEÑA---------------------------------*/}
          <style>
            {`
              #floatingInputContraseña::placeholder {
                color: ${showTextContraseña ? 'aqua' : 'white'};
                opacity: 1;
              }
            `}
          </style>
          <div className="input-group mb-3" style={{ display: "flex", flexDirection: "column"}}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span class="input-group-text" style={{background: showTextContraseña ? "aqua" : "white",
                                                     borderRadius: "0",
                                                     border: showTextContraseña ? '1px solid aqua' : '1px solid white' 
              }}>Contraseña</span>
              <input
                type="password"
                className="form-control"
                id="floatingInputContraseña"
                placeholder="********"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: 'none',
                  borderBottom: '1px solid white',
                  outline: 'none',
                  borderRadius: "0",
                }}
                onClick={(e) => {
                  e.target.style.borderBottom = '1px solid aqua';
                  setShowTextContraseña(true);
                }}
                onBlur={(e) => {
                  e.target.style.borderBottom = '1px solid white';
                  setShowTextContraseña(false);
                }}
              />
            </div>
            {showTextContraseña && (
              <p style={{ color: "aqua", textAlign: "left", fontSize: "0.8rem", marginTop: "40px", position:"absolute"}}>
                Escribe tú contraseña
              </p>
            )}
          </div>
          {/*---------------------------------CAMPO DE CONTRASEÑA---------------------------------*/}
          <div style={{marginBottom: "50px"}}></div>
          <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
            INICIAR SESIÓN
          </button>
        </div>
		  </div>
    );
}

export default Login;
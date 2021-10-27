import React from 'react'
import "./style.css";
// import logo from "./components/images/logo-plantastik.jpeg";
import CartWidget from  './CartWidget';
import {Col} from 'react-bootstrap';

function NavBar() {
    
    return (

<section>
<div>
    

    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      
      <a class="navbar-brand" href="#">  Planastik </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
        </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"> <span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nosotros</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Articulos
            </a>
  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#">Semillas</a>
    <a class="dropdown-item" href="#">Bulbos</a>
  <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Articulos</a>
  </div>
    </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Contacto</a>
      </li>

      <li class="CartIcon">
      < CartWidget /> 
      </li>
  
      
    </ul>
  <Col class="justify-content-end" id="buscador">
      <input class="form-control mr-sm-2 " type="search" placeholder="escribe algo..." aria-label="Buscar" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  > Buscar </button>
  </Col>

</div>
  </nav>
  </div>
  </section>
    )
}

export default NavBar


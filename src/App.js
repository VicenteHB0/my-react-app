import logo from "./logo.svg";
import "./App.css";
import Titulo from "./Titulo";
import Parrafo from "./Parrafo";
import Imagen from "./Imagen";
import Contador from "./Contador";
import CambiarImagen from "./CambiarImagen";
import CambiarColorFondo from "./CambiarColorFondo";
import Toast from "./Toast";
import ModalExample from "./ModalExample";
import CarouselExample from "./CarouselExample";
import TableExample from "./TableExample";
import FormularioRegistro from "./FormularioRegistro";
import { Button, Container, Row, Col } from "reactstrap";
import React, { useState } from "react";
/*
const data = [
  { text1: "Row 1 Column 1", text2: "Row 1 Column 2", icon: "fa-camera" },
  { text1: "Row 2 Column 1", text2: "Row 2 Column 2", icon: "fa-github" },
  { text1: "Row 3 Column 1", text2: "Row 3 Column 2", icon: "fa-heart" },
  { text1: "Row 4 Column 1", text2: "Row 4 Column 2", icon: "fa-star" },
  { text1: "Row 5 Column 1", text2: "Row 5 Column 2", icon: "fa-coffee" },
];
*/
function App() {
  // const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // const toggleFormulario = () => {
  //   setMostrarFormulario(!mostrarFormulario);
  // };

  return (
    <div className="App">
      {/* <Titulo
        texto="Ejemplo del componente Titulo"
        tipoFuente="Arial"
        tamañoTexto="36px"
        color="blue"
      />
      <Parrafo
        contenido="Ejemplo del componente parrafo"
        tipoFuente="Verdana"
        tamañoTexto="18px"
        color="black"
      />
      <Imagen
        src="https://via.placeholder.com/150"
        alt="Imagen de ejemplo"
        ancho="150px"
        alto="150px"
        borde="2px solid black"
      />
      <Contador />
      <CambiarImagen />
      <CambiarColorFondo />
      <div>
        <h1>Toast Example</h1>
        <Toast />
      </div>
      <div>
        <h1>Modal Example</h1>
        <ModalExample />
      </div>
      <div>
        <h1>Carousel Example</h1>
        <CarouselExample />
      </div>
      <div>
        <h1>Table Example</h1>
        <TableExample />
      </div> */}
      <div>
        <div>
          <Container className="text-center">
            <h1>Formulario de Registro</h1>
            <div className="form-wrapper">
              <Row className="justify-content-center">
                <Col md={12}>
                  <FormularioRegistro />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;

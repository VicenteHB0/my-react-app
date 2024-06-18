/*import useState para almacenar el estado del componete */
import React, { useState } from "react";
import { Button } from "reactstrap";

const CambiarImagen = () => {
  /*imagenActual es la variable de estado */
  const [imagenActual, setImagenActual] = useState("logo192.png");
  /*Función para alternar entre las imágenes */
  const cambiarImagen = () => {
    setImagenActual((prevImagen) =>
      prevImagen === "logo192.png" ? "logo.png" : "logo192.png"
    );
  };

  return (
    <div>
      <h1>Intercambio de imagenes</h1>
      <img
        src={`${process.env.PUBLIC_URL}/${imagenActual}`}
        alt="Imagen actual"
        style={{ width: "300px", height: "auto" }}
      />
      <br />
      <Button onClick={cambiarImagen} color="danger">
        Cambiar Imagen
      </Button>
    </div>
  );
};

export default CambiarImagen;

import React, { useState } from "react";

const CambiarColorFondo = () => {
  const [colorFondo, setColorFondo] = useState("#ffffff");
  const getColorRandom = () => {
    const formatoHexa = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += formatoHexa[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const cambiarFondo = () => {
    const nuevoColor = getColorRandom();
    setColorFondo(nuevoColor);
    document.body.style.backgroundColor = nuevoColor;
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Cambiador de Color de Fondo</h1>
      <button
        onClick={cambiarFondo}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Cambiar Color de Fondo
      </button>
    </div>
  );
};

export default CambiarColorFondo;

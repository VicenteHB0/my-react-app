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

function App() {
  return (
    <div className="App">
      <Titulo
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
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Titulo from './Titulo';
import Parrafo from './Parrafo';
import Imagen from './Imagen';

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
    </div>
  );
}

export default App;

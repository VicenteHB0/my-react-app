/*Componente Parrafo que tiene como Props texto, tipoFuente, fontSize y color*/
const Parrafo = ({ contenido, tipoFuente, tamañoTexto, color }) => {
    return (
      <p style={{ fontFamily: tipoFuente, fontSize: tamañoTexto, color: color }}>
        {contenido}
      </p>
    );
  };
  
  export default Parrafo;
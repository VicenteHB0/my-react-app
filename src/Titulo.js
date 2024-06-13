/*Componente TItilo que tiene como Props texto, tipoFuente, fontSize y color*/ 
const Titulo = ({ texto, tipoFuente, tamanoTexto, color }) => {
    return (
      <h1 style={{ fontFamily: tipoFuente, fontSize: tamanoTexto, color: color }}>
        {texto}
      </h1>
    );
  };
  
  export default Titulo;
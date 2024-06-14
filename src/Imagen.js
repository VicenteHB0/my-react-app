/*Componente Imagen que tiene como Props src, alt, ancho, alto y borde*/
const Imagen = ({ src, alt, ancho, alto, borde }) => {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/logo192.png`} 
        alt={"Imagen"}
        style={{ width: ancho, height: alto, border: borde }}
      />
    );
  };
  
  export default Imagen;
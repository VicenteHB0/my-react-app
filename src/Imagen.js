/*Componente Imagen que tiene como Props src, alt, ancho, alto y borde*/
const Imagen = ({ src, alt, ancho, alto, borde }) => {
    return (
      <img
        src={src}
        alt={alt}
        style={{ width: ancho, height: alto, border: borde }}
      />
    );
  };
  
  export default Imagen;
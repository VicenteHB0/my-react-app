/*import useState para almacenar el estado del componete */
import React, { useState } from "react";

const Contador = () => {
  /*conatdor es la variable de estado */
  const [contador, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setCount(contador + 1)}>
        Incremetar el contador
      </button>
    </div>
  );
};
export default Contador;

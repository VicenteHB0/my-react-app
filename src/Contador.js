/*import useState para almacenar el estado del componete */
import React, { useState } from "react";
import { Button } from "reactstrap";

const Contador = () => {
  /*conatdor es la variable de estado */
  const [contador, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <Button onClick={() => setCount(contador + 1)} color="primary">
        Incremetar el contador
      </Button>
    </div>
  );
};
export default Contador;

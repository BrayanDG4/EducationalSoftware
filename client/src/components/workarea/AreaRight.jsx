import { useState } from "react";
import { Modulo1 } from "./Unidades/Unidad1";



export const AreaRight = () => {

  const [modulo, setmodulo] = useState(0)
  return (
    <div className="md:w-3/5 p-4 bg-section2">

      {/* -----unidades---------- */}
        <Modulo1 />

      
      {/* -------------------- */}
      

    </div>
  );
};

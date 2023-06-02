import { Unidad1 } from "./Unidades/Unidad1";
import { Unidad2 } from "./Unidades/Unidad2";
import { Unidad3 } from "./Unidades/Unidad3";

import { useModuleStore } from "../../store/moduleStore";

export const AreaRight = () => {
  const handleModules = () => {
    const { count } = useModuleStore();

    switch (count) {
      case 0:
        return <Unidad1 />;

      case 1:
        return <Unidad2 />;

      case 2:
        return <Unidad3 />;

      default:
        alert("modulo no encontrado");
        break;
    }
  };

  return (
    <div className="md:w-3/5 p-4 bg-section2">
      {/* -----unidades---------- */}

      {handleModules()}

      {/* -------------------- */}
    </div>
  );
};

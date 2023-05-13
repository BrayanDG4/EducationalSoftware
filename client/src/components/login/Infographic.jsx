import bubbles from "../../assets/login/bubbles.svg";

export const Infographic = () => {
  return (
    <div className="hidden md:block w-3/5 bg-gradient-to-b from-cyan-500 to-blue-500">
      <div className="w-9/12 m-auto">
        <img className="" src={bubbles} alt="Burbujas" />
      </div>
      <div className="mx-2 text-center">
        <h3 className="text-3xl font-bold text-white mt-5">
          ¡Desarrolla tu lógica de programación <br /> practicando!
        </h3>
        <p className="text-lg font-semibold text-white mt-5">
          <span className="font-bold">Fortalece</span> tus{" "}
          <span className="font-bold">bases de programación</span> mediante este
          software educativo como apoyo al área de fundamentos de programación.
        </p>
      </div>
    </div>
  );
};

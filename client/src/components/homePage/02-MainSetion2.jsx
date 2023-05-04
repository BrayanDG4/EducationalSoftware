import mainImage from "../../assets/imgHomePage2.svg";
import arrow  from "../../assets/arrow.svg";

export const MainSection2 = () => {
  return (
    <section className="h-screen bg-section2 overflow-hidden">
      <div className="mx-2 my-4 justify-center items-center md:flex md:gap-10">
        <div className="mx-auto md:pr-32 md:pl-10 w-8/12">
          <img className=" mx-auto " src={mainImage} alt="Imagen principal" />
        </div>

        <div className="font-semibold text-start mt-5 " >
          <h2 className="text-4xl mycolor leading-snug font-bold md:text-5xl md:leading-normal">
          ¡Aprende programación con ejercicios prácticos!
          </h2>
          <p className="text-xl mycolor2 mt-5 leading-normal md:text-3xl">
          Desarrolla tú lógica de programación mejorando tus bases en fundamentos, aprende con ejercicios prácticos hechos a tu nivel.
          </p>
        </div>
      </div>

      <div className="pt-28">
        <img className="mx-auto" src={arrow} alt="arrow" />
      </div>
    </section>
  );
};

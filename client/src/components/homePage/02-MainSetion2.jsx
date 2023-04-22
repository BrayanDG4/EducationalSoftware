import mainImage from "../../assets/imgHomePage2.svg";
import arrow  from "../../assets/arrow.svg";

export const MainSection2 = () => {
  return (
    <section className="container mx-auto px-4 h-screen bg-section2">
      <div className="md:flex md:flex-row md:gap-10">
        <div className="w-11/12 md:w-10/12 xl:w-6/12 xl:ml-52 mx-auto md:pr-32">
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

      <div className="mt-10">
      <img className=" mx-auto" src={arrow} alt="arrow" />
      </div>
    </section>
  );
};

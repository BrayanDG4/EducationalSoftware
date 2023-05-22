import mainImage from "../../assets/bubble-gum.gif";
import { ButtonRightNow } from "../buttons/ButtonRightNow";
import { useNavigate } from "react-router-dom";

export const MainSection = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto px-4 h-screen flex flex-col justify-center">
      <div className="md:flex md:gap-10">
        {/* textos */}
        <div className="font-semibold flex flex-col justify-around">
          <h2 className="text-4xl mycolor leading-snug font-bold md:text-5xl md:leading-normal md:mb-7">
            ¡Desarrolla tu lógica de programación practicando!
          </h2>
          <p className="text-xl mycolor2 mt-2 leading-normal md:text-3xl">
            <b>Fortalece</b> tus <b>bases de programación</b> mediante este
            software educativo como apoyo al área de fundamentos de
            programación.
          </p>
        </div>

        {/*imagen  */}
        <div className="mx-auto w-8/12 bg-cover">
          <img className="" src={mainImage} alt="Imagen principal" />
        </div>
      </div>

      {/* boton */}
      <div className="mt-5 md:mt-14  ">
        <button
          className={
            "color2 text-white px-4 py-3 font-semibold rounded-md text-2xl hover:color1 transition-all"
          }
          onClick={() => {
            navigate("/register");
          }}
        >
          ¡Comienza ahora!
        </button>
      </div>
    </section>
  );
};

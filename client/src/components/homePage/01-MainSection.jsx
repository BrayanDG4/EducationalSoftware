import mainImage from "../../assets/bubble-gum.gif";
import { ButtonRightNow } from "../buttons/ButtonRightNow";

export const MainSection = () => {
  return (
    <section className="container mx-auto px-4 h-screen flex flex-col justify-center">
      <div className="md:flex md:flex-row-reverse md:gap-10">
        
        {/*imagen  */}
        <div className="mx-auto bg-cover">
          <img
            className=" mx-auto "
            src={mainImage}
            alt="Imagen principal"
          />
        </div>

        {/* textos */}
        <div className="font-semibold flex flex-col justify-around">
          <h2 className="text-4xl mycolor leading-snug font-bold md:text-5xl md:leading-normal md:mb-7">
            ¡Desarrolla tu lógica de 
            programación practicando!
          </h2>
          <p className="text-xl mycolor2 mt-2 leading-normal md:text-3xl">
            <b>Fortalece</b> tus <b>bases de programación</b> mediante este
            software educativo como apoyo al área de fundamentos de
            programación.
          </p>
        </div>
      </div>

      {/* boton */}
      <div className="mt-5 md:mt-14  ">
        <ButtonRightNow text="Registrarse" bt={true} />
      </div>
    </section>
  );
};

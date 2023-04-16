import mainImage from "../../assets/main.png";
import { ButtonRightNow } from "../buttons/ButtonRightNow";

export const MainSection = () => {
  return (
    <section className="container mx-auto px-4 h-screen">
      <div className="md:flex md:flex-row-reverse md:gap-10">

        <div className="w-11/12 md:w-10/12 xl:w-6/12 xl:ml-52 mt-16 mx-auto">
          <img className="" src={mainImage} alt="Imagen principal" />
        </div>

        <div className="mt-14 gray-text font-semibold ">
          <h2 className="text-4xl leading-normal">
            ¡Crea horarios de <br />
            manera <br />
            Rápida y sencilla!
          </h2>
          <ul className="text-2xl ml-6 mt-10 list-disc">
            <li>Ahorra tiempo.</li>
            <li>¡Totalmente gratis!</li>
          </ul>
        </div>
      </div>

      <div className="mt-20 xl:mt-0">
        <ButtonRightNow />
      </div>
    </section>
  );
};

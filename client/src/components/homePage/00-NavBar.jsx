import { ButtonRightNow } from "../buttons/ButtonRightNow";
import { MdClear, MdSegment } from "react-icons/md";

export const NavBar = () => {
  return (
    <>
      <div className="container sm:mx-auto pb-3 px-5 flex mt-3 justify-center items-center space-between ">
        <div className="ml-2">
          <h1 className="text-3xl font-bold">
            <a href="#">APP</a>
          </h1>
        </div>

        <nav className="md:flex md:items-center">
          <ul className="hidden md:flex text-xl gap-6 items-center">
            <li>
              <a href="#advantages" className="link">
                Ventajas
              </a>
            </li>

            <li>
              <a href="#about-us" className="link">
                Sobre Nosotros
              </a>
            </li>

            <li>
              <ButtonRightNow text="Registrate" bt={true} />
            </li>

            <li>
              <ButtonRightNow text="Iniciar Seccion" bt={true} />
            </li>
          </ul>

          <div className="hidden md:flex">
            <ButtonRightNow />
          </div>

          <div className="md:hidden mr-2 text-5xl">
            <a href="">
              <MdSegment />
            </a>
          </div>
        </nav>
      </div>
      <hr />
    </>
  );
};

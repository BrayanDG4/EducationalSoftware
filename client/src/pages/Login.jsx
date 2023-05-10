import { FcGoogle } from "react-icons/fc";
import bubbles from "../assets/login/bubbles.svg";

export const Login = () => {
  return (
    // MAIN CONTAINER
    <section className="h-screen">
      {/* SUB CONTAINER */}
      <div className="h-screen md:flex">
        {/* LEFT CONTAINER */}
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
              <span className="font-bold">bases de programación</span> mediante
              este software educativo como apoyo al área de fundamentos de
              programación.
            </p>
          </div>
        </div>
        {/* RIGHT CONTAINER */}
        <div className="w-full h-screen flex justify-center items-center md:w-2/5 bg-white">
          <div className="w-10/12">
            <div className="text-center">
              <h1 className="my-title-color text-3xl font-bold">
                Software educativo
              </h1>
              <h3 className="my-gray-text text-xl">Texto descriptivo</h3>
            </div>

            <div className="my-4">
              <button className="flex justify-center text-lg shadow-md items-center gap-2 w-full border text-gray-700 py-2 rounded-md hover:bg-gray-100 transition-all">
                <FcGoogle className="text-4xl" />
                Iniciar sesión con Google
              </button>
            </div>

            <hr />

            <div className="mt-4">
              <form action="">
                <div className="mb-4">
                  <label
                    className="block my-gray-text text-lg font-semibold mb-2"
                    htmlFor=""
                  >
                    EMAIL
                  </label>
                  <input
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Ingresar correo electrónico"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block my-gray-text text-lg font-semibold mb-2"
                    htmlFor=""
                  >
                    CONTRASEÑA
                  </label>
                  <input
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Ingresar contraseña"
                  />
                </div>
              </form>
            </div>

            <div className="mb-6 md:mb-4">
              <div>
                <a className="font-semibold link-blue" href="">
                  ¿Olvidaste tú contraseña?
                </a>
              </div>

              <div>
                <span className="my-gray-text font-semibold">
                  ¿No tienes cuenta todavía?
                </span>{" "}
                <a className="font-semibold link-blue" href="">
                  ¡Registrate ahora!
                </a>
              </div>
            </div>

            <div>
              <button className="button-1 w-full" type="submit">
                Iniciar sesión
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

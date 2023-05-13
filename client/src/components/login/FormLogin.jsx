import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthStore } from "../../store/authStore.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const FormLogin = () => {
  const [user, setUser] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleSession = useAuthStore((state) => state.handleSession);

  useEffect(() => {
    handleSession;
  }, []);

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const logIn = useAuthStore((state) => state.logIn);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if everything is ok continue with the registration.
    try {
      //async function
      await logIn(user.userEmail, user.userPassword);
      //redirect to...
      //   navigate('');
    } catch (error) {
      console.log(error.code);
      setError(error.message);
    }
  };

  return (
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
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label
                className="block my-gray-text text-lg font-semibold mb-2"
                htmlFor="userEmail"
              >
                EMAIL
              </label>

              <input
                className="w-full px-3 py-3 border peer border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:invalid:border-red-500"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Ingresar correo electrónico"
                onChange={handleChange}
              />

              <p className="invisible peer-invalid:visible text-red-600 text-sm mb-1">
                Dirección no válida
              </p>
            </div>

            <div className="mb-1">
              <label
                className="block my-gray-text text-lg font-semibold mb-2"
                htmlFor="userPassword"
              >
                CONTRASEÑA
              </label>

              <input
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                name="userPassword"
                id="userPassword"
                placeholder="Ingresar contraseña"
                onChange={handleChange}
              />

              <p className="invisible peer-invalid:visible text-red-600 text-sm mb-1">
                Error generado
              </p>
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
          </form>
        </div>
      </div>
    </div>
  );
};

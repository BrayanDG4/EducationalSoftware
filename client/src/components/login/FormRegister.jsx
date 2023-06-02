import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthStore } from "../../store/authStore.js";
import { useDbStore } from "../../store/dbStore.js";
import { useNavigate } from "react-router-dom";

export const FormRegister = () => {
  const [user, setUser] = useState({
    username: "",
    userEmail: "",
    userPassword: "",
    passwordConfirmation: "",
  });

  const [error, setError] = useState();

  const [passwordConfirmation, setPasswordConfirmation] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const signUp = useAuthStore((state) => state.signUp);
  const save = useDbStore((state) => state.save);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordConfirmation(false);
    // if everything is ok continue with the registration.
    try {
      if (user.userPassword != user.passwordConfirmation) {
        return setPasswordConfirmation(true);
      }
      //async function
      await signUp(user.userEmail, user.userPassword);

      await save(
        {
          username: user.username,
          userEmail: user.userEmail,
        },
        console.log("enviado")
      );
      //redirect to...
      navigate('/login');
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center md:w-2/5 bg-white overflow-y-scroll">
      <div className="w-10/12 lg:h-screen">
        <div className="text-center my-6">
          <h1 className="my-title-color text-3xl font-bold">
            Software educativo
          </h1>
          <h3 className="my-gray-text text-xl">Texto descriptivo</h3>
        </div>

        <hr />

        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label
                className="block my-gray-text text-lg font-semibold mb-2"
                htmlFor="username"
              >
                Nombre de usuario:
              </label>

              <input
                className="w-full px-3 py-3 border peer border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text"
                name="username"
                id="username"
                placeholder="Ingresar nombre de usuario"
                onChange={handleChange}
              />

              <p className="invisible peer-invalid:visible text-red-600 text-sm mb-1">
                Error generado
              </p>
            </div>

            <div className="mb-1">
              <label
                className="block my-gray-text text-lg font-semibold mb-2"
                htmlFor="userEmail"
              >
                Correo electrónico
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
                Contraseña
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

            <div className="mb-1">
              <label
                className="block my-gray-text text-lg font-semibold mb-2"
                htmlFor="user-password-confirmation"
              >
                Confirmar contraseña
              </label>

              <input
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                placeholder="Confirmar contraseña"
                onChange={handleChange}
              />

              <p className="text-red-600 text-sm mb-1">
                {passwordConfirmation ? "No coinciden las contraseñas!" : ""}
              </p>
            </div>

            <div className="mb-6 md:mb-4">
              <div>
                <span className="my-gray-text font-semibold">
                  ¿Ya tienes cuenta?
                </span>{" "}
                <a className="font-semibold link-blue" href="/login">
                  ¡Iniciar sesión!
                </a>
              </div>
            </div>

            <div className="mb-4">
              <button className="button-1 w-full" type="submit">
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

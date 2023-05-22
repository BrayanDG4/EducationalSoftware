import { useState } from "react";
import { useAuthStore } from "../../store/authStore.js";

export const FormRecover = () => {
  const [user, setUser] = useState({
    userEmail: "",
  });

  const { resetPassword } = useAuthStore();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleResetPassword = async () => {
    if (!user.userEmail) return setError("Por favor ingresa tu correo.");

    try {
      await resetPassword(user.userEmail);
      setError("Hemos enviado un correo con un link para actualizar tu contraseña.")
    } catch (error) {
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
          <h3 className="my-gray-text text-xl">Recuperar contraseña</h3>
        </div>

        <hr />

        <div className="mt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
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

              <p className="text-red-600 text-sm mb-1">{error}</p>
            </div>

            <div>
              <button
                className="button-1 w-full"
                type="submit"
                onClick={handleResetPassword}
              >
                Enviar correo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

import { MdLogout } from "react-icons/md";
import { useAuthStore } from "../../store/authStore.js";

export const NavBar = () => {
  const { logOut } = useAuthStore();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
      <div className="container sm:mx-auto pb-3 px-5 flex mt-3 justify-center items-center space-between">
        <div className="ml-2">
          <h1 className="text-3xl font-bold">
            <a href="#">LOOPEDU</a>
          </h1>
        </div>

        <nav className="md:flex md:space-x-10 md:items-center">
          <ul className="hidden md:flex text-xl gap-10 items-center ">
            <li>
              <a href="/dashboard" className="link">
                Inicio
              </a>
            </li>
          </ul>

          <div>
            <button onClick={handleLogOut}>
              <MdLogout className="text-3xl hover:text-gray-300" />
            </button>
          </div>
        </nav>
      </div>
      <hr />
    </>
  );
};

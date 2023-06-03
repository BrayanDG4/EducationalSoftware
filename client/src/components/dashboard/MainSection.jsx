import dashboardImg from "../../assets/dashboard/dashboard-img.png";
import exerciseImg from "../../assets/dashboard/exercise-img.png";
import testImg from "../../assets/dashboard/test-img.png";
import theoric from "../../assets/dashboard/theoric.png";
import { EducationalMaterial } from "../dashboard/EducationalMaterial";
import { useAuthStore } from "../../store/authStore.js";

export const MainSection = () => {
  const { handleSession, loading, currentUser } = useAuthStore();

  handleSession();

  if (loading)
    return (
      <div className="h-screen bg-endsection">
        <div className="flex justify-center items-center">
          <h1 className="font-semibold text-4xl my-4 text-white">
            CARGANDO...
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <span class="loader"></span>
        </div>
      </div>
    );

  console.log("hola" + loading);

  return (
    <section className="bg-dashboard-section">
      <div className="p-4 md:flex md:p-4">
        <div>
          <h2 className="text-4xl my-title-color leading-snug font-bold md:text-4xl md:leading-normal md:mb-2">
            ¡Bienvenido {currentUser.displayName || currentUser.email}!
          </h2>
          <p className="pt-6 text-xl my-gray-text leading-normal md:text-2xl">
            Resuelve ejercicios para fortalecer tus bases en fundamentos de
            programación.
          </p>

          <div>
            <h3 className="text-4xl my-title-color font-bold md:text-4xl md:mb-2 pt-6">
              ¡Aprende ahora!
            </h3>
            {/* CARD */}
            <div className="md:flex md:gap-2">
              <a href="/dashboard/workarea">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 w-[100%] h-[100%]">
                  <div className="flex justify-center my-2">
                    <img
                      className="w-40 object-cover"
                      src={theoric}
                      alt="EJERCICIOS"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="my-title-color m-auto text-xl font-semibold">
                      TEORÍA
                    </h2>
                  </div>
                </div>
              </a>

              <a href="/dashboard/exercises">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 w-[100%] h-[100%]">
                  <div className="flex justify-center my-2">
                    <img
                      className="w-40 object-cover"
                      src={exerciseImg}
                      alt="EJERCICIOS"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="my-title-color m-auto text-xl font-semibold">
                      EJERCICIOS
                    </h2>
                  </div>
                </div>
              </a>

              <a href="">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 w-[100%] h-[100%]">
                  <div className="flex justify-center my-2">
                    <img className="w-44" src={testImg} alt="EVALUACIONES" />
                  </div>
                  <div className="text-center">
                    <h2 className="my-title-color text-xl font-semibold">
                      EVALUACIONES
                    </h2>
                  </div>
                </div>
              </a>
            </div>
            {/*END CARD */}
          </div>
        </div>

        <div className="hidden md:block w-[40%] 2xl:w-[20%]">
          <img
            className="mx-auto object-cover"
            src={dashboardImg}
            alt="Imagen principal"
          />
        </div>
      </div>

      <div className="p-4 md:flex md:p-4 md:mt-6">
        <EducationalMaterial />
      </div>
    </section>
  );
};

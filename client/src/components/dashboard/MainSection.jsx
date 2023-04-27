import dashboardImg from "../../assets/dashboard/dashboard-img.png";
import exerciseImg from "../../assets/dashboard/exercise-img.png";
import testImg from "../../assets/dashboard/test-img.png";

export const MainSection = () => {
  return (
    <section className="bg-dashboard-section">
      <div className="p-4 md:flex md:p-4">
        <div>
          <h2 className="text-4xl mycolor leading-snug font-bold md:text-5xl md:leading-normal md:mb-7">
            ¡Bienvenido @Nombre de usuario!
          </h2>
          <p className="pt-6 text-xl my-gray-text leading-normal md:text-3xl">
            Resuelve ejercicios para fortalecer tus bases en fundamentos de
            programación.
          </p>

          <div>
            <h3 className="text-4xl my-title-color font-bold md:text-5xl md:mb-2 pt-6">
              ¡Aprende ahora!
            </h3>
            {/* CARD */}
            <div className="md:flex md:gap-2">
              <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 mx-2">
                <div className="flex justify-center my-2">
                  <img className="w-40 object-cover" src={exerciseImg} alt="EJERCICIOS" />
                </div>
                <div>
                  <h2 class="my-title-color text-xl font-semibold text-center">
                    EJERCICIOS
                  </h2>
                </div>
              </div>

              <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4 mx-2">
                <div className="flex justify-center my-2">
                  <img className="w-44 object-cover" src={testImg} alt="EJERCICIOS" />
                </div>
                <div>
                  <h2 class="my-title-color text-xl font-semibold text-center">
                    EVALUACIONES
                  </h2>
                </div>
              </div>
            </div>
            {/*END CARD */}
          </div>
        </div>

        <div>
          <img className="w-10/12 object-cover mx-auto" src={dashboardImg} alt="Imagen principal" />
        </div>

      </div>

      

    </section>
  );
};

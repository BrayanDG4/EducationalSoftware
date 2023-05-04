export const EducationalMaterial = () => {
  return (
    <div>
          <h2 className="text-4xl mycolor leading-snug font-bold md:text-4xl md:leading-normal md:mb-2">
            Material educativo
          </h2>
          <p className="pt-6 text-xl my-gray-text leading-normal md:text-2xl">
            Disfruta de nuestro material educativo.
          </p>

          <div>
            <h3 className="text-4xl my-title-color font-bold md:text-4xl md:mb-2 pt-6">
              Videos
            </h3>
            {/* CARD */}
            <div className="md:flex md:gap-2">
              <a href="">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4">
                  <div className="flex justify-center my-2">
                    <img className="w-40 object-cover" alt="" />
                  </div>
                  <div>
                    <h2 className="my-title-color text-xl font-semibold text-center">
                      EJERCICIOS
                    </h2>
                  </div>
                </div>
              </a>
              
              <a href="">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4">
                  <div className="flex justify-center my-2">
                    <img className="w-44 object-cover" alt="" />
                  </div>
                  <div>
                    <h2 className="my-title-color text-xl font-semibold text-center">
                      EVALUACIONES
                    </h2>
                  </div>
                </div>
              </a>
              
            </div>
            {/*END CARD */}
          </div>
        </div>
  )
}
import img1 from "../../assets/Imgsdvantages/ImgAdvantage1.svg";
import img2 from "../../assets/Imgsdvantages/ImgAdvantage2.svg";
import img3 from "../../assets/Imgsdvantages/ImgAdvantage3.svg";

import img4 from "../../assets/Imgsdvantages/ImgAdvantage4.svg";

export const BasicCard = () => {
  return (
    <div className="container mx-auto py-8 ">
      <div className="mycolor2 grid grid-cols-1 md:grid-cols-2 md:gap-12 mx-5">
        <div className="card">
          <img src={img1} className="super" />

          <div className="">
            <h3 className="card-tittle">ejercitación</h3>
            <p className="card-description">
              Aprende fundamentos de programación mediante ejercicios prácticos.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={img2} className="super" />

          <div className="">
            <h3 className="card-tittle">material educativo</h3>
            <p className="card-description">
              Encuentra material educativo personalizado y de calidad acorde a
              tus conocimientos.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={img3} className="super" />
          <div className="">
            <h3 className="card-tittle">retroalimentacion</h3>
            <p className="card-description">
              Obtén retroalimentación inmediata y mide tu progreso en cada tema.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={img4} className="super" />
          <div className="">
            <h3 className="card-tittle">personalizacion</h3>
            <p className="card-description">
              ¡Personaliza los horarios a tu gusto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

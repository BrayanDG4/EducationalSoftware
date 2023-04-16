export const BasicCard = () => {
    return (
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 mx-2">
          <div className="card">
            <div className="">
              <h3 className="card-tittle">
                Ahorro de tiempo
              </h3>
              <p className="card-description">
                No gastes tiempo planificando horarios de manera compleja.
              </p>
            </div>
          </div>
  
          <div className="card">
            <div className="">
              <h3 className="card-tittle">
                Exportar fácil
              </h3>
              <p className="card-description">
                Una vez realices tus horarios puedes exportarlos a formato PDF de manera sencilla.
              </p>
            </div>
          </div>
  
          <div className="card">
            <div className="">
              <h3 className="card-tittle">
                Accesibilidad
              </h3>
              <p className="card-description">
                Accede en cualquier momento a tus horarios.
              </p>
            </div>
          </div>
  
          <div className="card">
            <div className="">
              <h3 className="card-tittle">
                Personalización
              </h3>
              <p className="card-description">
                ¡Personaliza los horarios a tu gusto!
              </p>
            </div>
          </div>
          
        </div>
      </div>
    );
  };
  
import SimpleAccordion from "./components/acordeon";



export const AreaLeft = () => {

  return (

    <div className=" md:w-2/5  ">

      {/* contiene modulos y barra de buusqueda*/}
      <div className="h-full p-1 bg-section2">


        {/* contiene los modulos */}
        <div className="h-full overflow-y-scroll">
          
          <SimpleAccordion/>

        </div>

        
      </div>
    </div>
  );
};

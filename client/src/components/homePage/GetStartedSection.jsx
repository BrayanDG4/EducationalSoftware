import { ButtonRightNow } from "../buttons/ButtonRightNow";

export const GetStartedSection = () => {
  return (
    <section className="mt-2 bg-endsection">
      <div className="container mx-auto py-20">
        <h3 className="text-white text-3xl text-center font-bold uppercase mb-8">
        ¡COMIENZA A PRÁCTICAR AHORA!
        </h3>
        <div className="flex justify-center">
          <ButtonRightNow  text='¡Comenzar!' bt={false}/>
        </div>
      </div>
    </section>
  );
};

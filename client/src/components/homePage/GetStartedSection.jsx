import { ButtonRightNow } from "../buttons/ButtonRightNow";

export const GetStartedSection = () => {
  return (
    <section className="mt-2 green-option-1">
      <div className="container mx-auto py-20">
        <h3 className="text-white text-3xl text-center font-bold uppercase mb-8">
          ¡Comienza ya a crear tus horarios!
        </h3>
        <div className="flex justify-center">
          <ButtonRightNow />
        </div>
      </div>
    </section>
  );
};

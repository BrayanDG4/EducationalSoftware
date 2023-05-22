import { FormRecover } from "../components/login/FormRecover";
import { Infographic } from "../components/login/Infographic";

export const RecoverPassword = () => {
  return (
    // MAIN CONTAINER
    <section className="h-screen">
      {/* SUB CONTAINER */}
      <div className="h-screen md:flex">
        {/* LEFT CONTAINER */}
        <Infographic />
        {/* RIGHT CONTAINER */}
        <FormRecover />
      </div>
    </section>
  );
};

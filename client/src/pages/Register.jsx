import { FormRegister } from "../components/login/FormRegister";
import { Infographic } from "../components/login/Infographic";

export const Register = () => {
  return (
    // MAIN CONTAINER
    <section className="h-screen">
      {/* SUB CONTAINER */}
      <div className="h-screen md:flex">
        {/* LEFT CONTAINER */}
        <Infographic/>
        {/* RIGHT CONTAINER */}
        <FormRegister/>
      </div>
    </section>
  );
};

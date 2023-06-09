import { Infographic } from "../components/login/Infographic";
import { FormLogin } from '../components/login/FormLogin'

export const Login = () => {
  return (
    // MAIN CONTAINER
    <section className="h-screen">
      {/* SUB CONTAINER */}
      <div className="h-screen md:flex">
        {/* LEFT CONTAINER */}
        <Infographic/>
        {/* RIGHT CONTAINER */}
        <FormLogin/>
      </div>
    </section>
  );
};

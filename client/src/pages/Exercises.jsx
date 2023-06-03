import { NavBar } from "../components/dashboard/NavBar";
import Exercise1 from "../components/exercise/Exercise1";
import Exercise2 from "../components/exercise/Exercise2";
import Exercise3 from "../components/exercise/Exercise3";
import Exercise4 from "../components/exercise/Exercise4";
import Exercise5 from "../components/exercise/Exercise5";

export function Exercises() {
  return (
    // MAIN CONTAINER
    <section className="h-screen">
      <div className="h-[10vh]">
        <NavBar />
      </div>

      {/* SUB CONTAINER */}
      <div className="h-[90vh] md:flex">
        {/*  CONTAINER */}
        <Exercise1 />
        <Exercise2 />
        <Exercise3 />
        <Exercise4 />
        <Exercise5 />

      </div>
    </section>
  );
}

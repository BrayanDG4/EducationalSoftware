import { useState } from "react";
import { NavBar } from "../components/dashboard/NavBar";
import Exercise1 from "../components/exercise/Exercise1";
import Exercise2 from "../components/exercise/Exercise2";
import Exercise3 from "../components/exercise/Exercise3";
import Exercise4 from "../components/exercise/Exercise4";
import Exercise5 from "../components/exercise/Exercise5";
import { useExerciseStore } from "../store/exerciseStore.js";
import { Pies } from "../components/graphics/PiesChart";

export function Exercises() {
  const { count } = useExerciseStore();

  const total = parseInt(count);
  return (
    // MAIN CONTAINER
    <section className="h-screen">
      <div className="h-[10vh]">
        <NavBar />
      </div>

      {/* SUB CONTAINER */}
      <div className="w-full md:flex gap-6">
        {/*  CONTAINER */}
        <div className="w-[50%] ">
          <h1 className="text-3xl font-semibold text-center mb-4">
            ¡Ponte a prueba!
          </h1>
          <Exercise1 />
          <Exercise2 />
          <Exercise3 />
          <Exercise4 />
          <Exercise5 />
        </div>

        <div className="w-[50%] bg-slate-200 rounded-lg flex justify-center">
          <div className="my-6">
            <h3 className="text-xl font-semibold">Opciones correctas: </h3>
            <h3 className="my-2">{count || "0!"}</h3>
            <div className="w-full bg-white rounded-lg p-12">
              <Pies count={total} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

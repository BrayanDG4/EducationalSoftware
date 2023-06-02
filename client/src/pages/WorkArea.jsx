import { NavArea } from "../components/workarea/NavArea";

import { AreaLeft } from "../components/workarea/AreaLeft";

import {AreaRight} from "../components/workarea/AreaRight";

export const WorkArea = () => {
  return (
    // MAIN CONTAINER
    <section className="h-screen">
      <div className="h-[10vh]">
        <NavArea/>
      </div>
      
      {/* SUB CONTAINER */}
      <div className="h-[90vh] md:flex">
        
        {/* LEFT CONTAINER */}
        <AreaLeft />

        {/* RIGHT CONTAINER */}
        <AreaRight />
      </div>
      
    </section>
  );
};

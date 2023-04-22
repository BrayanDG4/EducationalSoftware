import React from "react";

import { NavBar } from "../components/homePage/00-NavBar";
import { MainSection } from "../components/homePage/01-MainSection";
import { MainSection2 } from "../components/homePage/02-MainSetion2";

import { AdvantageSection } from "../components/homePage/03-AdvantageSection";

import { GetStartedSection } from "../components/homePage/GetStartedSection";


export const HomePage = () => {
  return (
    <>
      <NavBar />
      <MainSection />
      <MainSection2 />
      <AdvantageSection />
      <GetStartedSection />
    </>
  );
};

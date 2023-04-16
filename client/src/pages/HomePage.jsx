import React from 'react'
import {NavBar} from '../components/homePage/NavBar';
import {MainSection} from '../components/homePage/MainSection';
import {AdvantageSection} from '../components/homePage/AdvantageSection';
import {GetStartedSection} from '../components/homePage/GetStartedSection'

export const HomePage = () => {
  return (
    <>
      <NavBar/>
      <MainSection/>
      <AdvantageSection/>
      <GetStartedSection/>
    </>
  )
}

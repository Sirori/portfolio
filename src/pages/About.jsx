import { useState } from "react";
import Spinner from "./../components/Spinner";
import AboutMain from "../components/about/AboutMain";
import Education from "../components/about/Education";
import Skills from '../components/about/Skills';


function About(){
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <AboutMain />
      <Education />
      <Skills />
    </>
  );
}

export default About;
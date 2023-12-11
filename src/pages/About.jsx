import Spinner from "./../components/Spinner";
import { useState } from "react";

function About(){
  const [isLoading, setIsLoading] = useState(true);
  return(
    <section className="w-screen h-screen bg-sky-200">
      This is About page
    </section>
  );
}

export default About;
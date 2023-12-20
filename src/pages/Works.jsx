import Spinner from "./../components/Spinner";
import { useState } from "react";
import Projects from '../components/works/Projects';
import Photoshop from '../components/works/Photoshop';

function Works(){
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative">
      <Projects />
      <Photoshop />
    </div>
  )
}

export default Works;
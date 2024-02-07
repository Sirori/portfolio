import { Helmet } from "react-helmet-async";
import Spinner from "./../components/Spinner";
import { useState } from "react";
import Projects from '../components/works/Projects';
import Photoshop from '../components/works/Photoshop';

function Works(){
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Helmet>
				<title>양시연 포트폴리오 works</title>
				<meta property="title" content="포트폴리오 works 페이지" />
				<meta
					name="description"
					content="양시연 2024 프론트엔드/웹 퍼블리셔 포트폴리오"
				/>
				<meta property="og:title" content="양시연 2024 포트폴리오" />
				<meta property="og:description" content="양시연 2024 프론트엔드/웹 퍼블리셔 포트폴리오" />
				<meta
					property="og:url"
					content=""
				/>
			</Helmet>
      <div className="relative">
        <Projects />
        <Photoshop />
      </div>
    </>
  )
}

export default Works;
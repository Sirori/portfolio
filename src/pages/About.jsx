import { Helmet } from "react-helmet-async";
import AboutMain from "../components/about/AboutMain";
import Education from "../components/about/Education";
import Skills from '../components/about/Skills';


function About(){
  return (
    <>
      <Helmet>
				<title>양시연 포트폴리오 works</title>
				<meta property="title" content="포트폴리오 about 페이지" />
				<meta
					name="description"
					content="양시연 2024 프론트엔드/웹 퍼블리셔 포트폴리오"
				/>
				<meta property="og:title" content="양시연 2024 포트폴리오" />
				<meta property="og:description" content="양시연 2024 프론트엔드/웹 퍼블리셔 포트폴리오" />
				<meta
					property="og:url"
					content="https://sirori.netlify.app/#/about"
				/>
			</Helmet>
      <AboutMain />
      <Education />
      <Skills />
    </>
  );
}

export default About;
import { Helmet } from "react-helmet-async";
import Main from "./../components/home/Main"
import Features from "./../components/home/Features"
import HorizonContents from '../components/home/HorizonContents';
import WhoAmI from '../components/home/WhoAmI';

function Home() {
  return(
    <>
      <Helmet>
				<title>양시연 2024 프론트엔드/웹 퍼블리셔 포트폴리오</title>
				<meta property="title" content="포트폴리오 메인페이지" />
				<meta
					name="description"
					content="양시연 2024 프론트엔드/웹 퍼블리셔 포트폴리오"
				/>
				<meta property="og:title" content="양시연 2024 포트폴리오" />
				<meta property="og:description" content="양시연 2024 프론트엔드/웹 퍼블리셔 포트폴리오" />
				<meta
					property="og:url"
					content="https://sirori.netlify.app/#/"
				/>
			</Helmet>
      <Main/ >
      <Features />
      <HorizonContents />
      <WhoAmI />
    </>
  )
}

export default Home;
import S from "./../styles/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const handleMailClick = () => {
    window.location.href = "mailto:이메일주소";
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

	return (
		<header className={S.header}>
      <nav className="text-lg">
        <ul>
          <li className={`${S.hoverCircle} fixed top-[4%] left-[3%] px-[0.5%] z-10`}>
            <Link to="about" onClick={scrollToTop}>
              ABOUT
            </Link>
          </li>
          <li className="fixed top-[3%] left-1/2 -translate-x-1/2 z-50">
            <Link to="/" onClick={scrollToTop}>
              <h1 className={S.logo}>
                <span className={S.logoText}>home</span>
              </h1>
            </Link>
          </li>
          <li className={`${S.hoverCircle} fixed top-[4%] right-[3%] px-[0.5%] z-10`}>
            <Link to="works" onClick={scrollToTop}>
              WORKS
            </Link>
          </li>
          <li className={`fixed z-10 bottom-[4%] left-[3%]`}>
            <Link to="#" className={S.underlineLink} onClick={handleMailClick}>
              tldus7519@naver.com
            </Link>
          </li>
          <li className={`fixed z-10 bottom-[4%] right-[3%]`}>
            <Link to="https://github.com/Sirori" target="_blank" className={S.underlineLink}>
              Github
            </Link>
          </li>
        </ul>
      </nav>
      
		</header>
	);
}

export default Header;

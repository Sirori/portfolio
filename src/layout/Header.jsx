import S from "./../styles/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const handleMailClick = () => {
    window.location.href = "mailto:이메일주소";
  };

	return (
		<header className={S.header}>
      <nav className="text-lg">
        <ul>
          <li className={`${S.hoverCircle} fixed top-[4%] left-[3%] px-[0.5%]`}>
            <Link to="about">
              ABOUT
            </Link>
          </li>
          <li className={`${S.hoverCircle} fixed top-[4%] right-[3%] px-[0.5%]`}>
            <Link to="works">
              WORKS
            </Link>
          </li>
          <li className={`fixed bottom-[4%] left-[3%]`}>
            <Link to="#" className={S.underlineLink} onClick={handleMailClick}>
              tldus7519@naver.com
            </Link>
          </li>
          <li className={`fixed bottom-[4%] right-[3%]`}>
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

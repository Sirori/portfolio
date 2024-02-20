import S from "./../styles/Footer.module.css";
import { Link } from "react-router-dom";

import mailIcon from "/assets/icon/mailIcon.svg"
import phoneIcon from "/assets/icon/phoneIcon.svg"

function Footer() {
	const handleMailClick = () => {
    window.location.href = "mailto:이메일주소";
  };
	function handlePhoneClick() {
		const phoneNumber = '010-8704-7519';
		window.location.href = `tel:${phoneNumber}`;
	}

	return (
		<footer className="bg-black w-full h-screen text-center text-white py-[10%] flex flex-col overflow-hidden">
      <p className="text-[6.5rem] mb-[6%] font-ogg">
				Contact me !
			</p>
			<span className={S.here}>
				here
			</span>
			<span className={S.arrow}>
				&#62; &#62;
			</span>
			<ul className={S.contact}>
				<li className="flex flex-row gap-4 text-[2rem]">
					<img src={mailIcon} alt="이메일" className="w-auto h-full" />
					<Link to="#" onClick={handleMailClick}>
						tldus7519@naver.com
					</Link>
				</li>
				<li className="flex flex-row gap-4 text-[2rem]">
					<img src={phoneIcon} alt="전화번호" className="w-auto h-full" />
					<Link to="#" onClick={handlePhoneClick}>
						010-8704-7519
					</Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;

import S from "./../styles/Footer.module.css";
import { Link } from "react-router-dom";

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
      <p className="text-[6rem] mb-[5%]">
				Contact me !
			</p>
			<span className="text-[1.75rem] mb-[1%]">
				here
			</span>
			<span className="rotate-90 mb-[8%]">
				&#62; &#62;
			</span>
			<ul className={S.contact}>
				<li>
					<Link to="#" onClick={handleMailClick}>
						tldus7519@naver.com
					</Link>
				</li>
				<li>
					<Link to="#" onClick={handlePhoneClick}>
						010-8704-7519
					</Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;

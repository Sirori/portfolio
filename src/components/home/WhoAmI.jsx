import S from "./HomeBtm.module.css"
import whoImage from "./../../assets/image/whoAmI.webp"
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function WhoAmI() {
  const { ref: pageRef, inView: pageIsVisible } = useInView();
  return (
    <section className={`whoAmI ${S.whoBox}`}>
      <div className={`${S.whoTextBox}`}>
        <h2 ref={pageRef} className={`${S.whoTitle} ${
            pageIsVisible ? S.titleAni : ""
          }`}>
          WHO am I?
        </h2>
        <div ref={pageRef} className={`${S.contentBox} ${
            pageIsVisible ? S.contentAni : ""
          }`}>
          <Link to="about" className={`${S.whoMore}`}>
            see more &#62; &#62;
          </Link>
          <p className={`${S.whoContent}`}>
            더 발전하는 나를 꿈꾸며 이를 위해 노력을 하는 사람이 되겠습니다.
            <br />
            이상만으로 멈추는 것이 아니라, 항상 실천하고 발전하는 모습으로 증명하겠습니다.
          </p>
        </div>
      </div>
      <div ref={pageRef} className={`${S.whoImgBox} ${
            pageIsVisible ? S.imgAni : ""
          }`}>
        <img src={whoImage} alt="양시연" className="w-full h-auto" />
      </div>
    </section>
  )
}

export default WhoAmI;
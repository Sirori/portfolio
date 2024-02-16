import S from "./About.module.css"
import { useInView } from "react-intersection-observer";
import html from "/assets/icon/html.svg"
import css from "/assets/icon/css.svg"
import js from "/assets/icon/js.svg"
import xd from "/assets/icon/xd.svg"
import figma from "/assets/icon/figma.svg"
import jquery from "/assets/icon/jquery.svg"
import react from "/assets/icon/react.svg"

function Skills(){
  const { ref: pageRef, inView: pageIsVisible } = useInView();
  return (
    <section className={S.skills}>
      <h3 ref={pageRef}
      className={`${S.skillsTitle} ${
        pageIsVisible ? S.educationTitleAni : ""
      }`}>Skills</h3>
      <span aria-hidden ref={pageRef}
      className={`${
        pageIsVisible ? S.circleLg : ""
      }`}></span>
      <ul className={S.skillsList}>
        <li ref={pageRef}
        className={`${S.skillsItem} ${
          pageIsVisible ? S.skillsItemAni1 : ""
        }`}>
          <div className={S.imgBox}>
            <img src={html} alt="html 로고" />
          </div>
          <p>
          웹 표준, 접근성을 준수하며
          <br />
          반응형 레이아웃 제작이 가능합니다.
          </p>
        </li>
        <li ref={pageRef}
        className={`${S.skillsItem} ${
          pageIsVisible ? S.skillsItemAni2 : ""
        }`}>
          <div className={S.imgBox}>
            <img src={css} alt="css 로고" />
          </div>
          <p>
          css, sass, tailwind, module.css
          <br />
          사용 경험이 있으며 스타일링을 할 수 있습니다.
          </p>
        </li>
        <li ref={pageRef}
        className={`${S.skillsItem} ${
          pageIsVisible ? S.skillsItemAni3 : ""
        }`}>
          <div className={S.imgBox}>
            <img src={js} alt="javascript 로고" />
          </div>
          <p>
          동적인 이벤트들과 기본적인 문법들을
          <br />
          공부하여 다양하게 활용할 수 있습니다.
          </p>
        </li>
        <li ref={pageRef}
        className={`${S.skillsItem} ${
          pageIsVisible ? S.skillsItemAni4 : ""
        }`}>
          <div className={S.figmaBox}>
            <img src={xd} alt="" />
            <img src={figma} alt="figma 로고" />
          </div>
          <p>
          기본적인 툴 사용법을 알고있으며, 
          <br />
          요소들을 component로 나누어 
          <br />
          활용할 수 있습니다.
          </p>
        </li>
        <li ref={pageRef}
        className={`${S.skillsItem} ${
          pageIsVisible ? S.skillsItemAni5 : ""
        }`}>
          <div className={S.imgBox}>
          <img src={jquery} alt="jQuery 로고" />
          </div>
          <p>
          swiper나 slick 등 일부 라이브러리를
          <br />
          사용한 경험이 있습니다.
          </p>
        </li>
        <li ref={pageRef}
        className={`${S.skillsItem} ${
          pageIsVisible ? S.skillsItemAni6 : ""
        }`}>
          <div className={S.imgBox}>
            <img src={react} alt="react 로고" />
          </div>
          <p>
          다양한 플러그인을 사용한 경험이 있으며, 
          <br />
          컴포넌트 분리를 하여 프로젝트를
          <br />
          진행하였습니다.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
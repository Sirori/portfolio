import S from "./About.module.css"
import { useInView } from "react-intersection-observer";
import likeLion from "./../../assets/image/likeLion.webp"
import ezen from "./../../assets/image/ezen.webp"

function Education(){
  const { ref: pageRef, inView: pageIsVisible } = useInView();
  return (
    <section className={S.education}>
      <h3 ref={pageRef}
      className={`${S.educationTitle} ${
        pageIsVisible ? S.educationTitleAni : ""
      }`}>Education</h3>
      <ul className={S.eduList}>
        <li ref={pageRef}
        className={`${
          pageIsVisible ? S.eduItemAni1 : ""
        }`}>
          <p>2014. 03 - 2021. 02 대원여자고등학교 음악중점반 입학 및 졸업</p>
        </li>
        <li ref={pageRef}
        className={`${
          pageIsVisible ? S.eduItemAni2 : ""
        }`}>
          <p>2017. 03 - 2021. 02 성신여자대학교 기악과(피아노 전공) 입학 및 졸업</p>
        </li>
        <li ref={pageRef}
        className={`${
          pageIsVisible ? S.eduItemAni3 : ""
        }`}>
          <p>2022. 08 - 2022. 11 이젠컴퓨터아카데미 모바일웹 UX/UI & 프론트엔드 과정 수강</p>
        </li>
        <li ref={pageRef}
        className={`${
          pageIsVisible ? S.eduItemAni4 : ""
        }`}>
          <p>2022. 05 - 2022. 09 멋쟁이 사자처럼 프론트엔드 스쿨 6기 수료</p>
        </li>
      </ul>
      <div ref={pageRef} className={S.eduImgBox}>
        <div className={`${S.ezenImg} ${
            pageIsVisible ? S.ezenImgAni : ""
          }`}>
          <img src={ezen} alt="이젠 컴퓨터 아카데미" />
        </div>
        <div ref={pageRef} className={`${S.likeLionImg} ${
            pageIsVisible ? S.ezenImgAni : ""
          }`}>
          <img src={likeLion} alt="멋쟁이 사자처럼" />
        </div>
        <span aria-hidden ref={pageRef}
          className={`${
            pageIsVisible ? S.circleSm : ""
          }`}></span>
      </div>
    </section>
  );
}

export default Education;
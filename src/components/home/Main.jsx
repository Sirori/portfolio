import React, { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import S from "./Home.module.css"
import mainImage from "/assets/image/mainImg.png"

function Main() {
  const { ref: pageRef, inView: pageIsVisible /* entry */ } = useInView();
  return(
    <>
      <main className={S.main}>
        <div className={S.mainImgBox}>
          <img src={mainImage} alt="" ref={pageRef}
          className={`${S.mainImg} ${
            pageIsVisible ? S.slideUp : ""
          }`} />
        </div>
        <div className={S.mainTxtBox}>
          <p>
            <span ref={pageRef}
            className={`${S.mainTxt} ${
              pageIsVisible ? S.mainTxtAni : ""
            }`}>
              Yang Siyeon
            </span>
            <span ref={pageRef}
              className={`${S.mainTxt} ${
                pageIsVisible ? S.mainTxtAni2 : ""
            }`}>
              Portfolio
            </span>
            <span ref={pageRef}
              className={`${S.mainTxt} ${
                pageIsVisible ? S.mainTxtAni3 : ""
            }`}>
              2024
            </span>
          </p>
        </div>
      </main>
    </>
  )
}

export default Main;
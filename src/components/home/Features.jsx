import React, { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import S from "./Home.module.css"

function Features() {
  const { ref: pageRef, inView: pageIsVisible} = useInView();
  return(
    <>
      <section className="p-[10%] relative select-none h-screen text-center">
        <p className={S.creative}>
          <span ref={pageRef}
          className={`block opacity-0 ${
            pageIsVisible ? S.mainTxtAni : ""
          }`}>Creative,</span>
          <span ref={pageRef}
          className={`block opacity-0 ${
            pageIsVisible ? S.mainTxtAni2 : ""
          }`}>Responsible,</span>
          <span ref={pageRef}
          className={`block opacity-0 ${
            pageIsVisible ? S.mainTxtAni3 : ""
          }`}>and Cooperative</span>
        </p>
        <span aria-hidden ref={pageRef}
          className={`${S.circleSm} ${
            pageIsVisible ? S.circleSmAni : ""
          }`}></span>
        <span aria-hidden ref={pageRef}
          className={`${S.circleLg} ${
            pageIsVisible ? S.circleLgAni : ""
          }`}></span>
      </section>
    </>
  )
}

export default Features;
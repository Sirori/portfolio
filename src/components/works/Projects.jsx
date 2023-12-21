import S from "./Works.module.css"
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import karlyMain from "./../../assets/image/karlyMain.png"
import taingMain from "./../../assets/image/taingMain.png"
import gimpoMain from "./../../assets/image/gimpoMain.png"
import netspaMain from "./../../assets/image/netspaMain.png"
import jinheungMain from "./../../assets/image/jinheungMain.png"

function Projects() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.update();
    }
  }, []);
  return (
    <section className={S.projects}>
      <h2 className={S.worksTitle}>Works</h2>
      <div className={S.projectContainer}>
        <h3 className={S.projectTitle}>Projects</h3>
        <Swiper 
        className={S.swiper}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 200,
          depth: 0,
          modifier: 5,
          slideShadows : false,
        }}
        slideToClickedSlide={false}
        navigation={{
          prevEl: ".swiper-button-next",
          nextEl: ".swiper-button-prev",
        }}
        modules={[Navigation, EffectCoverflow]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide className={S.swiperItem}>
            <Link className={`swiperLink ${S.swiperLink}`}>
              <img className={S.swiperImg} src={karlyMain} alt="마켓컬리 클론코딩" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={S.swiperItem}>
            <Link className={`swiperLink ${S.swiperLink}`}>
              <img className={S.swiperImg} src={gimpoMain} alt="김포밝은안과 클론코딩" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={S.swiperItem}>
            <Link className={`swiperLink ${S.swiperLink}`}>
              <img className={S.swiperImg} src={taingMain} alt="티빙 클론코딩" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={S.swiperItem}>
            <Link className={`swiperLink ${S.swiperLink}`}>
              <img className={S.swiperImg} src={jinheungMain} alt="진흥기업 리팩토링" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className={S.swiperItem}>
            <Link className={`swiperLink ${S.swiperLink}`}>
              <img className={S.swiperImg} src={netspaMain} alt="넷스파 클론코딩" />
            </Link>
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  )
}

export default Projects;
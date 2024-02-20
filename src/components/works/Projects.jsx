import S from "./Works.module.css";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import pb from "./../../api/pocketbase";
import { getPbImageURL } from "./../../hooks/getPbImageURL";
import FeatureBlock from "./../common/FeatureBlock";
import SwiperButton from "../common/SwiperButton";

function Projects() {
  const [contents, setContents] = useState([]);
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);
  const { id } = useParams();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setStatus('loading');

    Promise.all([pb.collection('project').getFullList()])
      .then(([project]) => {
        setContents([{ title: '프로젝트', data: project }]);
        setStatus('success');
      })
      .catch((error) => {
        setError(error);
        setStatus('error');
      });
  }, [id]);

  return (
    <section className={`projects ${S.projects}`}>
      <h2 className={S.worksTitle}>Works</h2>
      <div className={`projectContainer ${S.projectContainer}`}>
        <h3 className={S.projectTitle}>Projects</h3>
        {contents.length === 0 ? (
          <Spinner />
        ) : (
          <Swiper
            // Swiper 옵션을 아래와 같이 설정하세요.
            loop
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
              keyboard: true,
              onlyInViewport: false,
            }}
            modules={[Navigation, Pagination]}
            className={`mySwiper ${S.swiper}`}
            pagination={{ clickable: true }}
          >
            {contents?.map((contentCategory) =>
              contentCategory.data?.map((item) => (
                <>
                  <SwiperSlide
                    key={item.id}
                    className={`projectItem ${S.projectItem}`}
                  >
                    <Link
                      to={`/detail/${item.id}`}
                      className={`projectLink ${S.projectLink}`}
                    >
                      <div className={S.projectImg}>
                        <img
                          className={S.swiperImg}
                          src={getPbImageURL(item, "mainImage")}
                          alt={`${item.title} 클론코딩`}
                        />
                      </div>
                      <div className={S.txtContainer}>
                        <h4 className={S.itemTitle}>{item.title}</h4>
                        <div className={S.blockBox}>
                          <FeatureBlock content={item.block.split(", ")[0]} />
                          <FeatureBlock content={item.block.split(", ")[1]} />
                          <FeatureBlock content={item.block.split(", ")[2]} />
                        </div>
                        <p className={S.itemDesc}>
                          {item.simpleDesc.includes("br")
                            ? item.simpleDesc.split("br").map((desc, index) => (
                                <React.Fragment key={index}>
                                  {desc}
                                  <br />
                                </React.Fragment>
                              ))
                            : item.simpleDesc}
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                </>
              ))
            )}
            <SwiperButton className="swiper-button-prev" ref={prevRef} />
            <SwiperButton className="swiper-button-next" ref={nextRef} />
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default Projects;

function Spinner() {
  return (
    <figure className="grid place-content-center h-[25vh]">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: "auto", display: "block" }}
        width="44"
        height="44"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx={50}
          cy={50}
          fill="none"
          stroke="#dfdfdf"
          strokeWidth={10}
          r={25}
          strokeDasharray="117.80972450961724 41.269908169872416"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="7.692307692307692s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>

      <figcaption className="text-center text-slate-400">
        데이터 로딩 중...
      </figcaption>
    </figure>
  );
}

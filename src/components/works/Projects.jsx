import S from "./Works.module.css"
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
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);
  const { id } = useParams();
  const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
	const nextRef = useRef(null);

	useEffect(() => {
		setStatus("loading");

		Promise.all([
			pb.collection("project").getFullList(),
		])
			.then(([project]) => {
				setContents([
					{ title: "프로젝트", data: project }
				]);
				setStatus("success");
			})
			.catch((error) => {
				setError(error);
				setStatus("error");
			});
	}, [id]);

  const handleSlideChange = (swiper) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

  return (
    <section className={`projects ${S.projects}`}>
      <h2 className={S.worksTitle}>Works</h2>
      <div className={`projectContainer ${S.projectContainer}`}>
        <h3 className={S.projectTitle}>Projects</h3>
        <Swiper 
        className={`mySwiper ${S.swiper}`}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          keyboard: true,
          onlyInViewport: false,
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        onSlideChange={(swiper) => {
          handleSlideChange(swiper);
        }}
        >
          {contents?.map((contentCategory)=>
            contentCategory.data?.map((item)=>(
              <>
                <SwiperSlide key={item.id} className={`projectItem ${S.projectItem}`}>
                  <Link to={`/detail/${item.id}`} className={`projectLink ${S.projectLink}`}>
                    <div className={S.projectImg}>
                      <img className={S.swiperImg} src={getPbImageURL(item, "mainImage")} alt={`${item.title} 클론코딩`} />
                    </div>
                    <div className={S.txtContainer}>
                      <h4 className={S.itemTitle}>{item.title}</h4>
                      <div className={S.blockBox}>
                      <FeatureBlock content={item.block.split(", ")[0]} />
                      <FeatureBlock content={item.block.split(", ")[1]} />
                      <FeatureBlock content={item.block.split(", ")[2]} />
                      </div>
                      <p className={S.itemDesc}>
                        {item.simpleDesc.includes("br") ? (
                          item.simpleDesc.split("br").map((desc, index) => (
                            <React.Fragment key={index}>
                              {desc}
                              <br />
                            </React.Fragment>
                          ))
                        ) : (
                          item.simpleDesc
                        )}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              </>
            ))
          )}
          <SwiperButton className="swiper-button-prev" ref={prevRef}></SwiperButton>
          <SwiperButton className="swiper-button-next" ref={nextRef}></SwiperButton>
        </Swiper>
      </div>
    </section>
  )
}

export default Projects;
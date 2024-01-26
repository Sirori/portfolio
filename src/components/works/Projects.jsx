import S from "./Works.module.css"
import { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import pb from "./../../api/pocketbase";
import { getPbImageURL } from "./../../hooks/getPbImageURL";

function Projects() {
  const swiperRef = useRef(null);
  const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.update();
    }
  }, []);

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
          {contents?.map((contentCategory)=>
            contentCategory.data?.map((item)=>(
              <>
                <SwiperSlide key={item.id} className={S.swiperItem}>
                  <Link to={`/detail/${item.id}`} className={`swiperLink ${S.swiperLink}`}>
                    <img className={S.swiperImg} src={getPbImageURL(item, "mainImage")} alt={`${item.title} 클론코딩`} />
                  </Link>
                </SwiperSlide>
              </>
            ))
          )}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  )
}

export default Projects;
import { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import S from "./Horizon.module.css";
import pb from "./../../api/pocketbase";
import { getPbImageURL } from "./../../hooks/getPbImageURL";

import gimpo from "./../../assets/image/gimpoMain.webp"
import jinheung from "./../../assets/image/jinheungMain.webp"
import karly from "./../../assets/image/karlyMain.webp"
import netspa from "./../../assets/image/netspaMain.webp"
import taing from "./../../assets/image/taingMain.webp"

function HorizonContents() {
  // 스크롤 이벤트
  const scrollContainerRef = useRef(null);

  useEffect(() => {
  const scrollContainer = scrollContainerRef.current;

  const handleWheel = (evt) => {
    let containerStart = scrollContainer.scrollLeft === 0;
    let containerEnd = scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth;
    let containerFinished = scrollContainer.scrollLeft + scrollContainer.offsetWidth <= scrollContainer.scrollWidth;
    let scrollingUp = (scrollContainer.deltaY < 0);
    let scrollingDown = (scrollContainer.deltaY > 0);
    if((containerStart && scrollingDown) || (containerEnd) || (containerEnd.scrollingUp)){
      console.log(scrollContainer.scrollLeft)
      return;
    }else{
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      console.log(scrollContainer.scrollLeft)
    }
  };

  if (scrollContainer) {
    scrollContainer.addEventListener("wheel", handleWheel);
  }

  // return () => {
  //     if (scrollContainer) {
  //       scrollContainer.removeEventListener("wheel", handleWheel);
  //     }
  //   };
  }, []);
  
  // pb데이터 가져오기
  const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);
  const { id } = useParams();

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
    <section className={S.horizontal}>
      <div className={S.verticalScrollContainer}>
        <div className={S.scrollContainer} ref={scrollContainerRef}>
          {contents?.map((contentCategory)=> contentCategory.data?.map((item)=>(
            <div className={S.horizontalContent} key={item.id}>
              <Link to={`/detail/${item.id}`} className={S.contentItem}>
                <img className="w-full h-auto" src={getPbImageURL(item, "mainImage")} alt={`${item.title} 클론코딩`} />
              </Link>
            </div>
          )))}
        </div>
      </div>
    </section>
  );
}

export default HorizonContents;
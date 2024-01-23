import { useRef, useEffect } from "react";
import S from "./HomeBtm.module.css";
import { Link } from "react-router-dom";
import gimpo from "./../../assets/image/gimpoMain.webp"
import jinheung from "./../../assets/image/jinheungMain.webp"
import karly from "./../../assets/image/karlyMain.webp"
import netspa from "./../../assets/image/netspaMain.webp"
import taing from "./../../assets/image/taingMain.webp"

function HorizonContents() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
  const scrollContainer = scrollContainerRef.current;

  const handleWheel = (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  };

  if (scrollContainer) {
    scrollContainer.addEventListener("wheel", handleWheel);
  }

  return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  
  return (
    <section className={S.horizontal}>
      <div className={S.verticalScrollContainer}>
        <div className={S.scrollContainer} ref={scrollContainerRef}>
          <div className={S.horizontalContent}>
            <Link to="about" className={S.item}>
            <img className="w-full h-auto" src={gimpo} alt="" />
            </Link>
          </div>
          <div className={S.horizontalContent}>
            <Link to="about" className={S.item}>
            <img className="w-full h-auto" src={jinheung} alt="" />
            </Link>
          </div>
          <div className={S.horizontalContent}>
            <Link to="about" className={S.item}>
            <img className="w-full h-auto" src={karly} alt="" />
            </Link>
          </div>
          <div className={S.horizontalContent}>
            <Link to="about" className={S.item}>
            <img className="w-full h-auto" src={netspa} alt="" />
            </Link>
          </div>
          <div className={`${S.horizontalContent} ${S.horizontalLastContent}`}>
            <Link to="about" className={S.item}>
            <img className="w-full h-auto" src={taing} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HorizonContents;
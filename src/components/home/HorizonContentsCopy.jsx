import { useRef, useEffect } from "react";
import S from "./HomeBtm.module.css";
import { Link } from "react-router-dom";
import gimpo from "/assets/image/gimpoMain.png"
import jinheung from "/assets/image/jinheungMain.png"
import karly from "/assets/image/karlyMain.png"
import netspa from "/assets/image/netspaMain.png"
import taing from "/assets/image/taingMain.png"

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
// const scrollContainerRef = useRef(null);
// const scrollDirectionRef = useRef("scrollX");

// useEffect(() => {
//   const scrollContainer = scrollContainerRef.current;

//   const handleWheel = (evt) => {
//     evt.preventDefault();
//     if (scrollDirectionRef.current === "scrollX") {
//       scrollContainer.scrollLeft += evt.deltaY;
//     } else if (scrollDirectionRef.current === "scrollY") {
//       scrollContainer.scrollTop += evt.deltaY;
//     }
//   };

//   const handleScroll = () => {
//     const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
//     if (scrollLeft >= scrollWidth - clientWidth) { // 수정된 부분
//       scrollDirectionRef.current = "scrollY"; // 수정된 부분
//     } else {
//       scrollDirectionRef.current = "scrollX";
//     }
//   };

//   if (scrollContainer) {
//     scrollContainer.addEventListener("wheel", handleWheel);
//     scrollContainer.addEventListener("scroll", handleScroll);
//   }

//   return () => {
//     if (scrollContainer) {
//       scrollContainer.removeEventListener("wheel", handleWheel);
//       scrollContainer.removeEventListener("scroll", handleScroll);
//     }
//   };
// }, []);
  return (
    <section className={S.horizontal}>
      <div className={S.verticalScrollContainer}>
      <div className={S.scrollContainer} ref={scrollContainerRef} id="scrollbar">
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
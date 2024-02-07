import S from "./Detail.module.css"
import FeatureBlock from "./../common/FeatureBlock";
import pb from "./../../api/pocketbase";
import React, { useEffect, useState } from "react";
import { getPbImageURL } from "../../hooks/getPbImageUrl";

import backIcon from "./../../assets/icon/backIcon.svg"

function Detail(){
  const handleBack = () => {
    history.back()
  };

  const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);

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
	}, []);

  return (
  <>
      {contents?.map((contentCategory) =>
        contentCategory.data
          .filter((item) => item.id === window.location.href.slice(-15))
          .map((item) => (
            <React.Fragment key={item.id}>
              <main key={item.id} className={S.detail}>
                <div className={S.titleBox}>
                  <h2 className={S.title}>{item.title}</h2>
                  <a className={S.goBack} onClick={handleBack}>
                    <img src={backIcon} alt="뒤로가기 아이콘" />
                    back
                  </a>
                </div>
                <div className={S.detailMain}>
                  <div className={S.imgContainer}>
                  <img src={getPbImageURL(item, "mainImage")} alt={`${item.title} 메인페이지`} className={S.mainImg} />
                  </div>
                  <div className={S.txtContainer}>
                    {item.releaseLink && (
                      <p className="text-[1.125rem]">
                        배포 주소 : &nbsp; 
                        <a className="underline" href={item.releaseLink}>
                        {item.releaseLink}
                        </a>
                      </p>
                    )}
                    <p className="text-[1.125rem]">
                      github 주소 : &nbsp; 
                      <a className="underline" href={item.link}>{item.link}</a>
                    </p>
                    <div className={S.blockBox}>
                      <FeatureBlock content={item.block.split(", ")[0]} />
                      <FeatureBlock content={item.block.split(", ")[1]} />
                      <FeatureBlock content={item.block.split(", ")[2]} />
                    </div>
                    <div className={S.txtContent}>
                      {item.description}
                      <br />
                      <br />
                      - 작업 기간: {item.term}
                      <br />
                      - 기여도: {item.contribution}
                      <br />
                      - {item.skill}
                      <br />
                      - 반응형: {item.responsible}
                    </div>
                  </div>
                </div>
              </main>
              
            <hr className="bg-slate-600 w-[90%] mx-auto" />
            <section className={`${item.detailImage2 ? S.fullSection : S.fullImg}`}>
              <div className={`${item.detailImage2 ? S.detailContainer : S.oneFull}`}>
                <h3 className={S.detailTitle}>
                  {item.detailTitle.split(", ")[0]} 페이지
                </h3>
                <div className={S.fullImg}>
                  <img src={getPbImageURL(item, "detailImage1")} alt={`${item.detailTitle.split(", ")[0]} 페이지`} />
                </div>
              </div>
              {item.detailImage2 && (
                <div className={S.detailContainer2}>
                  <h3 className={S.detailTitle}>
                    {item.detailTitle.split(", ")[1]} 페이지
                  </h3>
                  <div className={S.fullImg}>
                    <img src={getPbImageURL(item, "detailImage2")} alt={`${item.detailTitle.split(", ")[1]} 페이지`} />
                  </div>
                </div>
              )}
              {item.detailImage3 && (
                <div className={S.detailContainer3}>
                  <h3 className={S.detailTitle}>
                    {item.detailTitle.split(", ")[2]} 페이지
                  </h3>
                  <div className={S.fullImg}>
                    <img src={getPbImageURL(item, "detailImage3")} alt={`${item.detailTitle.split(", ")[2]} 페이지`} />
                  </div>
                </div>
              )}
              {item.detailImage4 && (
                <div className={S.detailContainer4}>
                  <h3 className={S.detailTitle}>
                    {item.detailTitle.split(", ")[3]} 페이지
                  </h3>
                  <div className={S.fullImg}>
                    <img src={getPbImageURL(item, "detailImage4")} alt={`${item.detailTitle.split(", ")[3]} 페이지`} />
                  </div>
                </div>
              )}
            </section>
          </React.Fragment>
        ))
      )}
    </>
  )
}

export default Detail;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pb from "./../../api/pocketbase";
import { getPbImageURL } from "./../../hooks/getPbImageURL";
import S from "./DetailList.module.css"

function DetailList(){
  const [contents, setContents] = useState([]);
	const [status, setStatus] = useState("pending");
	const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  return(
    <div className={S.works}>
      <ul className={S.workList}>
      {contents?.map((contentCategory)=> contentCategory.data?.map((item)=>(
        <li key={item.id} className={S.workItem}>
          <div className={item.id === window.location.href.slice(-15) ? `${S.activeImgContainer}` : `${S.imgContainer}`} onClick={() => navigate(`/detail/${item.id}`) || window.location.reload()}>
            <img
              className={S.workImg}
              src={getPbImageURL(item, "mainImage")}
              alt={`${item.title} 바로가기`}
              />
          </div>
        </li>
      )))}
      </ul>
    </div>
  )
}

export default DetailList;
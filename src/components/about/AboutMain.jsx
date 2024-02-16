import S from "./About.module.css"
import aboutPhoto from "/assets/image/aboutme.webp"
import FeatureBlock from "./../common/FeatureBlock"

function AboutMain(){
  
  return (
    <section className={S.aboutMain}>
      <h2 className={S.aboutTitle}>About me !</h2>
      <div className={S.aboutBox}>
        <div className={S.imgContainer}>
          <img src={aboutPhoto} alt="양시연 사진" />
        </div>
        <div className={S.textContainer}>
          <p className={S.name}>양시연</p>
          <p className={S.age}>1998.03.15 (만 25세)</p>
          <p className={S.introduce}>
          안녕하세요. 저는 배우는 것이 즐거운 신입 웹 퍼블리셔 양시연입니다.
          <br />
          코드를 입력하면 시각적으로 결과가 나오는 것에 흥미를 갖게 되어 퍼블리싱과 개발을 공부하고 있습니다. 팀원들과 협력하며 더 좋은 결과물을 내는 과정에서의 성취감을 느끼며, 어떻게 하면 더 사용자에게 더 편리한 웹 페이지를 만들지 고민합니다.
          <br />
          더 재미있고 더 나은 웹 페이지를 위해 노력하겠습니다.
          </p>
          <div className={S.blockContainer}>
            <div className="flex flex-row gap-[3%] mb-[2%]">
              <FeatureBlock content={"Frontend"} />
              <FeatureBlock content={"Web Publisher"} />
            </div>
            <div className="flex flex-row gap-[3%]">
              <FeatureBlock content={"Seoul"} />
              <FeatureBlock content={"Creative"} />
              <FeatureBlock content={"Cooperative"} />
              <FeatureBlock content={"Responsible"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMain;
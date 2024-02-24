# 2024 양시연 포트폴리오

## :seedling: 목차
1. [포트폴리오 소개](#포트폴리오에-대하여) :computer:
     - [배포링크](#배포링크)
     - [개요](#개요)
     - [디자인](#디자인)
2. [개발 기간](#개발-기간) :hourglass_flowing_sand:
3. [기술스택](#기술스택) :space_invader:
4. [스케폴딩](#스케폴딩) :file_folder:
5. [페이지 소개](#페이지-소개) :pencil:
   - [메인페이지](#메인페이지)
   - [about페이지](#about페이지)
   - [works페이지](#works페이지)
   - [detail페이지](#detail페이지)
6. [회고](#회고) :raising_hand:
7. [실행방법](#실행방법) :busts_in_silhouette:

### 포트폴리오 소개 :computer:
---
> #### 프로젝트명
> 2024 양시연 포트폴리오
> 
> #### 배포링크
> <https://sirori.netlify.app/#/>
>
> #### 개요
> - 웹 퍼블리셔/프론트엔드 취업을 위한 포트폴리오입니다.
> React/Vue를 사용하였고, 각 페이지 내의 section을 component로 분리하였습니다.
> pocketbase를 이용하여 작업물들의 내용을 담아 불러오는 방식을 채택하였습니다 :eyes:
>
> #### 디자인
> ![image](https://github.com/Sirori/portfolio/assets/116864776/24c8e2d0-a2e8-4b5a-94af-fbd819129631)
> - figma를 이용하여 전체적인 컨셉과 레이아웃을 잡았습니다.
> 컬러칩은 제가 좋아하는 오묘한 옥색으로 선정하였고, 포트폴리오의 깔끔하면서 차분한 이미지와 잘 어울리는 #8baea5, #5a8076으로 선정하였습니다.
>
<br />


### 개발 기간 :hourglass_flowing_sand:
> 2023 . 11 . 13 ~ 2023. 2 . 25 (수정 중)

<br />

### 기술스택 :space_invader:

- 언어 및 라이브러리

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> </br> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"> <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
<br />

- 개발 환경

<img src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white"> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/rome-27272A?style=for-the-badge&logo=rome&logoColor=white">
<img src="https://img.shields.io/badge/pocketbase-FFCA28?style=for-the-badge&logo=pocketbase&logoColor=white"> <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white">
<br />

### 스케폴딩 :file_folder:
<details>
<summary> 열어서 보기 </summary>

    📦src
    ┣ 📂api
    ┃ ┗ 📜pocketbase.js
    ┣ 📂assets
    ┃ ┣ 📂favicon
    ┃ ┣ 📂icon
    ┃ ┃ ┗ 📜.DS_Store
    ┃ ┣ 📂image
    ┃ ┃ ┗ 📜.DS_Store
    ┃ ┗ 📜.DS_Store
    ┣ 📂components
    ┃ ┣ 📂about
    ┃ ┃ ┣ 📜About.module.css
    ┃ ┃ ┣ 📜AboutMain.jsx
    ┃ ┃ ┣ 📜Education.jsx
    ┃ ┃ ┗ 📜Skills.jsx
    ┃ ┣ 📂common
    ┃ ┃ ┣ 📜FeatureBlock.jsx
    ┃ ┃ ┗ 📜PendingPage.jsx
    ┃ ┣ 📂detail
    ┃ ┃ ┣ 📜Detail.jsx
    ┃ ┃ ┗ 📜Detail.module.css
    ┃ ┣ 📂home
    ┃ ┃ ┣ 📜Features.jsx
    ┃ ┃ ┣ 📜Home.module.css
    ┃ ┃ ┣ 📜HomeBtm.module.css
    ┃ ┃ ┣ 📜Horizon.module.css
    ┃ ┃ ┣ 📜HorizonContents.jsx
    ┃ ┃ ┣ 📜HorizonContents.module.css
    ┃ ┃ ┣ 📜Main.jsx
    ┃ ┃ ┗ 📜WhoAmI.jsx
    ┃ ┣ 📂works
    ┃ ┃ ┣ 📜Photoshop.jsx
    ┃ ┃ ┣ 📜Projects.jsx
    ┃ ┃ ┗ 📜Works.module.css
    ┃ ┗ 📜Spinner.jsx
    ┣ 📂font
    ┃ ┗ 📜Ogg-Regular.woff
    ┣ 📂hooks
    ┃ ┣ 📜getPbImageURL.js
    ┃ ┣ 📜useHorizontalScroll.js
    ┃ ┗ 📜useWindowScrollEvent.js
    ┣ 📂js
    ┣ 📂layout
    ┃ ┣ 📜Footer.jsx
    ┃ ┣ 📜Header.jsx
    ┃ ┗ 📜RootLayout.jsx
    ┣ 📂pages
    ┃ ┣ 📜About.jsx
    ┃ ┣ 📜Home.jsx
    ┃ ┗ 📜Works.jsx
    ┣ 📂routes
    ┃ ┗ 📜route.jsx
    ┣ 📂styles
    ┃ ┣ 📜Footer.module.css
    ┃ ┣ 📜Header.module.css
    ┃ ┗ 📜index.css
    ┣ 📜.DS_Store
    ┣ 📜App.jsx
    ┗ 📜main.jsx
</details>

---

### 페이지 소개 :pencil:
#### 메인페이지
![화면 기록 2024-02-08 오후 2 11 27](https://github.com/Sirori/portfolio/assets/116864776/3ca36d85-2795-4734-a7a7-491cdc0f3a5e)


- css 애니메이션을 사용하였습니다.
- pocketbase를 통해 데이터를 받아와 x축 스크롤 애니메이션을 구현하였습니다.

#### about페이지
![화면 기록 2024-02-08 오후 2 12 58](https://github.com/Sirori/portfolio/assets/116864776/6c53d4a8-3abe-46f0-9860-4bf9c3f353cd)

- block이라는 컴포넌트를 조립하여 사용하였습니다.
- 마찬가지로 css 애니메이션을 활용하였습니다.


#### works페이지
![화면 기록 2024-02-25 오전 12 30 14 (1)](https://github.com/Sirori/portfolio/assets/116864776/1888359e-b546-45f3-8231-edba5a15065a)

- swiper를 사용하여 작업물을 보기 편하게 구현하였습니다.
- 작업물들의 데이터는 pocketbase에서 생성하여 데이터를 불러옵니다.
- javascript를 이용해 illustrator 이미지를 확대하여 볼 수 있도록 했습니다.


#### detail페이지
![화면 기록 2024-02-08 오후 2 25 57](https://github.com/Sirori/portfolio/assets/116864776/e4649988-29bb-4ff0-b8e3-54c8e3f05e60)


- pocketbase에 입력된 정보들을 Detail.jsx에서 지정한 레이아웃대로 출력되도록 하였습니다.
- javascript를 사용하여 back 버튼을 활성화하였습니다.
- flex를 적극 사용하였습니다.

#### lighthouse 검사
- 메인페이지
<img width="555" alt="home" src="https://github.com/Sirori/portfolio/assets/116864776/97a1ada7-1c25-4964-933d-19d2d998dc21">

- about페이지
<img width="555" alt="about" src="https://github.com/Sirori/portfolio/assets/116864776/7e7fec52-df65-4088-a5e8-73a2c30c6392">

- works페이지
<img width="555" alt="works" src="https://github.com/Sirori/portfolio/assets/116864776/072bff2e-967a-46dd-9a60-e8dfc53748d5">

- detail페이지
<img width="555" alt="detail_taing" src="https://github.com/Sirori/portfolio/assets/116864776/db184fd8-07d4-48d4-a571-1426c7d57547">
(타잉)
<img width="555" alt="detail_karly" src="https://github.com/Sirori/portfolio/assets/116864776/83b9d915-d703-40e5-a833-6ecef7ab05ba">
(마켓칼리)

전체적으로 pocketbase를 사용한 페이지들은 데이터를 불러오는 데에 performance 점수가 낮습니다. 더 고민하고 개선하도록 하겠습니다.





### 회고 :raising_hand:
> 기간이 생각보다 오래걸렸는데 그에 비해 결과물은 아쉬움이 많이 남는 것 같습니다. 반응형으로 사이트를 제작하고 싶었으나 급한 마음으로 일단 마무리를 지어 계속 반응형으로 수정할 예정입니다.
> 부족한 점들을 깨달을 수 있었고, 동료들과 코딩 테스트 스터디를 진행했었는데 js 문법을 계속 연습하니 이전보다 더 코드를 이해하며 사용할 수 있어 보람을 느낄 수 있었고, 이전에 진행했던 프로젝트에서 사용한 것들을 다시 되새길 수 있는 시간이었습니다 !
> 접근성 관련한 부분들도 계속 수정할 예정이며, 현재 다른 기기에서도 test를 진행하고 보이는 오류들을 잡아낼 예정입니다.


#### 실행방법 :busts_in_silhouette:
프로젝트 클론 혹은 압축파일 다운로드

:arrow_down:
### 패키지 설치
```js
pnpm i
```
### 프로젝트 실행
```js
pnpm dev
```

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
> ####프로젝트명
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
> 2023 . 11 . 13 ~ 2023. 2 . 8 (수정 중)

<br />

### 기술스택 :space_invader:

- **언어 및 라이브러리**
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> </br> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"> <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
<br />
- **개발 환경**
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
![665DDD09-4E51-4FFA-9873-C1AA2C1C5190_1_102_o](https://github.com/Sirori/portfolio/assets/116864776/7e85761a-569e-4bbc-aad7-8c998a2c224f)

- css 애니메이션을 사용하였습니다.
- pocketbase를 통해 데이터를 받아와 x축 스크롤 애니메이션을 구현하였습니다.

#### about페이지
![356936DE-009E-4B89-BE6E-97BD74277AC2_4_5005_c](https://github.com/Sirori/portfolio/assets/116864776/37869c1d-af2e-4d8b-bd11-8334d458fcb4)

- block이라는 컴포넌트를 조립하여 사용하였습니다.
- 마찬가지로 css 애니메이션을 활용하였습니다.


#### works페이지
![7D818E74-BC0F-4052-BBE6-D05574BF1811_1_102_o](https://github.com/Sirori/portfolio/assets/116864776/d01e4ee2-58d9-4985-a134-0c2fcc905050)
- swiper를 사용하여 작업물을 보기 편하게 구현하였습니다.
- swiper의 coverflow 이펙트를 사용하였습니다.
- 작업물들의 데이터는 pocketbase에서 생성하여 데이터를 불러옵니다.
- javascript를 이용해 illustrator 이미지를 확대하여 볼 수 있도록 했습니다.


#### detail페이지
![79CE616B-55BF-4121-BF0D-74A99829B7AE_4_5005_c](https://github.com/Sirori/portfolio/assets/116864776/add74e7d-33ab-40f7-a496-337c9ecd01ea)

- pocketbase에 입력된 정보들을 Detail.jsx에서 지정한 레이아웃대로 출력되도록 하였습니다.
- javascript를 사용하여 back 버튼을 활성화하였습니다.
- flex를 적극 사용하였습니다.


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
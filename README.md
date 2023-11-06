# Project-Mulplay2

mulplay -> mulplay2로 변경되었습니다.


## 이슈
내가 진행할 기능별로 이슈 생성
```
ex)프로젝트수정기능 구현 
label issue종류에 맞춰 달기 
```
## 브랜치

이슈별로 브랜치 하나 생성(develop에서 생성)
브랜치는 기능 완성 후 삭제  
```
브랜치명
feat/#이슈번호-기능이름
ex) feat/#3-projectEdit
```
## 커밋명

feat     새로운기능추가 <br/>
refactor 코드 리팩토링<br/>
fix      버그수정<br/>
design   기능에 지장가지않는 스타일변경<br/>
init     빌드수행, 패키지설치, 환경설정수정등 <br/>
etc      주석추가삭제, readme 작성
```
ex) [etc]readme수정
```

### 푸쉬 전에는 항상 pull & request 해주세요

pull & request에 올리고 머지하지마세요

```
git PR 네이밍
ex) feat/#3 프로젝트수정기능구현
```


git 충돌 해결 참고
```
[참고1](https://wonyong-jang.github.io/git/2021/02/05/Github-Rebase.html)
[참고2](https://velog.io/@x_sunyoung/rebase)
```

### 추가할 정책은 밑에 추가해주세요

* 지켜야 할 규칙
* 협업 시에 요구사항
* 기타



# Mulplay 크라우드 펀딩 기반 웹 서비스
React + Nodejs 개발자를 위한 크라우드 펀딩 사이트


## 🖥️ 프로젝트 소개
React 기반으로 와디즈, 텀블벅 등을 참고하여 만든 크라우드 펀딩 사이트입니다.
<br>

## 🕰️ 개발 기간
* 23.10.04일 - 23.11.08일

### 🧑‍🤝‍🧑 맴버구성
 - 팀장  : 남찬호 - 프로젝트-리워드 recoil 설정, 로그인, 회원가입, 가이드, 상세 페이지, 결제 페이지, DB 관리, 데이터 관리, 단위 테스트, 프론트엔드 배포, DB 배포, 통합 및 형상관리, 리드미 작성
 - 팀원1 : 김소정 - 회원 Cookie 및 recoil 설정, 라우터 관리, 마이 페이지, 리스트 페이지, 레이아웃 컴포넌트, DB server 관리(CRUD), API 관리, 백엔드 서버 배포, 통합 및 형상관리, 일정 및 프로젝트 관리, 발표
 - 팀원2 : 임혜정 - 웹 디자인, 이미지 제작, 프로젝트 제작 페이지, 관리자 페이지, 메인 페이지, 헤더 / 푸터 / 슬라이더 컴포넌트, 페이지 반응형 작업, 전체 CSS 관리, PPT 제작
 - 팀원3 : 이수경(중도 하차) - 웹 디자인, 메인 페이지

### ⚙️ 개발 환경
- `NodeJs 18.17.1`
- `JDK 17.0.6`
- **IDE** : VS code
- **Framework** : React(18.2.0)
- **Database** : MySQL DB(8.0)
- **Tools** : Git, MySQL Workbench

### <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg> 사이트 배포
[Mulplay](https://mulplay.vercel.app/)

## 📌 주요 기능

#### :heavy_check_mark: 회원가입

- 주소 API 연동
- ID 중복 체크

<details>
    <summary>:mag: 자세히 보기</summary>

<!-- summary 아래 한칸 공백 두고 내용 삽입 -->


---

:computer: Code
    <details>
        <summary>Signup.js</summary>
       
       ```js
       
       ```
   </details>

#### :camera: View
   <details>
    <summary>Image</summary>
   
    ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/296bb910-c5d7-47ea-a8e1-0c7930120e17)
   
   주소 입력 모달창
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/69264808-5113-416f-b129-0f70a2834f64)
   </details>
</details>

#### :heavy_check_mark: 로그인
- DB값 검증
- 로그인 Cookie 생성

- 로그인 시 쿠키(Cookie) 및 세션(Session) 생성

<details>
    <summary>:mag: 자세히 보기</summary>

<!-- summary 아래 한칸 공백 두고 내용 삽입 -->

- 로그인 시 axios를 사용하여 비동기 방식으로 DB에 저장된 ID와 PW를 가져와
  사용자가 입력한 값과 비교해서 값이 일치할 때 로그인 허용
- 로그인 성공 시 Cookies.token 생성 및 메인 페이지로 이동
  
  ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/736c65ec-78ca-4d23-a1db-ab36b032c3a7)

  로그인 실패
  ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/9be36ab3-fa71-4020-8b0b-813368553420)

  로그인 성공
  ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/974dad00-0861-4aef-84b2-2f8f65c78224)

</details>

#### 마이 페이지
- 주소 API 연동
- 회원정보 변경
- 프로젝트 관리

#### 메인 페이지
- Cookie 여부 확인
- 메인 게시글(카드) 이미지 슬라이드(CSS)

#### 프로젝트 제작 페이지
- 가이드 페이지에서 로그인 확인 후 이동
- 프로젝트 작성, (~~읽기, 수정~~), 삭제(CRUD)

#### 관리자 페이지 
- 프로젝트 승인
- 회원정보 관리

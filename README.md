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
- axios post로 입력받은 data값을 전달

- 주소 API 컴포넌트를 가져와 Modal창을 띄우고 주소를 입력받음

- 회원가입 요청 성공, 실패 여부에 따라 Swal 알람창이 뜸

#### :camera: View
   <details>
    <summary>Image</summary>

   회원가입창
    ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/296bb910-c5d7-47ea-a8e1-0c7930120e17)

   알람
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/99557994-3eb4-4207-8d28-d7df21a45e87)
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/db5c777c-fdaf-4928-973b-202260cd04d9)


   
   주소 입력 모달창
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/69264808-5113-416f-b129-0f70a2834f64)
   </details>
</details>

---

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
  


#### :camera: View
   <details>
    <summary>Image</summary>

   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/736c65ec-78ca-4d23-a1db-ab36b032c3a7)

  로그인 실패
  ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/9be36ab3-fa71-4020-8b0b-813368553420)

  로그인 성공
  ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/974dad00-0861-4aef-84b2-2f8f65c78224)
   </details>
</details>

---

#### 마이 페이지
- 나의 프로필 조회
- 나의 회원정보(CRUD)
- 나의 프로젝트 조회 상태변경
- 수익관리
- 펀딩한 프로젝트 관심프로젝트별 조회

<details>
    <summary>:mag: 자세히 보기</summary>
    

<!-- summary 아래 한칸 공백 두고 내용 삽입 -->

**마이페이지**

- Mypage는 Router를 이용하여 카테고리에 설정한 navigate경로에 따라 프로필 하단에 컴포넌트를 렌더링합니다.
- 로그인된 유저의 넘버를 쿠키에 저장해 서버와 통신하고 쿼리로 해당유저의 정보를 가져옵니다

**회원정보수정페이지**

- 쿠키에 저장된 유저넘버와 일치하는 정보를 화면에 출력합니다
- 입력필드에 대한 값 변경은 useState로 구현했고 Pk 인 아이디는 변경하지 못하도록 했습니다
- 프로필이미지변경 기능은 recoil로 상태관리를 해서 페이지에 반영했습니다.
- 회원정보수정 기능은 이벤트 핸들러 함수에서 폼데이터를 수집하고 회원정보를 업데이트합니다.
- 회원가입시 유저상태 플래그를 디폴트 1로 저장했고 탈퇴시 유저상태 값을 0으로 업데이트하여 soft delete로 구현했습니다 유저상태가 0인 회원은 로그인 하지못하도록 했습니다.

비밀번호 변경페이지

- 현재 비밀번호를 가져와 검증하고 변경할 비밀번호와 비밀번호 확인의 비밀번호가 맞을경우 수정이 됩니다.
- 

**나의 프로젝트 관리 페이지**

- 나의 프로젝트와 관심프로젝트, 후원한 프로젝트는 타입을 매개변수로 전달해서 타입에 따라 각각의 쿼리를 가져오도록 했습니다.
- 탭선택기능은 상태변수를 사용해서 현재 선택된 탭을 추적하고 옵션목록을 통해 각 옵션에 대한 버튼을 생성합니다. 클릭하면 클릭이벤트핸들러로 선택된 탭의 데이터를 하단에 보여줍니다.
- 이때 선택된 탭과 일치하는 프로젝트만 필터링한 데이터를 하단에 보여주게됩니다.
- 카드, 뱃지 컴포넌트
- 조건식으로 나의 프로젝트에서 심사단계에 있는 프로젝트의 경우 심사신청일 예상펀딩종료일을 표시했고 상태를 보류로 변경하는 기능을 구현했습니다
- 펀딩이 시작한 프로젝트는 펀딩시작일 펀딩종료일을 표시했습니다. 펀딩이 시작한 프로젝트의 경우 수익관리 탭으로 넘어갈 수 있습니다
- 카드 하단의 펀딩 목표달성 게이지는 나의 프로젝트가 아닌 관심, 후원프로젝트에서만 보이도록 설정해 관심있거나 후원한 프로젝트의 진행상황을 바로 볼수있도록 했습니다.
- 또한 후원한 프로젝트는 후원한 금액이 나타납니다

**수익관리**

- 수익관리 테이블은 라이브러리를 사용했습니다.
- 내가 작성한 프로젝트의 데이터를 가져오고 정렬기능으로 오름차순 내림차순으로 볼수있게 했습니다
- 송금상태 는 project state 데이터에 따라 펀딩성공에 해당하는 project 만 송금완료로 표시되도록 했습니다.
- 선물전달은 토글기능으로 구현했습니다. 체크박스를 선택하고 + 아이콘을 클릭시 선물전달 상태를 일괄로 변경할 수 있습니다
  


#### :camera: View
   <details>
    <summary>Image</summary>

   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/8d613727-3ff0-42ed-9554-dfcc40e2aedf)
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/a74ebdd8-162e-4cde-a9d5-842cd83de33f)

   비밀번호 변경 페이지
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/57e534c8-3444-4c3f-9860-b7b84880e5fd)
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/92f0db6e-6856-4604-b0c0-a27ff241689a)
   
   프로젝트 관리 페이지
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/fa9e4273-54bc-44b0-b344-974ded06fd52)
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/ff1ffd31-3623-4b6d-8fec-b76791dc4bc9)

   후원, 관심 프로젝트 페이지
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/97e4e768-a211-4de1-9d09-df2f7656ccc3)


   수익 관리 페이지
   ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/764ab457-21bd-4a92-beca-c4852a36ca5c)

   </details>
</details>
---

#### 메인 페이지
- Cookie 여부 확인
- 메인 게시글(카드) 이미지 슬라이드(CSS)

<details>
  <summary>:mag: 자세히 보기</summary>

<!-- summary 아래 한칸 공백 두고 내용 삽입 -->

#### :camera: View
   <details>
    <summary>Image</summary

   메인화면
    ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/b59409ba-2a7e-4a4d-a624-07d50661e85f)

   </details>
</details>

---

#### 프로젝트 가이드 페이지
- Accordion 라이브러리 사용
- 토큰 여부 확인으로 버튼 상태 변경

<details>
  <summary>:mag: 자세히 보기</summary>

<!-- summary 아래 한칸 공백 두고 내용 삽입 -->
- 펀딩 프로젝트에 대한 프로세스 설명과 자주 묻는 질문을 유저에게 보여주는 페이지입니다.
- 로그인이 되지 않은 유저는 로그인 하기 버튼을 보여주고 클릭시 로그인 창으로 이동합니다.
- 로그인이 완료되면 시작하기 버튼을 보여주고 클릭시 프로젝트 제작 페이지로 이동합니다.

#### :camera: View
   <details>
    <summary>Image</summary>

   화면
    ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/c44886bc-4e8c-4dbb-957d-2f9aa3150520)
    ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/408c14c6-c715-4a14-a950-223cbc0e9758)
    ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/8e2ce430-6fef-4d01-b99d-a1072eeb7461)
    ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/b05dd37f-549d-4715-a6bc-1413708cb58b)

   
   </details>
</details>
---

#### 프로젝트 제작 페이지
- 가이드 페이지에서 로그인 확인 후 이동
- 프로젝트 작성, (~~읽기, 수정~~), 삭제(CRUD)
- props를 통해 각 컴포넌트에 정보 전달

<details>
  <summary>:mag: 자세히 보기</summary>

<!-- summary 아래 한칸 공백 두고 내용 삽입 -->
- 제작 페이지는 각 4개의 탭으로 나뉘어 정보를 저장합니다.
- project 테이블에서 해당 유저의 외래키 여부를 확인하고 있다면 등록일 순으로 조회합니다.

기본 정보 탭

- input 값들을 handleChange 함수를 통해 입력될 때마다 value값을 전달하여 데이터에 저장합니다. string값이 아닌 int값은 문자열, 비숫자 문자를 제거하고 숫자로 변환하였고 NaN 오류를 방지하기 위해 예외처리를 하였습니다.
- 날짜는 MyDatePicker 컴포넌트에서 받은 props 값을 등록일 : ‘yyyy-mm-dd hh-mm-ss’ (시간까지) , 오픈,종료일 : ‘yyyy-mm-dd’ 형태로 다시 정의하여 변수에 저장했습니다.
- 저장하기를 누르면 기본 정보 값들과 로그인 유저의 no값을 project DB에 새로 생성됩니다.

해시태그 정보 탭

- 해당 태그들의 value 값을 정해주고 상태 여부에 따라 true가 되면 value값을 넣어주어 handleCheckChange 함수를 통해 value값이 생성되면 data에 저장하고 null값이 되면 data에서 제거합니다.
- 저장하기를 누르면 tagdconnect에서 해당 prod_no과 체크된 data_no를 연결하여 줍니다. 이 데이터들은 사용할 때  join을 통해서 불러옵니다.

리워드 정보 탭

- 기본 정보 탭과 동일하게 input에 데이터를 입력하고 저장합니다.

프로젝트 정보 탭

- CKEditor 를 사용하여 내용을 입력합니다.
- 입력된 내용은 HTML 태그를 제거하는 작업을 해주고 기본 정보에서 생성한 프로젝트에 content 컬럼을 업데이트합니다.

#### :camera: View
   <details>
    <summary>Image</summary>
기본정보
 
  ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/3e9f7792-242e-4e93-b9fd-5adf8d20046b)
  ![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/033fcd75-8994-4ebb-9550-f194bd302c47)

해시태그 정보
![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/b3361d47-b150-4349-bfdf-301184801e52)

리워드 정보
![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/8b67e9e7-fb60-4ae2-98fc-93008402bf1d)

프로젝트 정보
![image](https://github.com/project-mulplay/project-mulplay2/assets/98729958/8ca41b63-6b8a-41e1-bb37-4e595e4a8c55)


    

   </details>
</details>
---

#### 관리자 페이지 
- 프로젝트 승인
- 회원정보 관리

![header](https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=PolicyHub&fontSize=60&animation=scaleIn&fontAlign=70)
  

# 2/8

1. Figma 프로토타입을 기반으로 html 구조 상의
2. 구현 방식 논의 (Vanilla JS로 구현하다가 리액트 학습 후 리액트 프레임워크 적용)
3. api 호출 방식 논의
4. 검색 기능 구현 논의
    - 태그 기반 검색으로 쉽게 가기
    - 문자 검색 기반으로 코드 찾기 (박영규 조원의 이전 프로젝트 검색 기능 코드 참조하기)
5. 즐겨찾기 기능 구현 논의
    - 박영규 조원의 이전 프로젝트 즐겨찾기 기능 참조하기
6. 이후 프로젝트 진행 방식 논의
    - 진도 및 난이도 고려하여 함께 코딩
    - 기능 구현은 백엔드와의 협의 후 코딩

***

# 2/21

1. 로고 및 검색 기능 추가 (검색 기능에 고양이 api 임시 연동)
    - MainLogo.svg
    - Name을 이용한 기본적인 검색 기능
    - 세션 스토리지와 캐시를 이용해 이전 검색 기록을 가지고 있을 수 있음
    - 디바운스를 이용하여 메모리 낭비 방지
2. 더미 데이터를 이용한 카드 속성 불러오기 테스팅 (성공)

***

# 3/26

1. Card와 SearchResults의 통합의 경우 SearchResults를 삭제하고 
    app.js의 SearchResults 관련 로직을 Card로 바꾸면 적용되는 것을 확인함.
    (api 호출 확인을 위해 현재는 SearchResults 삭제 이전 상태로 다시 복구)
2. api로 참고하던 css 코드를 제거하고 style.css안에 통합함
3. footer 수정
4. MainLogo 글씨가 흐릿하여 수정함
5. keyword창 글씨 중앙 정렬 및 placeholder가 다른 텍스트가 입력된 후에는 다시 뜨지 않게끔 설정함
6. 배경화면 색 변경

![footer](https://capsule-render.vercel.app/api?type=waving&color=auto&height=150&section=footer&text=함진규%20|%20박영규%20|%20나혜수%20|%20편민준&fontSize=20&animation=scaleIn&fontAlign=50)
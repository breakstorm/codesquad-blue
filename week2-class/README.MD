# 코드스쿼드 2주차 교육 내용 정리 
  - [코드스쿼드 1주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week1-class/README.MD)
  - [코드스쿼드 2주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week2-class/README.MD)

---

# 교육내용 
## 3.20(월)
#### naverUI 개발하기 (3차)
 - View-Model 구현
 
## 3.21(화)
#### naverUI 개발하기 (3차)
- View-Model 구현 

#### Node 강의 (GET/POST)


## 3.22(수)
#### CSS 연습  
- kakao Corp. 홈페이지 레이아웃 만들기



## 3.23(목)
#### naverUI 개발하기 (3차)
- View-Model 구현 완료

## 3.24(금)
#### naverUI 개발하기 (4차)
- Ctroller 설계 및 구현 

#### blue팀원 naverUI 코드리뷰 
- 컨트롤러 설계 부분이 미흡. 현재 구현한 내용은 Model만을 컨트롤 하기에 필요성이 부족 
- 옵저버 패턴의 구현시 각 모델별 에서 처리할수 있는 내용과 넘겨주어야 하는 내용 정리가 필요함을 확인. 
- 현재 모델내에서 처리하는 코드와 다른 모델을 호출하는 코드의 정리가 되어있지 않음.

## 3.26(토)
#### 1주일 교육 내용 정리 
- naverUI 4차레 만듬으로써 느낀점이 여러가지 있으며, 개발을 할때마다 다른 시각으로 접근할 수 있도록 도와준 마스터 분들에게 감사를 느낀다. 
- 각종 수치로 본 코드 개선과정은 naverUI.MD 에 정리를 해두었다. 
- [naverUI 개발 후기](https://github.com/breakstorm/codesquad-blue/tree/master/week2-class/naverUI.MD)

## 3.27(일)
#### Jekyll사용하기(아래에 추가로 정리) 
#### [GIT command 자주 사용하는 것 정리](https://github.com/breakstorm/codesquad-blue/tree/master/gitcommand.MD)
 
   
---

# 추가 공부 내용 정리
##필요한것 : 테스트컴퓨터, GITHUB계정

---

###0. 장점 
- github와, 로컬에서 블로그의 글을 관리할 수 있다. (=사용사작 손쉽게 관리할 수 있다.)
- 자신의 GIT 홍보가 될 수도 있다.

---

###1. 설치하기
- $>sudo brew install ruby-full
- $>sudo gem install jekyll bundler
- $>git clone [자신의 GITHUB계정주소]
1. 이떄 만드는 GITHUB계정은 [사용자명].github.io 형식의 프로젝트 명을 띄어야 한다.

###2. 만들기
- $>jekyll new (블로그명)
- $>cp -r ./(블로그명) /(자산의 로컬 git clone 경로) 

###3. 포스트 전단계 
- _config.yml 파일에서 자신의 정보 수정 

###4. 포스트 하기 
- _post폴더에 YYYY-MM-DD-post-name.md 형식으로 저장 
- 본문 형태
```
---
(필수)layout: post
(필수)title:  "this is second"
(선택)date:   2017-03-26 12:56:42 +0900
(선택)categories: test
---
this is second post in the jekyll
```

---

### 앞으로 해보고 싶은것 
#### 1. 테마변경하기 
#### 2. 올린글들 카테고리 나누기 (현재 월별 나누어지는 것 확인)
#### 3. 작성한글 통계내기 
#### 4. 방문자수 확인하기

---

### 참고사이트 
1. [한량넷](http://www.halryang.net/)
2. [xho95's Swift Life](http://xho95.github.io/jekyll/markdown/atom/kramdown/2016/01/12/Post-a-new-MarkDown-file.html)
3. [saltfactory](http://blog.saltfactory.net/jekyll/upgrade-github-pages-dependency-versions.html) 
4. [Jekyll공식페이지](http://jekyllrb-ko.github.io/)
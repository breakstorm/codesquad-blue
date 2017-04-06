# 코드스쿼드 3주차 교육 내용 정리 
  - [코드스쿼드 1주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week1-class/README.MD)
  - [코드스쿼드 2주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week2-class/README.MD)
  - [코드스쿼드 3주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week3-class/README.MD)
  - [코드스쿼드 4주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week4-class/README.MD)

---

# 교육내용 
## 3.27(월)
#### 1. 미니 팀프로젝트
##### 목표 : 미니 SNS(인스타 북)
- [팀룰](https://github.com/DongHyunKims/mini-sns-dev/wiki/Mini-SNS-Team-Rule) 사용도구, 팀룰, 코드컨벤션, 커밋룰 채택 
- 3.28(화) 아침까지 FaceBook, Instagram 첫페이지 기능분석 
- 소감1 : 글을 작성하는 곳이 많아지면 많아질수록 규칙이 까다로워지고, 코딩 이외의 시간이 많이 필요해 진다. (적정 시간을 찾는 것이 이번 프로젝트에서 목표로 해야 할 것 같다.) 
- 소감2 : 진행사항에 대하여 발생할때마다 공유를 하게되면 loss 시간이 많아진다. 어떻게 하는 것이 좋을까? 

#### 2. virtualbox-lubuntu 설치 

 
## 3.28(화)
#### 1. 미니 팀프로젝트 (미니SNS - 인스타북)
##### 목표 : 미니 SNS(인스타 북)
- 오늘한일 : 15분 데일리 미팅, 백로그 작성, GIThub 세팅, GIThub 프로젝트 페이지 변경, GIThub 이슈 페이지 변경 (모두다 매일 해야 하는 일)
- 내일할일 : git 커밋규칙 확인, 백로그 기반 일정 산정, 사전 필요지식 정리
- 소감1 : 어제보다는 프로젝트 달성을 위해서 전진한 느낌, 완벽한 팀셋업을 하기 보다는 완벽에 가까워 지기 위하여 노력하는 것이 중요한 자세라고 생각된다.
- 소감2 : HTML/CSS 작업을 하는것에 있어서 페이지의 통일성을 보여주기 위해서도 컨벤션이 있어야 한다.

#### 2. honux : git workflow 강의(gitflow, github flow)
- [참고사이트1](http://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html) / [참고사이트2](https://guides.github.com/introduction/flow/) 

#### 3. jk : SCRUM이란? > 팀과 같이 성장하도록 프로세스 
- [참고사이트](https://www.slideshare.net/UnyongChoi1/slamdunk-scrum)

## 3.29(수)
#### 1. 미니 팀프로젝트 (미니SNS - 인스타북)
##### 목표 : 미니 SNS(인스타 북)
- 매일하는일 : 15분 데일리 아침저녁 미팅, GIThub 관리
- 오늘한일 : USER테이블 설계, 회원가입 페이지 마크업 작성
- 내일할일 : NODE강의 듣기, 프로그램 플로우 넘기기
- 소감1 : 어제보다는 더 프로젝트가 구체적으로 흘러간다고 느껴진다.
- 소감2 : 우리가 만든 모든것은 계속 관심가져 주지 않으면 없는것과 다름없어 진다.


## 3.30(목)
#### 1. 미니 팀프로젝트 (미니SNS - 인스타북)
##### 목표 : 미니 SNS(인스타 북)
- 매일하는일 : 15분 데일리 아침저녁 미팅, GIThub 관리
- 오늘한일 : NODE express 강의 듣기, 회원가입 프로세스 설계
- 내일할일 : 각 기능 설계 검토
- 소감1 : 데일리 미팅에서 말이 길어지면 이야기를 이해하기 힘들어 진다.
- 소감2 : 하는 일을 이슈에는 등록했는데, 이것의 규모(분량)를 가늠할 수 있는 방법은 없을까? 최적에 백로그를 작성할 때 잘 해야 하는것이 근본적인 방법 인것 같긴 하다.

####2. JAVA 강의
- 객체지향 : 클래스 / 상속 / 오버라이드 / 자바 고유의 추상화 인터페이스 
-- 이해하지 못 한 부분은 <제네릭> 
- 데이터타입 : primitive(기본타입), reference(참조타입)
- 클래스데이터타입 : 클래스변수(클래스 개별 변수), 인스턴스변수(클래스 공통 변수)

####3. 메모리 설명을 가장한 컴퓨터구조 
- 프로그램을 실행하는 흐름 : 하드디스크 -> <bold>메모리</bold> -> <bold>CPU</bold>
- 결국 연산하는 CPU의 처리하는 단위가 중요한데, 수업에서는 4BYTE로 가정 
- 4BYTE로 접근할 수 있는 메모리의 크기는 2^32bit(4GB)
- 현대의 컴퓨터는 여러개의 프로그램을 돌리는데 말이 되지 않는다?!(컴퓨터 8GB면 2개를 실행?!)
- 이 문제를 해결하기 위한 방법 메모리 추상화 라는 기술이다. 
-- 메모리 추상화는 각 프로그램별 사용할 만큼의 메모리만 할당 받아서 사용하는데, 프로그램에게는 추상화하여 메모리 전체를 사용하고 있는것 처럼 하게 만들어주는 기술. 
- 메모리가 추상화 되어 프로그램을 실행하게 된다면 아래와 같은 4가지 계층을 가지게 된다. 
-- 코드 / 데이터 / 스택 / 힙
#### - ***이렇게 중요한 메모리를 잘 알아야 코드를 더 잘짤수 있다.***
*[참고사이트1. 32bit 64bit 차이점](http://thrillfighter.tistory.com/116)* 
**

## 3.31(금)
#### 1. 미니 팀프로젝트 (미니SNS - 인스타북)
##### 목표 : 미니 SNS(인스타 북)
- 매일하는일 : 15분 데일리 아침저녁 미팅, GIThub 관리
- 오늘한일 : 데모시연, 스크럼 일주일 회고 및 차주 마일스톤 수립
- 내일할일 : NODE, DB강의 듣기(~일요일)
- 소감1 : 조가 하는 일을 피드백 할 수 있고, 조원 모두가 더 발전해 가는 것을 느낄수 있는 수업 이였습니다.

## 4.01(토)
#### 

## 4.02(일)
#### NODE, DB강의 듣기
- 아래에 NODE 명령어 정리
 
   
---

# 추가 공부 내용 정리 
## 주제 : 반응형 웹


---

### 참고사이트 
1. [Nolboo's blog](https://nolboo.kim/blog/2013/07/22/advanced-guide-to-html-and-css-4-slash-10/) 
2. [RefreshStudio](http://re-fresh-studio.com/2013/07/post-20-responsive-images.php)
3. [나무위키 반응형웹](https://namu.wiki/w/%EB%B0%98%EC%9D%91%ED%98%95%20%EC%9B%B9%20%EB%94%94%EC%9E%90%EC%9D%B8)
4. [반응형웹 사례:서울대도서관](http://library.snu.ac.kr/)
5. [SK플래닛 기술블로그](https://readme.skplanet.com/?p=9739) 
6. [Xe스쿨](http://www.xeschool.com/xe/step3_1) 
7. (설계없음)[WEBDIR](http://webdir.tistory.com/category/%EC%9B%B9%EC%BD%94%EB%94%A9/CSS?page=3) 
8. 

반응형웹
1. 나오계 된 계기 : 하나의 웹페이지 에서 다양한 디바이스의 화면크기를 유동적으로 지원하기 위함.
2. 반응형 웹을 만드는 방법 
2-1. 미디어쿼리 : 뷰포트에 따라서 효과를 다르게 줄 수 있다.
2-2. 유동형그리드 : em, rem, % 을 사용하여 변화에 따라 유동적으로 변경된다. 

3. 특징 : 하나의 웹페이지로 여러가지의 디바이스를 지원한다. <-> 웹이 무거워 진다.

#### npm 명령어
 - npm init 
 - npm install express --save 
 - npm install ejs --save
 - npm instasll express-bodyparser

#### express 명령어
 - app = express() //선언하기 
 - apth = require('path');
 - main = require('./router/main');
 - app.use(static('/static')); //static파일 설정
 - app.get/post //요청받기
 - app.listen //앱 실행하기
 - app.send //메세지 전달하기
 - app.sendFile //다른 파일 부르기
 - app.render //ejs 템플릿 사용
 - app.set /ejs 설정 
 - app.use("/main", main) //라우터 경로 등록
 - 

#### bodyParser 명령어
 - app.use(bodyParser.json());
 - app.use(bodyParser.urlencoded({extended:true})) 

#### javascript ajax 명령어
 - var xhr = new XHLHttpRequest();
 - xhr.open('POST', url);
 - xhr.setRequestHeader('Content-Type', "application/json");
 - xhr.send(data);
 - xhr.addEventListener('load', function(){}) 

#### mysql on mac 삭제 명령어  
 - ps -ax | grep mysql
 - stop and kill any MySQL processes
 - brew remove mysql
 - brew cleanup
 - sudo rm /usr/local/mysql
 - sudo rm -rf /usr/local/var/mysql
 - sudo rm -rf /usr/local/mysql*
 - sudo rm ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
 - sudo rm -rf /Library/StartupItems/MySQLCOM
 - sudo rm -rf /Library/PreferencePanes/My*
 - launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
 - edit /etc/hostconfig and remove the line MYSQLCOM=-YES-
 - rm -rf ~/Library/PreferencePanes/My*
 - sudo rm -rf /Library/Receipts/mysql*
 - sudo rm -rf /Library/Receipts/MySQL*
 - sudo rm -rf /private/var/db/receipts/*mysql*
 - restart your computer just to ensure any MySQL processes are killed
 - try to run mysql, it shouldn't work 

#### mysql on mac 설치 명령어 
 - brew doctor and fix any errors
 - brew update
 - brew install mysql
 - unset TMPDIR
 - mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp
 - mysql.server start
 - run the commands Brew suggests, add MySQL to launchctl so it automatically launches at startup 

#### mysql connection on express 
 - [링크](https://expressjs.com/en/guide/database-integration.html) 

#### mysql using express 
 - var mysql = require('express');
 - connection = mysql.createConnection({}); 
 - connection.connect();

# dune과 promise 패턴
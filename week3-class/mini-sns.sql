접속
mysql -u 사용자명 -p dbname;
mysql -u root mysql

---

비밀번호 변경
$ mysqladmin -u root password 새비밀번호
$ mysql -u root mysql

mysql> UPDATE user SET password=password('새비밀번호') WHERE user='root';
mysql> FLUSH PRIVILEGES;

Set Password 이용
SET PASSWORD FOR root=password('새비밀번호');

---

사용자 추가/삭제
mysql> GRANT ALL PRIVILEGES ON dbname.* TO username@localhost IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON dbname.* TO username@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON testdb.* TO 'username'@'%' IDENTIFIED BY 'password' ;

불필요한 사용자 삭제는
mysql> DLETE FROM user WHERE user='username';
mysql> FLUSH PRIVILEGES;

---

데이터베이스 생성/보기

mysql> CREATE DATABASE dbname;

mysql> SHOW DATABASES;

mysql> USE dbname;

mysql> DROP DATABASE [IF EXISTS] dbname;

IF EXISTS 옵션은 비록 데이타베이스가 없더라도 오류를 발생시키지 말라는 의미이다.


테이블 생성/보기

테이블을 생성하고,
mysql> CREATE TABLE tablename (
column_name1 INT,
column_name2 VARCHAR(15),
column_name3 INT );

현재 데이타베이스의 테이블 목록을 보고
mysql> SHOW TABLES;

테이블 구조를 살펴본다.
mysql> EXPLAIN tablesname;
혹은
mysql> DESCRIBE tablename;

이름을 잘못 지정했으면 이름을 변경할 수도 있다.
mysql> RENAME TABLE tablename1 TO tablename2[, tablename3 TO tablename4];

필요 없으면 삭제한다.
mysql> DROP TABLE [IF EXISTS] tablename;



현재 상태 보기

mysql> status

--------------
mysql Ver 11.18 Distrib 3.23.58, for pc-linux (i686)

Connection id: 26
Current database: study
Current user: study@localhost
Current pager: stdout
Using outfile: ''
Server version: 3.23.58
Protocol version: 10
Connection: Localhost via UNIX socket
Client characterset: latin1
Server characterset: euc_kr
UNIX socket: /var/lib/mysql/mysql.sock
Uptime: 2 hours 9 min 59 sec

Threads: 1 Questions: 160 Slow queries: 0 Opens: 28 Flush tables: 1
Open tables: 1 Queries per second avg: 0.021
--------------



INSERT
mysql> INSERT INTO tablename VALUES(값1, 값2, ...);

혹은

mysql> INSERT INTO tablename (col1, col2, ...) VALUES(값1, 값2, ...);


SELECT
mysql> SELECT col1, col2, ... FROM tablename;

컬럼명을 *로 하면 모든 컬럼 의미.

mysql> SELECT col1 AS '성명', col2 AS '국어점수' FROM grade;

컬럼의 이름을 바꿔서 출력.

mysql> SELECT * FROM tablename ORDER BY col1 DESC;
mysql> SELECT col1, korean + math english AS '총점' FROM tablename ORDER BY '총점' ASC;

DESC는 내림차순 ASC는 오름차순.

mysql> SELECT * FROM grade WHERE korean < 90;

조건줘서 SELECT.

mysql> SELECT * FROM grade LIMIT 10;

결과중 처음부터 10개만 가져오기

mysql> SELECT * FROM grade LIMIT 100, 10;

결과중 100번째부터 10개만 가져오기. 첫번째 레코드는 0번 부터 시작한다.

UPDATE
mysql> UPDATE tablename SET col1=새값 WEHER 조건


DELETE
mysql> DELETE FROM tablename WEHRE 조건


mysql에서 쿼리 결과 세로로 보기
-E 옵션을 줘서 실행한다.
$ mysql -E -u root -p mysql


mysql에서 발생한 오류나 경고 다시 보기
mysql> show errors;
mysql> show warnings;

----------------------------------------

use instabookDB;

DROP TABLE IF EXISTS USER_TB;

CREATE TABLE USER_TB(
_ID INT PRIMARY KEY AUTO_INCREMENT,
USER_EAMIL VARCHAR(100) NOT NULL UNIQUE,
USER_PASSWARD VARCHAR(100) NOT NULL,
USER_NAME VARCHAR(100) NOT NULL,
USER_NICKNAME VARCHAR(100) NOT NULL UNIQUE,
USER_REGISTER_DATE DATETIME NOT NULL DEFAULT NOW(),
USER_PROFILE_IMG_URL VARCHAR(1000) DEFAULT "../images/default_profile.png"
);

INSERT INTO USER_TB VALUES (DEFAULT,"dhkim.ce@gmail.com","goszhr12","김동현","우왕키키",DEFAULT,DEFAULT);

SELECT * FROM USER_TB;

DROP TABLE IF EXISTS BOARD_TB; 

CREATE TABLE BOARD_TB(
_ID INT PRIMARY KEY AUTO_INCREMENT,
BOARD_CONTENT VARCHAR(2000) NOT NULL,
BOARD_IMG_URL VARCHAR(1000) NOT NULL DEFAULT "../images/default_board.png",
BOARD_PUBLIC_STATE INT DEFAULT 1,
BOARD_CREATED_DATE DATETIME NOT NULL DEFAULT NOW(),
BOARD_UPDATED_DATE DATETIME NOT NULL DEFAULT NOW(),
LIKE_CNT INT DEFAULT 0,
USER_ID INT NOT NULL,
CONSTRAINT USER_FK FOREIGN KEY (USER_ID) REFERENCES USER_TB (_ID)
);


INSERT INTO BOARD_TB VALUES (DEFAULT,"안녕하세요!",DEFAULT,DEFAULT,DEFAULT,DEFAULT,DEFAULT,1);
SELECT * FROM BOARD_TB;


SELECT * FROM USER_TB U JOIN BOARD_TB B ON U._ID = B.USER_ID;



SELECT * FROM USER_TB U,BOARD_TB B,LIKE_TB L WHERE U._ID = B.USER_ID AND B._ID = L.BOARD_ID;

DROP TABLE IF EXISTS LIKE_TB; 

CREATE TABLE LIKE_TB(
_ID INT PRIMARY KEY AUTO_INCREMENT,
USER_ID INT NOT NULL,
CONSTRAINT USER_LIKE_FK FOREIGN KEY (USER_ID) REFERENCES USER_TB (_ID),
BOARD_ID INT NOT NULL,
CONSTRAINT BOARD_LIKE_FK FOREIGN KEY (BOARD_ID) REFERENCES BOARD_TB (_ID)
);

INSERT INTO LIKE_TB VALUES(DEFAULT,1,1);

SELECT * FROM LIKE_TB;

DELETE FROM LIKE_TB WHERE _ID = 2;


# GITcommand 정리 

---
## TAG관련 명령 
[Git Tag 생성 및 삭제] (http://knight76.tistory.com/entry/Git-Tag-생성-및-삭제)
목록 보기 
$ git tag

local내 tag 생성 
$ git tag 0.0.1 

local내 생성한 tag를 romote에 추가 
$ git push origin 0.0.1

local내 있던 tag들을 한번에 올리기
$ git  push --tags

local 에 있는 tag 삭제. 지우기 
$ git tag -d {tag이름} 
$ git tag -d R201206081844

remote에 있는 tag 삭제
$ git push origin :tags/R201206261146

--- 
## reset과 rebase 명령 

### $git rebase [옮겨야할 커밋위치/브랜치 이름]
#### 자신의 연관된 커밋들을 지정한 곳으로 옮기는 명령어 

### $git reset [옮겨야할 커밋위치/브랜치 이름] 
#### 자신 head를 지정한 곳으로 옮기는 명령어 

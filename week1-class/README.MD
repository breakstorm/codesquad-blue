# 코드스쿼드 1주차 교육 내용 정리 

---

# 교육내용 
   ## 3.13(월)
     ### 수업 오리엔테이션
     ### RegExp, DOM 조작 실습 
 
   ## 3.14(화)
     ### DOM, Event, Ajax, template 실습 
     ### git 간단 실습
 
   ## 3.15(수)
     ### object prototype
     ### closure 
     ### scope 
 
   ## 3.16(목) 
     ### object 설계 
	 ### naverUI 스켈레토 코드 작성
---

# 추가 교육 내용 정리
 ## closure 
 - 정의 : 완료된 함수에서 함수가 호출될 시 상위에 사용된 변수들을 재사용  
 
 - 조심해야할 부분 : 
   -- scope chain : 함수 진행 시 상위에 사용된 변수가 있는지 찾는 행위
 
 - closure 발생케이스 : 

```javascript
 var list = document.querySelectorAll('li'); var show = document.querySelector('.show');
 	for(var i = 0; i < list.length; i++) { list[i].addEventListener('click', function() {
		show.innerText = i + 1 + '                       '; })
	}
 ```
 

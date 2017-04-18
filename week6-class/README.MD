# 코드스쿼드 5주차 교육 내용 정리 
  - [코드스쿼드 1주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week1-class/README.MD)
  - [코드스쿼드 2주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week2-class/README.MD)
  - [코드스쿼드 3주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week3-class/README.MD)
  - [코드스쿼드 4주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week4-class/README.MD)
  - [코드스쿼드 5주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week5-class/README.MD)
  - [코드스쿼드 6주차 교육 내용](https://github.com/breakstorm/codesquad-blue/tree/master/week6-class/README.MD)

---

# 교육내용 
## 4.17(월)
#### 1. Webpack을 사용하는 이유
- 빌드 도구가 있는 이유 : 개발을 위한 번들 작업 이외의 부가적인 기능까지 제공
- 개발계와 운영계의 차이점 : 디버깅 모드 지원과 최적화 지원

#### 2. Mobile 페이지 만들기
- 책에서는 Mobile을 먼저 만들고서 Desktop용 웹페이지를 만들라고 권장 한다. 하지만 효용성이 있는지는 모르겠다. 
- 실제 모바일웹은 APP과의 다른점이 있기 때문에 언제 개발할 것인지 전략적인 접근이 필요하다. 
- 모바일은 모바일에 맞는 페이지를 만들어야 되며, 디버깅은 모바일로 해봐야 정확히 알 수 있다.

#### 3. Blue코스 프로젝트 실시 
- GITHUB 페이지 사용방법 협의
- 프로젝트 목적 및 금주 스프린트 목표 및 세부계획 설정 

---
 
## 4.18(화)
#### 

---

## 4.19(수)
####  


---

## 4.20(목)
#### 없음.


---

## 4.21(금)

---

## 4.22(토)
####  


---

## 4.23(일)
#### 
   
---

# 추가 공부 내용 정리  
## React 
- Rendering방법
- props, state
- Event
- Component & Module
- CSS작업
- List & Key
  - 여러개의 컴포넌트를 랜더링 할때 필요한 기술(문법) : key를 항상 입력하자
  - 표현방법1 : 배열로 받고서 배열을 조작하여 통으로 호출 
```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```
  - 표현방법2 : 변수값으로 저장하지 않고 1줄에 선언 및 호출을 사용
```
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```
  - 그렇다면 같은 컴포넌트를 각각의 개체로 동작하도록 호출할려면 어떻게 하지?
- Lifting state up
  + 형제 컴포넌트 끼리 동기화를 위하여 상위 부모 컴포넌트에게 값을 전달하여 처리하는 것을 의미 
- Composition & Inheritance 
  + react에서는 상속 보다는 구성(composition)을 사용하여 재사용을 권장

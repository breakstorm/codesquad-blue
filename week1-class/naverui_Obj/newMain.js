/*코딩시 생각나는 점들
 *Object.create()으로 생성예정, 헤더부분
 *구독취소기능 어떻게 해야 하지?
 *이벤트 기능들은 만들어지면 사용할 수 잇는것이 아니라, 함수를 사용해야 한다.
 *프로그램 개선과정을 글로 정리해서 올리기
 *매번 이벤트가 끝날때 마다 모든 이벤트들을 다시 호출을 하는것이 성능에 얼마나 영향이 있을까?
 *이벤트를 언제 선언해야 하는지 잘 모르겠음.
 */

 // 크롱 개선사항 
 // 1. 데이터모델 부분은 직접 접근하지 않고 함수를 호출하여 받아오기 
 // 2. 함수의 재사용성을 높이기 위해 개선. (관계는 내부에서 부르고 외부에서 함수가 시행되는 로직)
 // 3. 이벤트 함수들은 모아서 실행을 하지 말고. 초기화 단계에서 내부에서 실행할 수 있도록 한다.
var headerObj = {
	leftrightButtonEvent: function(){
		//해당 부분 셀렉트
		//이벤트 리스너 실행
		//왼쪽, 오른쪽 버튼 여부 확인
		//테스트완료. 3.17 14:10.
		debugger;
			var right = document.querySelector('.right');
			var left = document.querySelector('.left');

			left.addEventListener("click", function(evt){
				// *구독중인 데이터의 갯수 필요
				var length = dataObj.getSubscriptionCount();
				//인덱스값 -1
				//인덱스값이 전체 범위에서 벗어나면 제일 끝값으로 변경
				//articleObj.readArticleData 함수 실행

				dataObj.currentIndex--;
				if(dataObj.currentIndex < 0){
					dataObj.currentIndex = length - 1;
				}
				articleObj.readArticleData()
			});
			right.addEventListener("click", function(evt){
				// *구독중인 데이터의 갯수 필요
				var length = dataObj.getSubscriptionCount();

				//인덱스값 +1
				//인덱스값이 전체 범위에서 벗어나면 제일 처음값으로 변경
				//articleObj.readArticleData 함수 실행

				dataObj.currentIndex++;
				if(dataObj.currentIndex > length-1){
					dataObj.currentIndex = 0;
				}
				articleObj.readArticleData()
			})
			//다시 선언할 필요 없음.
			// utilObj.eventList()
	}
	// loadHeaderTemplate: function(){

	// }
}

var leftNavObj = {
	readNavData : function(){
		//aJax.addEventListener("load")를 통하여 실행

		//해당 부분 DOM셀렉트
		//해당 부분 HTML 코드 초기화
		//JSONData 으로 부터 데이터 읽기
		// + dataObj.JSONData.subscription = "Y" 인 경우만 진행
		//조건에 만족하는 경우 JSONData 수만큼 반복문으로 HTML코드 생성하기
		//셀렉트한 변수에 생성한 HTML 코드 삽입
		debugger;
		var leftNav = document.querySelector(".mainArea > nav > ul");
		leftNav.innerHTML = "";
		var liHTML = "<li>"
		var length = dataObj.JSONData.length;
		for(var i = 0; i < length; i++){
			if(dataObj.JSONData[i].subscription === "Y"){
				liHTML = liHTML + dataObj.JSONData[i].title + "</li>"
				leftNav.insertAdjacentHTML('beforeend',liHTML);
				liHTML = "<li>"
			}
		}
		//이벤트는 실행하는 함수 실행?!
	},
	clickNavDataEvent : function(){
		//li 부분 셀렉트
		//for문을 돌면서 이벤트리스너 선언
		//이벤트 발생시 readArticleData 실행
		//이벤트 발생시 해당 li bold 처리 HTML 코드 삽입
		var leftNav = document.querySelector(".mainArea > nav > ul");
		// *구독중인 데이터의 갯수 필요
		var length = leftNav.children.length;
		for(var i = 0; i < length; i++){
			leftNav.children[i].addEventListener("click",function(evt){
				debugger;
				//해당 i순번을 dataObj.currentIndex 입력
				dataObj.currentIndex = [].indexOf.call(this.parentNode.children, this);
				articleObj.readArticleData()
			})
		}

		// utilObj.eventList()
	}
	// loadLeftNavTemplate: function(){

	// }
}

var articleObj = {
	readArticleData : function(){
		//leftNavObj.clickNavData()를 통하여 실행
		//aJax.addEventListener("load")를 통하여 실행

		//해당 부분 셀렉트
		//해당 부분 HTML 코드 초기화
		//읽어올수 있는 신문기사 존재하는지 확인하기
		//템플릿 불러오기
		//JSONData 으로 부터 데이터 읽기
		//JSONData[currentIndex]가 subscription="Y" 데이터만 읽기 아닐시 currentIndex 다시 부르기
		// -아닐경우 currentIndex++ 하고서 전체의 데이터수를 넘는지 확인하기
		//JSONData 수만큼 반복문으로 HTML코드 생성하기
		//셀렉트한 변수에 생성한 HTML 코드 삽입
		debugger;
		var contentArticle = document.querySelector(".content");
		contentArticle.innerHTML = "";
		//구독하는 데이터가 있는지 확인
		if(!dataObj.getSubscriptionCount()) return false;

		this.loadArticleTemplate();
		if(dataObj.JSONData[dataObj.currentIndex].subscription === "N"){
			dataObj.currentIndex++;
			var length = dataObj.JSONData.length;
			if(dataObj.currentIndex >= length) dataObj.currentIndex = 0
			this.readArticleData();
		}
		var tempArticle = dataObj.JSONData[dataObj.currentIndex];
		var tempHTML = contentArticle.innerHTML;
		tempHTML = tempHTML.replace("{title}",tempArticle.title);
		tempHTML = tempHTML.replace("{imgurl}",tempArticle.imgurl);
		var tempHTMLString = "";
		for(var i = 0; i < tempArticle.newslist.length; i++){
			tempHTMLString += '<li>' + tempArticle.newslist[i] + '</li>';
		}
		tempHTML = tempHTML.replace("{newsList}",tempHTMLString);
		contentArticle.innerHTML = tempHTML;

	},
	closeArticleDataEvent : function(){
		//JSONData 해당하는 부분 subscription N 표시
		//leftNavObj.readNavData() 실행
		//articleObj.readArticleData() 실행
		var content = document.querySelector(".content");
		content.addEventListener("click", function(evt){
			debugger;
			if(evt.target.tagName ==="BUTTON" || evt.target.tagName ==="A"){
				dataObj.JSONData[dataObj.currentIndex].subscription = "N";
				leftNavObj.readNavData();
				articleObj.readArticleData()
			}
		})
	},
	loadArticleTemplate: function(){
		//aJax.addEventListener("load")를 통하여 실행

		// id=newTemplate에 있는 innerHTML 값을
		// class=content의 innerHTML로 입력
		var template = document.querySelector("#newsTemplate");
		var templateHTML = template.innerHTML;
		var content = document.querySelector(".content");
		content.innerHTML = templateHTML;
	}
}

var dataObj = {
	currentIndex: 0,
	ajaxUrl: "",
	JSONData: [
		/*
		{
			index: ,
			title: ,
			img: ,
			article: ,
			subscription:
		},
		{},
		{}
		*/
	],
	readAjaxData: function(url){
		//document.addEventListener("DOMContentloaded")를 통하여 실행

		// url 필요
		// utilObj.runAjax() 실행
		utilObj.runAjax(url);
	},
	setJSONData: function(rawData){
		//aJax.addEventListener("load")를 통하여 실행

		// 가져온 값 객체화 시키기
		// rawData값을 배열에 넣기
		// 신규 key-value 넣기(index, subscription)
		this.JSONData = rawData;
		for(var i = 0; i < rawData.length; i++){
			this.JSONData[i].index = i;
			this.JSONData[i].subscription = "Y"
		}

	},
	getSubscriptionCount: function(){
		//headerObj.leftrightButtonEvent()를 통하여 실행

		//전체 JSONData를 순회하면서 subscription의 숫자를 리턴한다
		debugger;
		var subscriptionCount = 0;
		for(var i = 0; i < dataObj.JSONData.length; i++){
			if(dataObj.JSONData[i].subscription === "Y"){
				subscriptionCount++;
			}
		}

		return subscriptionCount;
	}
}

var utilObj = {
	runAjax: function(url){
		//oReq 선언
		//open, send, 로드이벤트 실시
		//로드 이벤트 return JSONData
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", function(evt){
			//-- ajax에서 JSON오브젝트 추가 선언
			//-- ajax에서 초기값 불러오기
		  	//.  -- 템플릿 불러오기
		 	//.  -- lefNav 불러오기
		  	//.  -- artile 불러오기
		  	debugger;
		  	var tempData = evt.target.responseText;
		  	var parseData = JSON.parse(tempData);
		  	dataObj.setJSONData(parseData);
		  	articleObj.loadArticleTemplate();
		  	//테스트완료 3.16. 19:50
		  	leftNavObj.readNavData();
		  	//테스트완료 3.16 20:22
		  	articleObj.readArticleData();
		  	//테스트완료 3.16 21:13
		  	//이벤트 정의하기
			utilObj.eventList()
		})
		oReq.open("GET", url);
		oReq.send();
	},
	//이벤트함수 정의 공간
	eventList: function(){
		headerObj.leftrightButtonEvent();
		leftNavObj.clickNavDataEvent();
		articleObj.closeArticleDataEvent();
	}
}

//어플리케이션 실행 순서 정의 DOMcontnentedloaded
document.addEventListener("DOMContentLoaded", function(evt){
	//시작

	//url값 입력
	//JSON데이터 가져오기
	debugger;
	dataObj.ajaxUrl = "./data/newslist.json";
	dataObj.readAjaxData(dataObj.ajaxUrl);
	
	
});
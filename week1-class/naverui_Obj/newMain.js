//Object.create()으로 생성예정, 헤더부분
//구독취소기능 어떻게 해야 하지?

var headerObj = {
	leftrightButtonEvent: function(){
		//해당 부분 셀렉트
		//이벤트 리스너 실행
		//왼쪽, 오른쪽 버튼 여부 확인

			//article 함수 연계
	},
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
		//템플릿 불러오기
		//JSONData 으로 부터 데이터 읽기
		//JSONData 수만큼 반복문으로 HTML코드 생성하기
		//셀렉트한 변수에 생성한 HTML 코드 삽입
		debugger;
		var contentArticle = document.querySelector(".content");
		contentArticle.innerHTML = "";
		this.loadArticleTemplate();
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
		})
		oReq.open("GET", url);
		oReq.send();
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
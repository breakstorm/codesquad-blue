//Object.create()으로 생성예정, 헤더부분
var headerObj = {
	leftrightButtonEvent: function(){
		//해당 부분 셀렉트
		//이벤트 리스너 실행
		//왼쪽, 오른쪽 버튼 여부 확인

			//article 함수 연계
	};
}

var leftNavObj = {
	readNavData : function(){
		//해당 부분 DOM셀렉트
		//해당 부분 HTML 코드 초기화
		//JSONData 으로 부터 데이터 읽기
		//JSONData 수만큼 반복문으로 HTML코드 생성하기
		//셀렉트한 변수에 생성한 HTML 코드 삽입

		//이벤트는 실행하는 함수 실행?!
	},
	clickNavDataEvent : function(){
		//li 부분 셀렉트
		//for문을 돌면서 이벤트리스너 선언
		//이벤트 발생시 readArticleData 실행
		//이벤트 발생시 해당 li bold 처리 HTML 코드 삽입
	}
}

var articleObj = {
	readArticleData : function(){
		//leftNavObj.clickNavData()를 통하여 실행
		//해당 부분 셀렉트
		//해당 부분 HTML 코드 초기화
		//JSONData 으로 부터 데이터 읽기
		//JSONData 수만큼 반복문으로 HTML코드 생성하기
		//셀렉트한 변수에 생성한 HTML 코드 삽입
	},
	closeArticleDataEvent : function(){
		//JSONData 해당하는 부분 subscription N 표시
		//leftNavObj.readNavData() 실행
		//articleObj.readArticleData() 실행
	}
}

var dataObj = {
	currentIndex: 0,
	JSONData: {
		/*
		data1: {},
		data2: {},
		data3: {}
		*/
	},
	readAjaxData: function(){
		// url 필요
		// utilObj.runAjax() 실행
		// 가져온 값 객체화 시키기
	}
}

var utilObj = {
	runAjax: function(url){
		//oReq 선언
		//open, send, 로드이벤트 실시
		//로드 이벤트 return JSONData
	}
}

//어플리케이션 실행 순서 정의 DOMcontnentedloaded
document.addEventListener("DOMContentLoaded", function(evt){
	//dataObj.
});
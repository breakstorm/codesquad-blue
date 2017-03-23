function Model(){
	this.currentSubListIndex = 0;
	this.subList= [];
	this.unsubList= [];
	this.jsonData=[
	
	//  * title:
	//  * imgurl:
	//  * newlist:
	//  * index:
	//  * subscription:
	 
	]
}
var ModelObj = {
	//구독배열 반환
	getAllSubList: function(){
		return this.subList;
	},

	//구독배열 삭제
	removeSubList: function(index){
		return this.subList.splice(index,1);
	},

	//구독배열 입력
	addSubList: function(value){
		this.subList.push(value);
	},

	//구독배열 길이 반환
	getSubLength: function(){
		return this.subList.length;
	},

	//미구독배열 반환
	getAllUnsubList: function(){
		return this.unsubList;
	},


	//미구독배열 삭제
	removeUnsubList: function(index){
		return this.unsubList.splice(index,1);
	},

	//미구독배열 입력
	addUnsubList: function(value){
		this.unsubList.push(value);
	},

	//미구독배열 길이 반환
	getUnsubLength: function(){
		return this.unsubList.length;
	},

	//전체 JsonData값 반환
	getAllJsonData: function(){
		return this.jsonData;
	},

	//1개의 JsonData값 반환
	getJsonData: function(index){
		return this.jsonData[index];
	},

	//currentSubListIndex값 반환
	getCurrentSubListIndex: function(){
		return this.currentSubListIndex;
	},

	//currentSubListIndex값 입력
	setCurrentSubListIndex: function(index){
		this.currentSubListIndex = index;
	},

	setjsonData: function(evt){
		debugger;
		var data = JSON.parse(evt.target.responseText);
		this.jsonData = data;
		for(var i = 0; i < data.length; i++){
			this.jsonData[i].index = i;
			this.jsonData[i].subscription = "Y";
		}

		this.setList();
		this.init();
		//테스트완료 15:30
	},

	setList: function(){
		debugger;
		var temp = this.jsonData;
		for(var i = 0; i < temp.length; i++){
			temp[i].subscription === "Y" ? this.subList.push(i) : this.unsubList.push(i);
		}
		//테스트완료 15:47
	},

	init: function(){
	//ajax 데이터 가공
	//선언된 객체 init함수 실행
	debugger;
	myHead.init();
	myNav.init();
	myArticle.init();
	myCompany.init();
	}
}

var HeadObj = {
	init: function(){
		//head부분 렌더링

		//해당 오브젝트에 있는 이벤트 선언
		this.leftrightButtonEvent();
		this.MyNewslistButtonEvent();
		this.sublistButtonEvent();
	},

	// //head페이지 렌더링
	// render: function(){

	// },

	//페이징 버튼 이벤트
	leftrightButtonEvent: function(){
		debugger;
		var button = document.querySelector(".btn")
		button.addEventListener("click", function(evt){
			debugger;
			if(evt.target.className === "left"){
				console.log("left");
				//currentSubListIndex을 이용하여 구독리스트 인덱스 가져오기
				//전체 길이에서 가져온인덱스-- 넘는지 확인
				//넘으면 마지막, 안넘으면 --
				var index = myData.getCurrentSubListIndex();
				var list = myData.getAllSubList();
				// var index = list.indexOf(current);
				index === 0 ? index = list.length-1 : index--
				myData.setCurrentSubListIndex(index);
				myArticle.renderArticle(index);
			}
			if(evt.target.className === "right"){
				console.log("right");
				//currentSubListIndex을 이용하여 구독리스트 인덱스 가져오기
				//전체 길이에서 가져온인덱스++ 넘는지 확인
				//넘으면 0, 안넘으면 ++
				var index = myData.getCurrentSubListIndex();
				var list = myData.getAllSubList();
				// var index = subList.indexOf(current);
				index === list.length-1 ? index = 0 : index++
				myData.setCurrentSubListIndex(index);
				myArticle.renderArticle(index);
			}
		});
		//테스트완료 18:17
	},

	//구독한 신문 보기 이동
	MyNewslistButtonEvent: function(){
		console.log("newslist");
		var mine = document.querySelector("#headMine");
		mine.addEventListener("click", function(evt){
			myCompany.renderMyNewsCompany();
		})
	},

	//신문사 리스트 보기 이동
	sublistButtonEvent: function(){
		var mine = document.querySelector("#headTotal");
		mine.addEventListener("click", function(evt){
			myCompany.renderNewsCompany();
			// 테스트완료
		})
	}


}

var NavObj = {
	init: function(){
		//Nav 렌더링
		this.renderNav();

		//해당 오브젝트에 있는 이벤트 선언
		this.newsClickEvent();
	},

	//nav페이지 렌더링
	renderNav: function(){
		debugger;
		//HTML 스트링 코드를 한개씩 만들어서
		//해당 base.innerHTML에 삽입한다.
		var base = document.querySelector(".mainArea>nav>ul");
		var result = "";


		//구독배열 불러오기 -> 반복문 -> 해당하는 인덱스의 데이터가져오기
		var list = myData.getAllSubList();
		list.forEach(function(v,i,a){
			var tempData = myData.getJsonData(v);
			result += "<li>" + tempData.title + "</li>";
		})
		base.innerHTML = result;
		//테스트완료 16:08
	},

	//news클릭 이벤트
	newsClickEvent: function(){
		// 전체 리스트 반복문
		// 해당 리스트 선택시 이벤트 발
		debugger;
		var leftNav = document.querySelector(".mainArea>nav>ul")
		var list = myData.getAllSubList()
		var leftLength = list.length;
		for(let i = 0; i < leftLength; i++){
			leftNav.children[i].addEventListener("click", function(evt){
				debugger;
				var index = [].indexOf.call(this.parentNode.children, this);
				myData.setCurrentSubListIndex(index);
				myArticle.renderArticle(index);
			});
		}
		//테스트완료 19:10
	},

	//newslistTemplate 불러오기
	setNewslistTemplate: function(){
	
		
	}

}

var ArticleObj = {
	init: function(){
		debugger;
		var list = myData.getAllSubList();
		var index;
		if(list.length){
			index = myData.getCurrentSubListIndex();
			this.renderArticle(index);	
		}

		//해당 오브젝트에 있는 이벤트 선언
		this.unsubButtonEvent();

	},

	//Article페이징 렌더링
	renderArticle: function(index){
		//베이스 셀레트 하기
		//텍스트 replace를 통하여 글자 치환
		// - title
		// - img
		// - newList (기사 리스트 만들기/치환하기)
		debugger;
		var base = document.querySelector(".content");
		base.innerHTML = "";
		this.setNewsTemplate();
		var baseHTML = base.innerHTML;
		var list = myData.getAllSubList();
		var data = myData.getJsonData(list[index]);
		var resultArticle = "";

		data.newslist.forEach(function(v,i,a){
			resultArticle += "<li>" + v + "</li>";
		})

		baseHTML = baseHTML.replace("{title}",data.title);
		baseHTML = baseHTML.replace("{imgurl}",data.imgurl);
		baseHTML = baseHTML.replace("{newsList}", resultArticle);

		base.innerHTML = baseHTML;
		//테스트완료 16:37
	},

	//구독 해지 버튼 이벤트
	unsubButtonEvent: function(){
		//데이터 객체의 구독리스트 제거
		//leftNav 새로그리기
		//article 새로그리기
		debugger;
		var content = document.querySelector(".content");
		content.addEventListener("click", function(evt){
			debugger;
			
			//예외경우. 
			if(evt.target.className==="unsub"){
				var index = myData.getCurrentSubListIndex();
				var remove = myData.removeSubList(index);
				myData.addUnsubList(remove.pop());
				myNav.renderNav();
				var list = myData.getAllSubList();
				
				//예외경우. 마지막 신문사를 해지 하는 겨우
				if(list.length === index){
					index--;
					myData.setCurrentSubListIndex(index)
				}

				myArticle.renderArticle(index);

				//구독해지 후. head이벤트 누를시 제대로 작동 되지 않음. 동작하지 않음.
				//구독해지 후. nav이벤트 누를시 제대로 작동 되지 않음. 기존의 배열로 돌아가게 되어있음
				//myNav 이벤트 재선언
				myNav.newsClickEvent();
				// myHead.leftrightButtonEvent();
			}
		})
		

	},

	//newsTemplate 불러오기
	setNewsTemplate: function(){
		debugger;
    	var article = document.querySelector(".content");
		var template = document.querySelector("#newsTemplate").innerHTML;
		article.innerHTML = template;

		//테스트완료 15:00
	}

	
}

var NewsCompany = {
	init: function(){
		this.renderNewsCompany();
		//해당 오브젝트에 있는 이벤트 선언
		
	},

	// //newsCompanyTemplate 불러오기
	// setNewsCompanyTemplate: function(){

	// },

	//전체신무사 리스트 렌더링
	renderNewsCompany: function(){
		//head 전체언론사 이벤트 호출
		debugger;
		//HTML 스트링 코드를 한개씩 만들어서
		//해당 base.innerHTML에 삽입한다.

		var head = document.querySelector(".newsCompany");
		var title = "<p>전체언론사</p><ul></ul>"
		head.innerHTML = title;


		var base = document.querySelector(".newsCompany>ul");
		var result = "";


		//전체 구독배열 불러오기 -> 반복문 -> 해당하는 인덱스의 데이터가져오기
		var list = myData.getAllJsonData();
		list.forEach(function(v,i,a){
			// var tempData = myData.getJsonData(i);
			result += "<li>" + v.title + "</li>";
		})
		base.innerHTML = result;

		//테스트완료 15:30
	},

	//리스트에 있는 신문사 토글 이벤트
	toggleNewsCompany: function(){
		// 토글
	},

	//자신이 구독하고 있는 신문사 렌더링
	renderMyNewsCompany: function(){
		//head MY언론사 이벤트 호출
		debugger;
		//HTML 스트링 코드를 한개씩 만들어서
		//해당 base.innerHTML에 삽입한다.
		var head = document.querySelector(".newsCompany");
		var title = "<p>my뉴스</p><ul></ul>"
		head.innerHTML = title;

		var base = document.querySelector(".newsCompany>ul");
		var result = "";



		//subList 배열 불러오기 -> 반복문 -> 해당하는 인덱스의 데이터가져오기
		var list = myData.getAllSubList();
		list.forEach(function(v,i,a){
			var tempData = myData.getJsonData(v);
			result += "<li>" + tempData.title + "</li>";
		})
		base.innerHTML = result;
	}

}

var UtilObj = {
	runAjax: function(url, fnc){
		debugger;
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", fnc);
		oReq.open("GET", url);
		oReq.send();
	}
}



document.addEventListener("DOMContentLoaded", function(evt){
	var url = "./data/newslist.json";
	debugger;

	//각 개체 선언 및 init() 호출
	myData = new Model();
	Object.setPrototypeOf(myData, ModelObj);

	myHead = Object.create(HeadObj);
	myNav = Object.create(NavObj);
	myArticle = Object.create(ArticleObj);
	myCompany = Object.create(NewsCompany);
	
	//Ajax 호출
	UtilObj.runAjax(url, myData.setjsonData.bind(myData));
	

})
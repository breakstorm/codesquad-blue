function Model(){
	this.currentIndex = 0;
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

	//미구독배열 반환
	getAllUnsubList: function(){
		return this.unsubList;
	},

	//구독배열 길이 반환
	getSubLength: function(){
		return this.subList.length;
	},

	//미구독배열 길이 반환
	getUnsubLength: function(){
		return this.unsubList.length;
	},

	//index JsonData값 반환
	getJsonData: function(index){
		return this.jsonData[index];
	},

	//currentIndex값 반환
	getCurrentIndex: function(){
		return this.currentIndex;
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
		this.render();
		//해당 오브젝트에 있는 이벤트 선언
		this.leftrightButtonEvent();
		this.newslistButtonEvent();
		this.sublistButtonEvent();
	},

	//head페이지 렌더링
	render: function(){

	},

	//페이징 버튼 이벤트
	leftrightButtonEvent: function(){
		console.log("left");
	},

	//구독한 신문 보기 이동
	newslistButtonEvent: function(){
		console.log("newslist");
	},

	//신문사 리스트 보기 이동
	sublistButtonEvent: function(){
		var mine = document.querySelector("#headTotal");
		mine.addEventListener("click", function(evt){
			console.log("조금후에 개발 하겠습니다.");
			myCompany.renderNewsCompany();
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
			var tempData = myData.getJsonData(i);
			result += "<li>" + tempData.title + "</li>";
		})
		base.innerHTML = result;
		//테스트완료 16:08
	},

	//news클릭 이벤트
	newsClickEvent: function(){

	},

	//newslistTemplate 불러오기
	setNewslistTemplate: function(){
	
		
	}

}

var ArticleObj = {
	init: function(){
		debugger;
		this.setNewsTemplate();

		var list = myData.getAllSubList();
		var index;
		if(list.length){
			index = list[0];
			this.renderArticle(index);	
		}

		//해당 오브젝트에 있는 이벤트 선언

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
		var baseHTML = base.innerHTML;
		var data = myData.getJsonData(index);
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
		var base = document.querySelector(".newsCompany>ul");
		var result = "";


		//구독배열 불러오기 -> 반복문 -> 해당하는 인덱스의 데이터가져오기
		var list = myData.getAllSubList();
		list.forEach(function(v,i,a){
			var tempData = myData.getJsonData(i);
			result += "<li>" + tempData.title + "</li>";
		})
		base.innerHTML = result;

		//테스트완료 15:30
	},

	//리스트에 있는 신문사 토글 이벤트
	toggleNewsCompany: function(){
		// 토글
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
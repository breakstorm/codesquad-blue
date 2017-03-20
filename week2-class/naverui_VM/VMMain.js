function Model(){
	this.currentIndex: 0;
	this.subList: [];
	this.unsubList: [];
	this.jsonData:[
	/*
	 * title:
	 * img:
	 * article:
	 * index:
	 * subscription:
	 */
	];
}
var ModelObj = {
	getAllSubList: function(){
		return this.subList;
	}
	getAllUnsubList: function(){
		return this.unsubList;
	}
	getSubLength: function(){
		return this.subList.length;
	}
	getUnsubLength: function(){
		return this.unsubList.length;
	}
	getSubList: function(index){
		return this.jsonData[index];
	}
	getUnsubList: function(index){
		return this.jsonData[index];
	}
	setjsonData: function(responsetext){
		this.jsonData = responsetext;
		for(var i = 0; i < responsetext.length; i++){
			this.jsonData[i].index = i;
			this.jsonData[i].subscription = "Y";
		}
	}
	setList: function(){
		var temp = this.jsonData;
		for(var i = 0; temp.length; i++){
			temp[i].subscription === "Y" ? this.subList.push(i) : this.unsubList.push(i);
		}
	}
}

var HeadObj = {
	init: function(){
		//해당 오브젝트에 있는 이벤트 선언
		this.leftrightButtonEvent();
		this.newslistButtonEvent();
		this.sublistButtonEvent();
	}

	//head페이지 렌더링
	render: function(){

	}

	//페이징 버튼 이벤트
	leftrightButtonEvent: function(){

	}

	//구독한 신문 보기 이동
	newslistButtonEvent: function(){

	}

	//신문사 리스트 보기 이동
	sublistButtonEvent: function(){

	}
}

var NavObj = {
	init: function(){
		//해당 오브젝트에 있는 이벤트 선언
		
	}

	//nav페이지 렌더링
	renderNav: function(){

	}

	//news클릭 이벤트
	newsClickEvent: function(){

	}


}

var ArticleObj = {
	init: function(){
		//해당 오브젝트에 있는 이벤트 선언
	}

	//Article페이징 렌더링
	renderArticle: function(){

	}

	//구독 해지 버튼 이벤트
	unsubButtonEvent: function(){

	}

	//newslistTemplate 불러오기
	setNewslistTemplate: function(){

	}

	//newsTemplate 불러오기
	setNewsTemplate: function(){

	}

	//newsCompanyTemplate 불러오기
	setNewsCompanyTemplate: function(){

	}
}

var NewsCompany = {
	init: function(){
		//해당 오브젝트에 있는 이벤트 선언
		
	}

}

var UtilObj = {
	runAjax: function(url, fnc){
		var oReq = new XMLHttpRequest();

	}
}

document.addEventListener("DOMContentloaded", function(evt){
	var url = "./data/newslist.json";

	//각 개체 선언 및 init() 호출
	var myData = new Model();
	Object.setPrototypeOf(myData, ModelObj);

	var myHead = new HeadObj();
	myHead.init();

	//UtilObj.runAjax( ) 실행 

})
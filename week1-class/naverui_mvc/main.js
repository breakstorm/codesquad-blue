var JSONdata;

document.addEventListener("DOMContentLoaded", function(evt){
    //템플릿 가져오기 실행
    setEmptyTemplate();
	//JSON데이터파일 가져오기
	getJSONData();
});

function setEmptyTemplate(){
	var template = document.querySelector("#newsTemplate");
	var content = document.querySelector(".content");
	var txt = template.innerHTML; 
	content.insertAdjacentHTML('beforeend', txt);
};

function getJSONData(){
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", function(evt){
		var tempObj = evt.target.responseText;
		JSONdata = JSON.parse(tempObj);	
//		console.log(JSONdata)
		//메인 함수 실행
		main();
		setDefaultContent();
	});
	oReq.open("GET", "http://127.0.0.1:8000/week1-class/naverui_mvc/data/newslist.json");
	oReq.send();
};

//function reqListener(){
//	console.log(this.responseText);
//	
//	var data = JSON.parse(this.responseText);
//	JSONdata = JSON.parse(this.responseText);
//}

function main(){
	//nav > ul에 텍스트 리스트 업
	setDefaultNav();
	//JSONdata 1번째값 content에 리스트 업
	setDefaultContent(0);
    sideNavClickEvent();
}


function setDefaultNav(){
	//넣야야 하는 위치 값 만들기
	//넣어야 하는 스트링 값 만들기
	//해당 위치에 insertAdjacentHTML로 넣기
	var totalHTML = "<div>전체 언론사</div>"
	var base = document.querySelector("nav>ul");
	base.insertAdjacentHTML('beforeend',totalHTML);
	var tempHTML = "<li>"
	JSONdata.forEach(function(v,i,a){
		tempHTML = tempHTML + v.title + "</li>";
		base.insertAdjacentHTML('beforeend',tempHTML);
		tempHTML = "<li>";
	});
}

function setDefaultContent(index){
	var tempObj = JSONdata[index];
	console.log(index, tempObj);
	//content 클래스으 안의 HTML을 스트링으로 받아온다.
	//스트링에서 replace를 사용하여 템플릿 적용을 한다.
	var base = document.querySelector(".content")
	var baseHTML = base.innerHTML;
	baseHTML = baseHTML.replace("{title}", tempObj.title);
	baseHTML = baseHTML.replace("{imgurl}",tempObj.imgurl);
	
	articlesHTML = '';
	articles = tempObj.newslist;
	for (var i=0; i < articles.length; i++){
		articlesHTML += '<li>'+articles[i]+'/<li>';
	}
	baseHTML = baseHTML.replace("{newsList}",articlesHTML);
	base.innerHTML = baseHTML;
	console.log(baseHTML);
}


function sideNavClickEvent(){
	var sideNavItem = document.querySelector('nav').querySelectorAll('li');
	for (var i=0; i < sideNavItem.length; i++){
		sideNavItem[i].addEventListener("click", function(evt){
			index = [].indexOf.call(this.parentNode.children, this);
			showArticleBox(index);
		});
	};
}

function pageNavClickEvent(){
	var leftbtn = document.querySelector('.left');
	var rightbtn = document.querySelector('.right');
	leftbtn.addEventListener("click", function(evt){
		//s
		index 
		showArticleBox(index);
	});
	
	
	
}

function showArticleBox(index){
	var base = document.querySelector(".content");
			base.innerHTML = "";
			setEmptyTemplate();
			
			var base = document.querySelector(".content");		
			setDefaultContent(index-1);
}


	

  



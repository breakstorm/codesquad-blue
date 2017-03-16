var JSONdata;
var index = 0;

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
//		setDefaultContent();
	});
	oReq.open("GET", "./data/newslist.json");
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
	setDefaultContent(index);
	
	//발생이벤트 정의
    sideNavClickEvent();
	pageNavClickEvent();
	closeButtonClickEvent();
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

	//content 클래스으 안의 HTML을 스트링으로 받아온다.
	//스트링에서 replace를 사용하여 템플릿 적용을 한다.
	var base = document.querySelector(".content")
	var baseHTML = base.innerHTML;
	baseHTML = baseHTML.replace("{title}", tempObj.title);
	baseHTML = baseHTML.replace("{imgurl}",tempObj.imgurl);
	
	articlesHTML = '';
	articles = tempObj.newslist;
	for (var i=0; i < articles.length; i++){
		articlesHTML += '<li>'+articles[i]+'</li>';
	}
	baseHTML = baseHTML.replace("{newsList}",articlesHTML);
	base.innerHTML = baseHTML;

}


function sideNavClickEvent(){
	var sideNavItem = document.querySelector('nav').querySelectorAll('li');
	for (var i=0; i < sideNavItem.length; i++){
		sideNavItem[i].addEventListener("click", function(evt){
			index = [].indexOf.call(this.parentNode.children, this);
			//유사코드 배열이 아닌 자료형에서 배열의 함수를 사용 하는 방법
			showArticleBox(index);
		});
	};
}

function pageNavClickEvent(){
	var leftbtn = document.querySelector('.left');
	var rightbtn = document.querySelector('.right');
	leftbtn.addEventListener("click", function(evt){
		index--;
		if(index < 1) index = JSONdata.length;
//		index = index%JSONdata.length +1;
		showArticleBox(index-1);
	});
	rightbtn.addEventListener("click", function(evt){
		index++;
		if(index > JSONdata.length) index = 1; //안좋은 코드, 하드코딩
		showArticleBox(index-1);
	});
	
	
	
}

function showArticleBox(index){
	var base = document.querySelector(".content");
			base.innerHTML = "";
			setEmptyTemplate();
			
			var base = document.querySelector(".content");		
			setDefaultContent(index);
}

function closeButtonClickEvent(){
	var closebtn = document.querySelector(".content");
	closebtn.addEventListener("click",function(evt){
		if(evt.target.tagName !== "BUTTON" && evt.target.tagName !== "A") return false;
		//해당하는 JSONdata 자료 날리기
		JSONdata.splice(index,1);
		//Nav메뉴 다시 그리기
		showNavList();
		//Content내용 다시 그리기
		showArticleBox(index);
	})

}

function showNavList(){
	var base = document.querySelector("nav>ul");
	base.innerHTML = "";
	setDefaultNav();
}
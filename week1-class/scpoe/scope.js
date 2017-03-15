//javascript
//scope chain class 자료

var name = 'play ground';
function home(){
	var homeName = 'my house';
	console.log(name);
	console.log(homeName);
}
//home();

function doubleHome(){
	debugger;
	var homeName = 'my house';
	function printName(){
		var nickName = 'crong house';
		console.log(homeName);
	}
	printName();
	console.log(name);
	console.log(homeName);
	console.log(nickName);
}
//doubleHome();
//console.log();

function tripleHome(){
	var homeName = 'my house';
	for(var i = 0; i<1000; i++){}
	console.log(i);
}
//tripleHome();

function fourthHome(){
	var homeName = 'my house';
	console.log(i);
	for(var i = 0; i < 1000; i++){}
	console.log(i);
}
//fourthHome();

function fivthHome(){
	var i;
	var homeName = 'my house';
	for(i=0; i<1000; i++){}
}
//fivthHome();

function firstLet(){
	var homeName = 'my house';
	for(let i = 0; i < 1000; i++){
		debugger;
	}
	console.log(i);
}
//let은 블럭 내에서만 사용이 가능하다. 같은 함수안에 있더라도 다른 블럭이면 사용 불가능.
//firstLet();


function firstConst(){
	debugger;
	const homeName = 'my house';
	homeName = 'your house';
	console.log(homeName);
}
//const은 재정의(값변경)을 할 수 없다.
firstConst();

function secondConst(){
	const list = ['john', 'adele', 'hary'];
	list.push('tiger');
	return list;
}
secondConst();
/*
 *const list = ['john', 'adele', 'hary'];
 *list2 = [].concat(list, "tiger");
 *list == list2;
 *참고사이트 : http://vincent.billey.me/pure-javascript-immutable-array
 */

//클로져 예시
function sum(a,b){
	return a+b;
}
function divide(a,b){
	return a/b;
}
function calcurate(method, prev){
	return function(next){
		debugger;
		return method(prev, next);
	}
}

var currySum = calcurate(sum, 100);
var curryDivision = calcurate(divide, 100);
currySum(20);
curryDivision(20);
function Todolist(){
	this.workList = [];
};

var TodolistFunction = {
	showList: function(){
		console.log(this.workList);
	},
	addList: function(doThing){
		this.workList.push(doThing)
	}
}
// debugger;
Todolist.prototype = TodolistFunction;

var newWork = new Todolist();
var myWork = new Todolist();
Object.setPrototypeOf(myWork,TodolistFunction);
myWork.showList();
myWork.addList("숙제완료");
myWork.showList();
newWork.addList('가나다');
newWork.addList('마바사');
newWork.addList('아자차');
newWork.addList('카타파하');
newWork.showList();

//ES6 Class
class TTTodolist{
	constructor(){
		this.workList = [];
	}
	showList(){
		console.log(this.workList);
	}
	addList(doThing){
		this.workList.push(doThing);
	}
}

var new1 = new TTTodolist();
new1.addList(1);
new1.addList(2);
new1.addList(100);
new1.showList();
debugger;

//안좋은 예시
function ZZTodolist(){
	this.workList = [];


	this.__proto__={
		showList: function(){
			console.log(this.workList);
		},
		addList: function(doThing){
			this.workList.push(doThing);
		}
	}
}


var new2 = new ZZTodolist();
new2
new2.addList(1);
new2.addList(2);
new2.addList(100);
new2.showList();
debugger;

//Object.create() 개선하기
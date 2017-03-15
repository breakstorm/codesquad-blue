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
debugger;
Todolist.prototype = TodolistFunction;

var newWork = new Todolist();
newWork.addList('가나다');
newWork.addList('마바사');
newWork.addList('아자차');
newWork.addList('카타파하');
newWork.showList();

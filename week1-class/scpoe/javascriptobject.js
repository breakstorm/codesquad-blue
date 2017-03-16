var healthObj = {
	showHealth: function(){
		console.log("오늘은" + this.lastTime + "까지" + this.name + "운동을 하셨네요");
	}
}
var goodHealth = function(){
	console.log("오늘은" + this.lastTime + "까지" + this.name + "운동을 하셨네요");
}
function Health(name, lastTime){
	this.name = name;
	this.lastTime = lastTime;
	this.veryHealth = function(){
		console.log("오늘은" + this.lastTime + "까지" + this.name + "운동을 하셨네요");
	}
}
//healthObj.showHealth();
//var t2 = new Health();
//t2.prototype = healthObj;
//var tt = new healthObj();
//tt.showHealth();

Health.prototype = healthObj;
//Health.prototype = goodHealth;
var myHealth1 = new Health("jini", 5000);
myHealth1.showHealth();
var myHealth2 = new Health("run", 100);
myHealth2.showHealth();
var myHealth3 = new Health("swim", 51100);
myHealth3.showHealth();
var myHealth4 = new Health("wedding", 5001230);
myHealth4.showHealth();


var workObj = {
	showWork: function(){
		console.log("오늘은" + this.lastTime + "까지" + this.name + "운동을 하셨네요");
	}
}
var myHealth1 = Object.create(workObj);
//myHealth.name = "달리기";
//myHealth.lastTime = "1123:2222";
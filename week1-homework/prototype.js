function Health(name, lastTime){
	this.name = name;
	this.lastTime = lastTime;
}

var healthObj = {
	showHealth : function(){
		console.log("오늘은 운동을" + this.lastTime + "했어요");
	}
}

var healthData = {
	name : "달리기",
	lastTime : "12:30"
}


//방법1
var hisHealth = Object.create(healthObj);
hisHealth.name = "달리기";
hisHealth.lastTime = "12:30";
hisHealth.showHealth();

//방법2
Object.setPrototypeOf(healthData, healthObj);
console.log(healthObj);
console.log(Object.getPrototypeOf(healthData));

//방법3
var herHealth = new Heatlh("수영", "00:02");
Object.setPrototypeOf(herHealth, healthObj);
herHealth.showHealth();
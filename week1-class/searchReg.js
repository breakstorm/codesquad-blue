function searchReg(){
	var queryAll = document.querySelectorAll('div');
	var countDash = 0;
	var countCamell = 0;
	var reg1 = /-/;
	var reg2 = /_/;

	queryAll.forEach(function(e,i,a){
		var temp = e.className; //array[i] = e
		if(reg1.test(temp)){
			countDash++;
			removeClass(e);
			//개선사항 removeClass(e, pattern);
		}
		if(reg2.test(temp)){
			countCamell++;
			removeClass(e, reg1, reg2);
		}
		
	})
	console.log(countDash);
	console.log(countCamell);
}
//개선사항 e 변수값 변경 필요.
function removeClass(e){
	var reg1 = /-/;
	var reg2 = /_/;
	// className = "a b c"
	// classList = ['a', 'b', 'c']
	// forEach i, a값 필요없음.
	e.classList.forEach(function(eLow,iLow,aLow){
		if(reg1.test(eLow)){
			e.classList.remove(eLow)
			// 개선사항 aLow.remove(eLow);
		}
		if(reg2.test(eLow)){
			e.classList.remove(eLow)
		}
	})
}
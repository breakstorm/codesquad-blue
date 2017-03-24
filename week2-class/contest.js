model = {
	data : "data",
	test : "test"
}

view = {
	render: function(){
		console.log(con.getdata());
	}
}

con = {
	getdata: function(){
		return model.data
	}
}
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');
var waitListData 	= require('../data/waitinglist-data.js');
var tableData 		= require('../data/table-data.js');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){


	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/tables', function(req, res){
 	
	 	tableData.forEach(function(tableData, index){
	 		 tableData.counter = index + 1;
	 	});

	 	waitListData.forEach(function(waitListData, index){
	 			waitListData.counter = index + 1;
	 	});

		res.render('tables', {
			tableValue: tableData,
			waitListValue: waitListData
		});

	});

	app.get('/tables', function(req, res){
		res.render('tables', tableData);
	});

	app.get('/reserve', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/reserve.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

};
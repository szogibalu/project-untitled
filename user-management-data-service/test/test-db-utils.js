'use strict';

process.env.USER_MANAGEMENT_DB_URL = 'mongodb://localhost:27017/user-management_test'

var config = require('../config/config');
var mongoose = require('mongoose');

before(function(done) {
	
	mongoose.connect(config.db.url, function(err) {
		if (err) {
			throw err;
		} else {
			console.log("Test DB connection opened...");
		}		
		return done();
	});

});

beforeEach(function(done) {
	
	if (mongoose.connection.readyState === 0){
		throw new Error("No database is open...");
	}

	function clearDB() {
		for ( var i in mongoose.connection.collections) {
			mongoose.connection.collections[i].remove(function() {
			});
		}
		return done();
	}

	return clearDB();

});

after(function() {
	console.log("Test DB connection closed...");
	mongoose.disconnect();	
});
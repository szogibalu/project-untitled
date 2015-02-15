var mongoose = require('mongoose');
var User = require('../models/user');

var service = {
	"addUser" : function addUser(request, response, next) {		
		User.create(request.body, function(error, result) {			
			setResponse(response, next, error, result);
		});
	},
	"getUser" : function getUser(request, response, next) {
		User.findById(request.params.id, function(error, result) {
			setResponse(response, next, error, result);
		});
	},
	"getUsers" : function getUsers(request, response, next) {
		User.find(function(error, result) {
			setResponse(response, next, error, result);
		});
	},
	"updateUser" : function updateUser(request, response, next) {
		User.findByIdAndUpdate(request.params.id, request.body, function(error,
				result) {
			setResponse(response, next, error, result);
		});
	},
	"deleteUser" : function deleteUser(request, response, next) {
		User.findByIdAndRemove(request.params.id, request.body, function(error,
				result) {
			setResponse(response, next, error, result);
		});
	}
}

function setResponse(response, next, error, result) {
	if (error) {
		return next(error);
	}	
	response.json(result);
}

module.exports = service;
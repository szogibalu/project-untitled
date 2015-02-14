var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/user');

function setResponse(response, error, result){
	if (error) {
		return next(error);
	}
	response.json(result);
};

router.get('/', function(request, response, next) {
	User.find(function(error, result) {	
		setResponse(response, error, result);
	});
});

router.put('/', function(request, response, next) {
	User.create(req.body, function(error, result) {
		setResponse(response, error, result);
	});
});

router.get('/:id', function(request, response, next) {
	User.findById(req.params.id, function(error, result) {
		setResponse(response, error, result);
	});
});

router.post('/:id', function(request, response, next) {
	User.findByIdAndUpdate(req.params.id, req.body, function(error, result) {
		setResponse(response, error, result);
	});
});

router.delete('/:id', function(request, response, next) {
	User.findByIdAndRemove(req.params.id, req.body, function (error, result) {
		setResponse(response, error, result);
	});
});

module.exports = router;

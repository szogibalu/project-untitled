var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/user');

router.get('/', function(req, res, next) {
	User.findOne(function(err, user) {
		if (err)
			return next(err);
		res.json(user);
	});
});

router.post('/', function(req, res, next) {
	User.create(req.body, function(err, post) {
		if (err)
			return next(err);
		res.json(post);
	});
});

router.get('/:id', function(req, res, next) {
	User.findById(req.params.id, function(err, post) {
		if (err)
			return next(err);
		res.json(post);
	});
});

router.put('/:id', function(req, res, next) {
	User.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
		if (err)
			return next(err);
		res.json(post);
	});
});

router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) 
    	return next(err);
    res.json(post);
  });
});

module.exports = router;

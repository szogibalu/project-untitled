'use strict';

var utils = require('../test-db-utils');
var should = require('should');
var assert = require('chai').assert;
var User = require('../../models/user');

var testUser = {
	firstName : 'John',
	lastName : 'Snow'
};

var update = {
	lastName : 'Stark'
};

describe('User model', function() {
	describe('Create', function() {
		it('Should create a User', function(done) {
			User.create(testUser, function(err, createdUser) {
				should.not.exist(err);
				assert.isNotNull(createdUser._id, 'Id is not given.');
				createdUser.firstName.should.equal('John');
				createdUser.lastName.should.equal('Snow');
				done();
			});
		});
	});
	describe('Find', function() {
		it('Should find a User by Id', function(done) {
			User.create(testUser, function(err, createdUser) {
				User.findById(createdUser._id, function(err, res) {
					should.not.exist(err);
					res.firstName.should.equal('John');
					res.lastName.should.equal('Snow');
					done();
				})
			});
		});
	});
	describe('Delete', function() {
		it('Should delete a User by Id', function(done) {
			User.create(testUser, function(err, createdUser) {
				User.findByIdAndRemove(createdUser._id, function(err, res) {
					User.findById(createdUser._id, function(err, res) {
						assert.isNull(res, 'No user with this id.');
						done();
					})
				})
			});
		});
	});
	describe('Update', function() {
		it('Should update a User by Id', function(done) {
			User.create(testUser, function(err, createdUser) {
				User.findByIdAndUpdate(createdUser._id, update, function(err,
						res) {
					User.findById(res._id, function(err, updatedUser) {
						should.not.exist(err);
						updatedUser.firstName.should.equal('John');
						updatedUser.lastName.should.equal('Stark');
						done();
					})
				})
			});
		});
	});	
});
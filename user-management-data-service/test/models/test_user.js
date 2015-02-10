'use strict';

var utils = require('../test-db-utils');
var should = require('should');
var assert = require('chai').assert;
var User = require('../../models/user');

var testUser = {
	firstName : 'John',
	lastName : 'Snow'
};

describe('Users: models', function() {
	describe('Create', function() {
		it('Should create a new User', function(done) {
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
		it('Should Find an User', function(done) {
			User.create(testUser, function(err, createdUser) {
				User.findOne(createdUser._id, function(err, res) {
					should.not.exist(err);
					res.firstName.should.equal('John');
					res.lastName.should.equal('Snow');
					done();
				})
			});
		});
	});
});
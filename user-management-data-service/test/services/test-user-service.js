'use strict';

var should = require('should');
var assert = require('chai').assert;

var mocked_user_1 = {
	firstName : 'Tyrion',
	lastName : 'Lannister'

};
var mocked_user_2 = {
	firstName : 'Jamie',
	lastName : 'Lannister'

};
var error = undefined;

var service = require('../../services/user-service')({
	"create" : function(request, callback) {
		callback.call(this, error, mocked_user_1);
	},
	"findById" : function(request, callback) {
		callback.call(this, error, mocked_user_1);
	},
	"find" : function(callback) {
		var resultList = [ mocked_user_1, mocked_user_2 ];
		callback.call(this, error, resultList);
	},
	"findByIdAndUpdate" : function(requestId, requestBody, callback) {
		callback.call(this, error, mocked_user_2);
	},
	"findByIdAndRemove" : function(requestId, requestBody, callback) {
		callback.call(this, error, mocked_user_1);
	}	
});

describe('User service', function() {
	describe('Add user', function() {
		it('Should create a User', function(done) {

			var request = {
				body : {
					firstName : 'Tyrion',
					lastName : 'Lannister'
				}
			};

			var response = {
				json : function(user) {
					user.firstName.should.equal('Tyrion');
					user.lastName.should.equal('Lannister');
				}
			};

			var next = function(error) {
				should.not.exist(error);
			};

			service.addUser(request, response, next);

			done();
		});
	});
	describe('Get user', function() {
		it('Should give back a User', function(done) {

			var request = {
				params : {
					id : '12345'
				}
			};

			var response = {
				json : function(user) {
					user.firstName.should.equal('Tyrion');
					user.lastName.should.equal('Lannister');
				}
			};

			var next = function(error) {
				should.not.exist(error);
			};

			service.getUser(request, response, next);

			done();
		});
	});
	describe('Get users', function() {
		it('Should give back all Users', function(done) {

			var request = {};

			var response = {
				json : function(users) {
					assert.lengthOf(users, 2);
				}
			};

			var next = function(error) {
				should.not.exist(error);
			};

			service.getUsers(request, response, next);

			done();
		});
	});
	describe('Update user', function() {
		it('Should update a User', function(done) {

			var request = {
				params : {
					id : '12345'
				},
				body : {
					firstName : 'Tyrion',
					lastName : 'Lannister'
				}
			};

			var response = {
				json : function(user) {
					user.firstName.should.equal('Jamie');
					user.lastName.should.equal('Lannister');
				}
			};

			var next = function(error) {
				should.not.exist(error);
			};

			service.updateUser(request, response, next);

			done();
		});
	});
	describe('Delete user', function() {
		it('Should remove a User', function(done) {

			var request = {
				params : {
					id : '12345'
				},
				body : {
					firstName : 'Tyrion',
					lastName : 'Lannister'
				}
			};

			var response = {
				json : function(user) {
					user.firstName.should.equal('Tyrion');
					user.lastName.should.equal('Lannister');
				}
			};

			var next = function(error) {
				should.not.exist(error);
			};

			service.deleteUser(request, response, next);

			done();
		});
	});
});
'use strict';

var should = require('should');
var assert = require('chai').assert;

var mocked_user_dao = {
	"create" : function(request, callback) {
		var error = undefined;
		var result = {
			firstName : 'Tyrion',
			lastName : 'Lannister'

		};
		callback.call(this, error, result);
	}
}

var service = require('../../services/user-service')(mocked_user_dao);

describe('User service', function() {
	describe('PUT', function() {
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
});
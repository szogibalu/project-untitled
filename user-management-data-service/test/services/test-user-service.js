'use strict';

var utils = require('../test-db-utils');
var should = require('should');
var assert = require('chai').assert;
var service = require('../../services/user-service');

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
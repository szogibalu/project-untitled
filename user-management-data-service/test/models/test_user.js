'use strict';

var utils = require('../utils');
var should = require('should');
var User = require('../../models/user');

describe('Users: models', function() {
	describe('Create', function() {
		it('Should create a new User', function(done) {
			var u = {
				firstName : 'Barack',
				lastName : 'Obama'
			};
			User.create(u, function(err, createdUser) {
				should.not.exist(err);
				createdUser.firstName.should.equal('Barack');
				createdUser.lastName.should.equal('Obama');
				done();
			});
		});
	});	
});
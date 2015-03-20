var express = require('express');

module.exports = function(service) {
	
	var router = express.Router();
	
	// GET all users
	router.get('/', service.getUsers);

	// PUT or POST new user
	router.put('/', service.addUser);
	router.post('/', service.addUser);

	// GET a user
	router.get('/:id', service.getUser);

	// POST an existing user
	router.post('/:id', service.updateUser);

	// DELETE an existing user
	router.delete('/:id', service.deleteUser);
	
	return router;	
};

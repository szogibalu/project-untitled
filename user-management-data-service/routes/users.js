var express = require('express');
var router = express.Router();

var service = require('../services/user-service');

router.get('/', service.getUsers);

router.put('/', service.addUser);

router.get('/:id', service.getUser);

router.post('/:id', service.updateUser);

router.delete('/:id', service.deleteUser);

module.exports = router;

module.exports = function(dao) {
	return service = {
		"addUser" : function(request, response, next) {
			dao.create(request.body, function(error, result) {				
				setResponse(response, next, error, result);
			});
		},
		"getUser" : function(request, response, next) {
			dao.findById(request.params.id, function(error, result) {
				setResponse(response, next, error, result);
			});
		},
		"getUsers" : function(request, response, next) {
			dao.find(function(error, result) {
				setResponse(response, next, error, result);
			});
		},
		"updateUser" : function(request, response, next) {
			dao.findByIdAndUpdate(request.params.id, request.body, function(
					error, result) {
				setResponse(response, next, error, result);
			});
		},
		"deleteUser" : function(request, response, next) {
			dao.findByIdAndRemove(request.params.id, request.body, function(
					error, result) {
				setResponse(response, next, error, result);
			});
		}
	}
};

function setResponse(response, next, error, result) {
	if (error) {
		return next(error);
	}
	response.json(result);
}
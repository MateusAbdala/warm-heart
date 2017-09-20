angular.module('Entidade')

.factory('EntidadeClient',
    ['$http', '$rootScope', '$timeout', '$window',
    function ($http, $rootScope, $timeout, $window) {
        
        var urlBase = 'http://52.15.61.162/entity-service/entity';
        var service = {};

        service.GetAllEntities = function () {
        	return $http.get(urlBase);
    		};

    		service.GetDetails = function (id) {
        	return $http.get(urlBase + "/" + id);
    		};

        return service;
    }])

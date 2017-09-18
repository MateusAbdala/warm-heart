angular.module('Entidade')

.factory('EntidadeClient',
    ['$http', '$rootScope', '$timeout', '$window',
    function ($http, $rootScope, $timeout, $window) {
        
        var urlBase = 'http://localhost:8081/api/entity';
        var service = {};

        service.GetAllEntities = function () {
        	return $http.get(urlBase);
    		};

        return service;
    }])

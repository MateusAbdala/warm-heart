angular.module('Home', [])

.controller('HomeController', ["$scope", "$rootScope", "$window", 
	function($scope, $rootScope, $window) {
		
		$scope.$on('userLoggedIn', function($event, message){
			$scope.userLoggedIn = $window.localStorage['userLoggedIn'];
		});

}]);
angular.module('Authentication')

	.controller('SignUpController',
		['$rootScope', '$scope', '$timeout', '$location', 'SignUpClient', 'AuthenticationClient',
		function ($rootScope, $scope, $timeout, $location, SignUpClient, AuthenticationClient) {
			$scope.signup = function () {
	        $scope.dataLoading = true;

	        SignUpClient.SignUp($scope.username, $scope.password,
	        	function(response) {
	            if(response.data.success) {
	            	AuthenticationClient.Login($scope.username, $scope.password, function(authResponse) {
		            	if(authResponse.data.success) {
			            	AuthenticationClient.SetCredentials($scope.username, authResponse.data.token);
			            	$rootScope.$broadcast('userLoggedIn');
			            	$location.path('/');
			            } else {
			              $scope.error = authResponse.data.message;
			              $scope.dataLoading = false;
			            }
				        });
	            } else {
	              $scope.error = response.data.message;
	              $scope.dataLoading = false;
	            }
	        });
	    };
		}]);
angular.module('Entidade', [])

	.controller('EntidadeController', ['$scope', 'EntidadeClient', '$routeParams',
    function($scope, EntidadeClient, $routeParams) {
    var vm = this;

    if(!$routeParams.id){
      EntidadeClient.GetAllEntities().then(function (response) {
          vm.entidades = response.data;
      }, function (error) {
          console.log('Unable to load entities: ' + error.message);
      });
    } else {
      EntidadeClient.GetDetails($routeParams.id).then(function (response) {
          $scope.entidade = response.data[0];
      }, function (error) {
          console.log('Unable to load entity details: ' + error.message);
      });
    }

  }]);
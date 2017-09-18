angular.module('Entidade', [])

	.controller('EntidadeController', ['EntidadeClient',function(EntidadeClient) {
    var vm = this;
    EntidadeClient.GetAllEntities().then(function (response) {
        vm.entidades = response.data;
        console.log(response.data);
    }, function (error) {
        console.log('Unable to load entities: ' + error.message);
    });

  }]);
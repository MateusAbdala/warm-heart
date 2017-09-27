angular.module('Entidade', [])

.controller('EntidadeController', ['$scope', 'EntidadeClient', '$routeParams', 'PagerService','$http',
function($scope, EntidadeClient, $routeParams, PagerService, $http) {

    $scope.estados = null;
    $scope.cidades = null;			
    $http({
        method: 'GET',
        url: '../lib/estados-cidades.json'
    }).then(function successCallback(response) {
        $scope.estados = response.data.estados;
    }, function errorCallback(response) {
        console.log('Could not load estados from JSON file');
    });
    
    $scope.$watch('selectedState', function(newVal, oldVal){
        if($scope.selectedState){
            $scope.cidades = $scope.selectedState.cidades;
        }
    });

    var vm = this;
    vm.pager = {};
    vm.setPage = setPage;
    $scope.pageSize = 8;
    var visiblePages = 8;

    if($routeParams.id){
        EntidadeClient.GetDetails($routeParams.id).then(function (response) {
            $scope.entidade = response.data[0];
        }, function (error) {
            console.log('Unable to load entity details: ' + error.message);
        });
    } else {
        EntidadeClient.GetAllEntities().then(function (response) {
            vm.entidades = response.data;
            vm.items = vm.entidades;
            vm.pager = PagerService.GetPager(vm.entidades.length, 1, visiblePages, $scope.pageSize);
        }, function (error) {
            console.log('Unable to load entities: ' + error.message);
        });
    }    

    function setPage(page) {
        if (page < 1 || page > vm.pager.totalPages) {
            return;
        }
        vm.pager = PagerService.GetPager(vm.entidades.length, page, visiblePages);
        vm.items = vm.entidades.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
    }

}]);
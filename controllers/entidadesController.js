angular.module('Entidade', [])

.controller('EntidadeController', ['$scope', 'EntidadeClient', '$routeParams', 'PagerService',
function($scope, EntidadeClient, $routeParams, PagerService) {
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
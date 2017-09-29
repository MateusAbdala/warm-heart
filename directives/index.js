angular.module('warmheart')

.directive('barranavegacao', function() {
  return {
    restrict: 'E',
    templateUrl: './fragments/barranavegacao.html',
    controller: function() {
      this.page = 1;

      this.isSet = function(checkPage) {
        return this.page === checkPage;
      };

      this.setPage = function(activePage) {
        this.page = activePage;
      };
    },
    controllerAs: "page"
  };
})

.directive('rodape', function(){
  return {
    restrict: 'E',
    templateUrl: './fragments/rodape.html'
  };
})

.directive('pager', function(){
  return {
    restrict: 'E',
    templateUrl: './components/pager/pager.html'
  };
}); 
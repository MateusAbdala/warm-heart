(function() {
  var app = angular.module('warmheart', ["ngRoute", "Authentication", "Home", "Entidade"]);

  //CONFIG ROUTES-----------------------------------------------------------
  app.config(['$routeProvider', function ($routeProvider) {
    var fragmentsBase = '../fragments';
    $routeProvider
      .when('/login', {
        module: 'Authentication',
        controller: 'LoginController',
        templateUrl: fragmentsBase + '/login.html'
      })
      .when('/signup', {
        module: 'Authentication',
        controller: 'SignUpController',
        templateUrl: fragmentsBase + '/signup.html'
      })
      .when('/logout', {
        module: 'Authentication',
        controller: 'LogoutController',
        templateUrl: fragmentsBase + '/logout.html'
      })
      .when('/entidades', {
        module: 'Entidade',
        controller: 'EntidadeController',
        controllerAs: 'vm',
        templateUrl: fragmentsBase + '/entidades.html'
      })
      .when('/entidades/:id', {
        module: 'Entidade',
        controller: 'EntidadeController',
        controllerAs: 'vm',
        templateUrl: fragmentsBase + '/entidadeSelecionada.html'
      }).otherwise({
        templateUrl : fragmentsBase + '/home.html'
      })
  }]);
  
  //DIRECTIVES--------------------------------------------------------------
  app.directive('barranavegacao', function() {
      return {
        restrict: 'E',
        templateUrl: './fragments/barranavegacao.html'
      }
    });

  app.directive('rodape', function(){
    return {
      restrict: 'E',
      templateUrl: './fragments/rodape.html'
    };
  }); 

  app.directive('pager', function(){
    return {
      restrict: 'E',
      templateUrl: './components/pager/pager.html'
    };
  }); 

})();
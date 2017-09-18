(function() {
  var app = angular.module('warmheart', ["ngRoute", "Authentication", "Home", "Entidade"]);

  //CONTROLLERS--------------------------------------------------------------

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.setCurrent = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

  //CONFIG ROUTES-----------------------------------------------------------
  app.config(['$routeProvider', function ($routeProvider) {
    var fragmentsBase = '../fragments';
    $routeProvider
      .when('/', {
        templateUrl : fragmentsBase + '/home.html'
      })
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
        templateUrl: fragmentsBase + '/entidades.html'
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

})();
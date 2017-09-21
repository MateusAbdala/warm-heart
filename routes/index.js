angular.module('warmheart')

.config(['$routeProvider', function ($routeProvider) {
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
      .when('/contato', {
        templateUrl: fragmentsBase + '/contato.html'
      })
      .when('/doe', {
        templateUrl: fragmentsBase + '/doe.html'
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
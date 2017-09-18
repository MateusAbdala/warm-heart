(function() {
    var app = angular.module('warm', []);
    //CONTROLLERS--------------------------------------------------------------
    app.controller('CaridadeController', function() {
        this.entidades = ent;
        this.filtro= filt;
        alert('Welcome, maguila!');//alertaaaaaaaaaaaaaaa tessstteee
      });

    app.controller('GalleryController', function() {
        this.imageIndex = 0;
        this.setCurrent = function(imageNumber) {
          console.log(imageNumber);
          this.imageIndex = imageNumber || 0;
        };
      });
    
    //DIRECTIVES--------------------------------------------------------------
    app.directive('barranavegacao', function() {
        return {
          restrict: 'E',
          templateUrl: '../directive/barranavegacao.html'
        }
      });

      app.directive('rodape', function() {
        return {
          restrict: 'E',
          templateUrl: '../directive/rodape.html'
        }
      });  

      app.directive('signin', function() {
        return {
          restrict: 'E',
          templateUrl: '../directive/signin.html'
        }
      });  

      //TEMP SHIT---------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      //filtros
      var filt = [{
          nome: 'Brasil'
      },{
          nome: 'São Paulo'
      }
    ];
      var ent = [{
        nome: 'Criança Esperança',
        descricao: "Criança Esperança é um projeto da Rede Globo em parceria com a UNESCO - Órgão das Nações Unidas para a Educação, a Ciência e a Cultura.",
        images: [
          "http://www.unesco.org/new/fileadmin/MULTIMEDIA/FIELD/Brasilia/images/brz_shs_logo_CRIESP_2016.png"
        ],
        reviews: [{
          stars: 5,
          body: "show!!!",
          author: "joelma@thomas.com",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "não gostei.",
          author: "tim@maia.com",
          createdOn: 1397490980837
        }]
      }, {
        nome: 'Teleton',
        descricao: "Teleton é uma maratona televisiva brasileira anualmente exibida pelo SBT em prol da Associação de Assistência à Criança Deficiente.",
        images: [
          "http://www.sbt.com.br/images/logos_wide/79_480x360.jpg"
        ],
        reviews: [{
          stars: 3,
          body: "mais ou menos.",
          author: "JimmyDean@sausage.com",
          createdOn: 1397490980837
        }, {
          stars: 4,
          body: "curti não, vou dar 4 :p",
          author: "vanusa@patriota.com",
          createdOn: 1397490980837
        }]
      }];
  

     
})();
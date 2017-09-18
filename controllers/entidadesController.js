angular.module('Entidade', [])

	.controller('EntidadeController', function() {
    this.entidades = ent;
    this.filtro= filt;
  });


  var filt = [{
      nome: 'Brasil'
  },{
      nome: 'São Paulo'
  }];
  var ent = [{
    id: 'ent001',
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
    id: 'ent002',
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
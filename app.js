var app = angular.module("app",["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/produto',{
    templateUrl:"templates/produto.html",
    controller:"produtoController"
  })
  .when('/produto/produto-form',{
    templateUrl:"templates/produto-form.html",
    controller:"produtoController"
  })
  .when('/produto/:code/edit',{
    templateUrl:"templates/produto-form.html",
    controller:"produtoEditController"
  })
  .otherwise({
    redirectTo:"/"
  });
});

app.config(['$locationProvider',function($locationProvider){
  $locationProvider.hashPrefix('');
}])

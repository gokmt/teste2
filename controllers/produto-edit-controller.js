app.controller("produtoEditController",produtoEditController);

function produtoEditController(produtoService,$scope,$location,$routeParams){
  var codigo = $routeParams.code;
  $scope.produto = {};

  function getByCode(codigo){
    $scope.produto = produtoService.getByCode(codigo);
  }

  function salvar(produto){
    produtoService.salvarEditar(produto);
    $location.path('produto');
  }



  getByCode(codigo);
  $scope.salvar = salvar;
}

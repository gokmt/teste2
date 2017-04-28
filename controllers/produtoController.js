app.controller("produtoController",produtoController);

function produtoController(produtoService,$scope,$location){
  $scope.produto = {};

  function salvar(produto){
    produtoService.salvar(produto);
    $location.path('produto');
  }

  function listarProdutos(){
    $scope.produtos = produtoService.listarProdutos();
  }

  function excluir(indice){
    produtoService.excluir(indice);
  }

  $scope.salvar = salvar;
  $scope.excluir = excluir;
  listarProdutos();
}

app.controller("produtoController",produtoController);

function produtoController(produtoService,$scope,$location){
  $scope.produto = {};

  function salvar(produto){
    if (parseInt(produto.codigo)) {
      produtoService.salvar(produto);
      $location.path('produto');
    }else {
      alert("O campo CÓDIGO só aceita números!");
    }
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

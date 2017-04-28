app.factory("produtoService",produtoService);

function produtoService(){
  var produtos = [];

  function salvar(produto){
    produtos.push(produto);
  }

  function listarProdutos(){
    return produtos;
  }

  function excluir(indice){
    produtos.splice(indice,1);
  }

  function getByCode(codigo){
    var data;
    for (var produto in produtos) {
      if (produtos[produto].codigo === codigo) {
        data = produtos[produto];
      }
    }
    return data;
  }

  function salvarEditar(produto){
    for (var produto in produtos) {
      if (produtos[produto].codigo === produto.codigo) {
        produtos[produto] = angular.copy(produto);
      }
    }
    return true;
  }

  return{
    salvar:salvar,
    listarProdutos:listarProdutos,
    excluir:excluir,
    getByCode:getByCode,
    salvarEditar:salvarEditar
  }
}

// Seleciona os elementos principais do HTML
const botaoAvancar = document.getElementById("btn-avancar");
const botaoVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

// Função para esconder o cartão atualmente selecionado
function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

// Função para mostrar um cartão específico pelo índice
function mostrarCartao(indice) {
  cartoes[indice].classList.add("selecionado");
}

// Função para avançar para o próximo cartão
function avancarCartao() {
  if (cartaoAtual === cartoes.length - 1) return; // Evita passar do último cartão

  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao(cartaoAtual);
}

// Função para voltar para o cartão anterior
function voltarCartao() {
  if (cartaoAtual === 0) return; // Evita voltar antes do primeiro cartão

  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
}

// Eventos de clique nos botões
botaoAvancar.addEventListener("click", avancarCartao);
botaoVoltar.addEventListener("click", voltarCartao);

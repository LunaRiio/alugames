let jogosAlugados = 0

function exibirJogosAlugados() {
  console.log(`Você alugou ${jogosAlugados}`)
}


function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector('.dashboard__item__img');
  let botao = gameClicado.querySelector('.dashboard__item__button');
  let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

  if (botao.classList.contains('dashboard__item__button--return')) {

    if (confirm(`Você tem certeza que quer devolver o jogo ${nomeJogo.textContent}?`))
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
    botao.classList.remove('dashboard__item__img--rented');
  } else{
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
    imagem.classList.add('dashboard__item__img--rented');
    jogosAlugados++;
  }

  exibirJogosAlugados()
} 



document.addEventListener('DOMContentLoader', function() {
  jogosAlugados = document.querySelectorALL('dashboard__item__img--rented').length;
  exibirJogosAlugados()
});

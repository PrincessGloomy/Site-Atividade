let clicado = false;

function trocarTexto() {
  const mensagem = document.getElementById("mensagem");
  const botao = document.getElementById("botao-acao");

  if (clicado === false) {
    mensagem.textContent = "Texto atualizado com sucesso! (ﾉ´ヮ`)ﾉ*:･ﾟ✧";
    botao.textContent = "Voltar texto";
    clicado = true;
  } else {
    mensagem.textContent = "Meu primeiro sitezinho, pronto pra ir ao ar!";
    botao.textContent = "Clique aqui";
    clicado = false;
  }
}

var numeroSecreto = parseInt(Math.random() * 1001);

//enquanto o chute for diferente do numero secreto
while(chute != numeroSecreto){
  var chute = prompt('Digite um numero entre 1 e 1000')
  //se o chute for igual ao numero secreto
  if (chute == numeroSecreto) {
    alert('Acertou!')
  } else if (chute > numeroSecreto) {
    alert('Errou... o numero secreto é menor')
  } else if (chute < numeroSecreto) {
    alert('Errou... o numero secreto é maior')
  }
}

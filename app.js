alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
// Gera um número aleatório entre 1 e 10
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute nao for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);
// if (tentativas > 1) {
//     alert(`Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas!`);
// } else {
//     alert(`Você acertou o número secreto ${numeroSecreto} na primeira tentativa!`);
// }

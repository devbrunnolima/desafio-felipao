const prompt = require('prompt-sync')();

function calcularNivel() {
    // Solicita ao usuário inserir a quantidade de vitórias e derrotas
    let vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
    let derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));
  
    // Calcula o saldo de Rankeadas
    let saldoVitorias = vitorias - derrotas;
  
    // Determina o nível com base no saldo de vitórias
    let nivel;
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    // Exibe a mensagem com o saldo e nível
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
  }
  
  // Chama a função para iniciar o processo
  calcularNivel();
  
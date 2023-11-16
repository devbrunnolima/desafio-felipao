const prompt = require('prompt-sync')();

for (;;) {
  let nome = prompt("Digite o nome do Herói:");

  // Solicita a quantidade de XP do Herói até que seja um valor numérico válido
  let exp;
  while (isNaN(exp)) {
    exp = parseFloat(prompt("Digite a quantidade de XP do Herói:"));
    if (isNaN(exp)) {
      console.log("Por favor, insira um valor numérico para a quantidade de XP.");
    }
  }

  let nivelDoHeroi;

  switch (true) {
    case exp < 1000:
      nivelDoHeroi = "Ferro";
      break;
    case exp <= 2000:
      nivelDoHeroi = "Bronze";
      break;
    case exp <= 5000:
      nivelDoHeroi = "Prata";
      break;
    case exp <= 7000:
      nivelDoHeroi = "Ouro";
      break;
    case exp <= 8000:
      nivelDoHeroi = "Platina";
      break;
    case exp <= 9000:
      nivelDoHeroi = "Ascendente";
      break;
    case exp <= 10000:
      nivelDoHeroi = "Imortal";
      break;
    default:
      nivelDoHeroi = "Radiante";
  }

  console.log(`O Herói ${nome} está no nível ${nivelDoHeroi}`);

  let novamente = prompt('Quer saber o nível de outro herói? (s ou n)');
  if (novamente.toLowerCase() !== 's') {
    break;
  }
}
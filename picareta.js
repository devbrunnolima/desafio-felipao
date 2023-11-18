// Lê a quantidade de golpes informada pelo usuário.
const quantidadeGolpes = parseInt(gets());

// Define  os tipos de minerais 
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = (i - 1) % minerais.length;

  // Exibe o índice i, concatenado com o caractere ":", após, concatenado com tipo de minerais[minaIndex]:
  print(i + ": " + minerais[minaIndex]);
}
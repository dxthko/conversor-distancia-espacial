let nomePiloto = prompt('Para iniciar o uso do CDE, informe-nos o seu nome.')

let anosLuz = prompt(
  'Seja bem-vindo ' +
    nomePiloto +
    ', nos informe qual a sua distância em anos-luz.'
)

let opcoesVelocidade = prompt(
  nomePiloto +
    ', você possui as seguintes opções: \n1. Parsec (pc);\n2. Unidade Astronômica (AU);\n3. Quilômetros;'
)

let unidadeEscolhida
let distanciaConvertida

switch (opcoesVelocidade) {
  case '1':
    unidadeEscolhida = 'Parsec'
    distanciaConvertida = anosLuz * 0.306601
    break
  case '2':
    unidadeEscolhida = 'Unidade Astronômica'
    distanciaConvertida = anosLuz * 63241.1
    break
  case '3':
    unidadeEscolhida = 'Quilômetros'
    distanciaConvertida = anosLuz * 9.5 * Math.pow(10, 12)
    break
  default:
    unidadeEscolhida = 'Unidade não identificada'
    distanciaConvertida = alert('Conversão fora do escopo.')
    break
}

alert(
  'Distância em anos-luz: ' +
    anosLuz +
    '\n' +
    unidadeEscolhida +
    ': ' +
    distanciaConvertida
)

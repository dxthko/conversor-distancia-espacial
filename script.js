let nomePiloto = prompt('Para iniciar o uso do CDE, informe-nos o seu nome.')

let greetings = prompt(
  'Seja bem-vindo ' +
    nomePiloto +
    ', nos informe qual a sua distância em anos-luz.'
)

let opcoesVelocidade = alert(
  nomePiloto +
    ', você possui as seguintes opções: \n1. Parsec (pc);\n2. Unidade astronômica (AU);\n3. Quilômetros;'
)

let velocidadeEscolhida = prompt(
  nomePiloto + ', escolha uma das opções digitando o número respectivo.'
)

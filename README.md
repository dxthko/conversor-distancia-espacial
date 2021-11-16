## CDE - Conversor de Distância Espacial

Aqui irei criar um **Conversor de Distância Espacial**. Ele possuirá os seguintes itens:

- Perguntar a distância em anos luz;

- Oferecer uma lista de opções com:
  Parsec (pc);
  Unidade Astronômica (AU);
  Kilômetros (km);

- Perguntar qual operação deseja realizar, sendo que a resposta receberá o número da opção escolhida;

- Utilizar o switch para verificar a opção escolhida pelo usuário, armazenando o **nome da unidade** e o **valor convertido de anos-luz** para a unidade desejada;

- Exibir um alerta contendo a **distância em anos-luz** e a **distância convertida** para a operação desejada;

- Conversões a serem utilizadas:
  1 l.y. = 0,306601pc
  1 l.y. = 63241,1 AU
  1 l.y. = 9,5 x 10^12

- Para a conversão de anos-luz para kilômetros, será necessário usar o Math.pow(10,12) para obter o valor de 10^12;

- Se o usuário digitar alguma opção que não seja nenhuma das três, será exibido a seguinte mensagem: "Distância em anos-luz: x. Unidade não identificada, conversão fora do escopo."

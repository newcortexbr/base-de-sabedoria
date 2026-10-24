# /painel/melhores-da-cidade/[id] (Placar / Resultado)

Arquivo: `app/painel/melhores-da-cidade/[id]/page.tsx` (180 linhas)

## o que você vê
Votação no ar ou agendada: tela "Placar" com título da votação, quando termina e a frase "Aqui você vê os números completos, inclusive na última hora." Botões `Votos suspeitos` (com a contagem de alertas) e `Ver no site`. Quatro cartões: `Votos válidos` (e quantos hoje), `Termina em` ("placar some do site 1h antes"), `Anulados por você` e `Alertas pendentes`. Abas com o nome de cada competição; a tabela do ranking mostra #, foto, participante, distância para o 1º, `Votos` e `Hoje`. Quem recebeu votos esperando decisão tem a etiqueta `suspeito` (leva à tela de votos suspeitos). Votação encerrada: tela "Resultado final" com período, votos válidos, competições, anulados e, por competição, o `Campeão` e os demais colocados; aviso de que os campeões ficam no site e na home até a próxima votação terminar.

## rota e gate
- `/painel/melhores-da-cidade/<id>`. client, `Header` "Melhores da Cidade", link `Voltar`. só administrador; módulo `melhores` (prefixo da rota).

## como chegar
- na lista de votações: `Ver placar` no cartão de votação no ar, ou clique no cartão de uma votação encerrada. Menu Conteúdo > `Melhores da Cidade`.

## o que faz
- só leitura: acompanha o placar e o resultado final.

## ações e campos
- troca de competição pelas abas; `Votos suspeitos` e `Ver no site` são links. Nenhum campo editável.

## estados
- "Carregando…"; erro em alerta vermelho ("carregar a votação"); sem dados nada é exibido.

## possíveis problemas
- número aqui difere do site na última hora: o site esconde o placar 1h antes do fim, o painel não.
- votação agendada não tem placar útil (sem votos).

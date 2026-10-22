---
id: ext-acompanhar-extracao
titulo: "acompanhar uma extração: status, progresso por cidade e extração parcial"
publico:
  - cliente
modulo: extracao
aba: Detalhe da extração
tipo_problema:
  - status-da-extracao
  - extracao-parcial
  - extracao-falhou
  - acompanhar
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - R9FCgunNxFE
  - F136_v1JyRY
---

## objetivo
entender a tela da extração e o que cada status significa.

## pré-requisitos
- ter iniciado uma extração.

## explicação
- a tela tem o título "Extração" e o subtítulo "Status, progresso por cidade e resultado da sua extração." ela atualiza sozinha a cada 3 segundos até terminar.
- etiqueta de status: `Iniciando…` (na fila), `Em andamento`, `Gerando arquivos`, `Concluída`, `Concluída parcialmente`, `Falhou`, `Expirada`. aparecem também "X créditos consumidos" e o progresso ("X registros obtidos" ou "X de Y registros encontrados").
- datas: `Criada em`, `Concluída em`, `Arquivos expiram em`.
- `Progresso por cidade`: cada `Cidade/UF` com `Aguardando`, `Em andamento`, `Concluída` ou `Falhou` e a contagem. em falha, a tela mostra o motivo, às vezes em linguagem técnica.
- `Falhou` só acontece quando nenhuma cidade produziu nada. `Concluída parcialmente` quando alguma cidade falhou ou o saldo acabou. motivos mostrados:
  - "Não foi possível concluir nenhuma das cidades solicitadas."
  - "N de M cidades falharam durante a extração; as demais foram concluídas."
  - "Os registros foram extraídos, mas não foi possível gerar os arquivos. Os créditos consumidos estão no extrato e os dados estão preservados — procure o suporte para reemitir sem nova cobrança."
  - "O saldo de créditos se esgotou antes de atender todo o pedido; os arquivos contêm o que foi obtido até então."
- crédito reservado de uma página que falha é devolvido: só se paga o que foi entregue. uma rotina a cada 5 minutos recupera extrações paradas há mais de 15 minutos.
- não existe botão para cancelar uma extração nem para regenerar arquivo.

## passos
1. após `Iniciar extração` você já cai nesta tela; depois, abra pelo `Histórico` ou por `Extrações em andamento` no `Dashboard`.
2. aguarde até `Concluída`.
3. em `Arquivos gerados`, clique em `Baixar` (veja `ext-baixar-arquivos`).

## resultado
você tem o arquivo e o gasto exato no extrato (`ext-extrato-de-creditos`).

## se der errado
- `Extração não encontrada.`: o identificador não existe ou é de outra conta.
- `Não foi possível carregar o status da extração. Tente novamente.`
- rodapé "Não foi possível atualizar o status agora. Mostrando o último dado conhecido.": problema temporário; recarregue.
- parcial por arquivos não gerados: abra chamado no suporte pedindo reemissão sem nova cobrança.
- veio menos do que pediu: só existem aquelas empresas para o critério, ou o saldo acabou.

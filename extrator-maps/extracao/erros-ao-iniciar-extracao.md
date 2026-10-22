---
id: ext-erros-ao-iniciar-extracao
titulo: "erros ao iniciar uma extração e o que fazer"
publico:
  - cliente
modulo: extracao
aba: Nova extração
tipo_problema:
  - erro-ao-iniciar
  - saldo-insuficiente
  - avancar-travado
  - extracoes-simultaneas
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo
videos:
  - R9FCgunNxFE
---

## objetivo
resolver as mensagens que aparecem ao iniciar uma extração.

## pré-requisitos
- estar na etapa `Confirmação` da `Nova extração`.

## explicação
ao falhar, abre a janela "Não foi possível iniciar a extração" com o botão `Entendi` (e `Comprar créditos` se o problema for saldo). mensagens:
- `Saldo de créditos insuficiente para esta extração.`: o gasto máximo não cabe no saldo. compre créditos (`ext-comprar-creditos`) ou reduza a quantidade (`ext-quantidade-e-custo-maximo`).
- `Você já tem o máximo de extrações simultâneas em andamento. Aguarde uma terminar.`: já há 2 na fila ou rodando (`ext-limites-da-extracao`).
- `Dados inválidos para iniciar a extração.` ou mensagem do servidor, como `Máximo de 5 cidades por extração.`, `Bairro só pode ser informado em extração de uma única cidade.`, `A Base para Portal só pode ser gerada em XLSX.`, `Extração exige ao menos uma cidade.`: volte, corrija a etapa citada.
- `Não foi possível iniciar a extração agora. Tente novamente.`: erro genérico; tente de novo. se o limite de 20 criações por minuto for atingido, a mensagem exata não é conhecida; aguarde um minuto.
- `Avançar` travado na primeira etapa: saldo abaixo de 25 créditos.

## passos
1. clique em `Entendi`.
2. use `Voltar` até a etapa do problema e corrija.
3. volte à `Confirmação` e clique em `Iniciar extração`.
4. se for saldo, clique em `Comprar créditos`.

## resultado
a extração é criada e aparece em `Extrações em andamento`.

## se der errado
- repetindo, fale com o suporte pelo botão `Suporte pelo WhatsApp`, informando a mensagem exata.

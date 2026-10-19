---
id: sorteios
titulo: criar, publicar e realizar sorteios
publico:
  - admin
modulo: sorteios
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - uN4FHHHGgEs
  - REgRSXekqpA
---

## objetivo

criar um sorteio com prêmio de empresa parceira, sortear ao vivo e acompanhar a entrega do prêmio.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Sorteios estar disponível no portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Sorteios` e depois em `Sorteios` (`/painel/sorteios`).
2. Clique em `Novo sorteio`.
3. Envie a capa do sorteio (tamanho recomendado: 1600 × 900 px, deitada).
4. Preencha o título, a descrição do prêmio e as regras.
5. Se quiser, cole o link de um vídeo do YouTube e o link da live do sorteio.
6. Preencha as datas: `Inscrições de` (vazio = abre ao publicar), `Inscrições até` e o dia e hora do sorteio.
7. Informe a `Quantidade de ganhadores` e, em `Oferecido por`, escolha a empresa do Guia que dá o prêmio.
8. Em `A roleta mostra`, escolha nomes ou números da sorte.
9. Clique em `Salvar rascunho` para guardar sem publicar, ou em `Publicar` para colocar no ar.
10. Depois que as inscrições encerrarem, na lista, clique em `Participantes` ou `Ganhadores` do sorteio para abrir a tela de sortear ao vivo.
11. Se for transmitir, clique em `Tela cheia`.
12. Clique em `Sortear 1º ganhador`.
13. No cartão do ganhador, clique em `Chamar no WhatsApp` para combinar a entrega.
14. Em `Entrega do prêmio`, marque a situação: `Aguardando contato`, `Contatado`, `Prêmio entregue` ou `Não respondeu`. Se não responder, use `Sortear outro no lugar`.

## resultado

o sorteio aparece no portal; depois de sorteado, mostra o ganhador com o nome parcial.

## desvios

- Depois que alguém se inscreve, não dá para mudar o início das inscrições, a quantidade de ganhadores nem a roleta.
- Em `Participantes de Sorteios` você busca, filtra ganhadores e exporta em `CSV` ou `Excel`.
- Cada aparelho só se inscreve uma vez por sorteio.

## quando pedir ajuda

peça ajuda se o sorteio não aparecer no portal, se a roleta não abrir ou se houver dúvida sobre trocar um ganhador.

## fontes

- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:207-214` — menu Sorteios.
- `portal-cidade/frontend/src/components/painel/sorteios/ModalSorteio.tsx:1` — formulário.
- `portal-cidade/frontend/src/app/painel/sorteios/[id]/ao-vivo/page.tsx:1` — sortear ao vivo.
- vídeo `uN4FHHHGgEs`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela.

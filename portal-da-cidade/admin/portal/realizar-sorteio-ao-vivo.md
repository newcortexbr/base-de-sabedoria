---
id: realizar-sorteio-ao-vivo
titulo: "realizar o sorteio ao vivo e entregar o prêmio"
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
aqui você sorteia o ganhador depois que as inscrições encerram. Depois chama a pessoa no WhatsApp e marca a entrega do prêmio.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Sorteios estar disponível no portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Sorteios` e depois em `Sorteios`. [guia=menu:/painel/sorteios]
2. Depois que as inscrições encerrarem, na linha do sorteio que você quer, clique em `Realizar sorteio` para abrir a tela de sortear ao vivo. [guia=sorteios.realizar]
3. Se for transmitir, clique em `Tela cheia`. [guia=sorteios-ao-vivo.tela-cheia]
4. Clique em `Sortear 1º ganhador`. [guia=sorteios-ao-vivo.sortear]
5. No cartão do ganhador, clique em `Chamar no WhatsApp` para combinar a entrega. [guia=sorteios-ao-vivo.whatsapp]
6. Em `Entrega do prêmio`, marque a situação: `Aguardando contato`, `Contatado`, `Prêmio entregue` ou `Não respondeu`. [guia=sorteios-ao-vivo.entrega]
7. Se o ganhador não responder, clique em `Sortear outro no lugar`. [guia=sorteios-ao-vivo.entrega]

## resultado
O ganhador sorteado aparece na tela e a situação da entrega fica registrada.

## desvios

- Para guardar o sorteio sem publicar, clique em `Salvar rascunho` no lugar de `Publicar`.
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

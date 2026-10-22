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
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - uN4FHHHGgEs
  - REgRSXekqpA
---

## objetivo

aqui você cria um sorteio com prêmio de uma empresa parceira, sorteia ao vivo e acompanha a entrega do prêmio.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Sorteios estar disponível no portal.

## veja também
- para sortear o ganhador e combinar a entrega, veja o artigo "realizar o sorteio ao vivo e entregar o prêmio".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Sorteios` e depois em `Sorteios`. [guia=menu:/painel/sorteios]
2. Clique em `Novo sorteio`. [guia=sorteios.novo]
3. Envie a capa do sorteio (tamanho recomendado: 1600 × 900 px, deitada). [guia=sorteios.capa]
4. Escreva o título do sorteio. [guia=sorteios.titulo]
5. Escreva a descrição do prêmio. [guia=sorteios.premio]
6. Escreva as regras. [guia=sorteios.regras]
7. Se quiser, cole o link de um vídeo do YouTube. [guia=sorteios.video]
8. Se quiser, cole o link da live do sorteio. [guia=sorteios.live]
9. Preencha `Inscrições de` (vazio = abre ao publicar). [guia=sorteios.inscricoes-de]
10. Preencha `Inscrições até`. [guia=sorteios.inscricoes-ate]
11. Preencha o dia e a hora do sorteio. [guia=sorteios.data-sorteio]
12. Informe a `Quantidade de ganhadores`. [guia=sorteios.qtd-ganhadores]
13. Em `Oferecido por`, escolha a empresa do Guia que dá o prêmio. [guia=sorteios.oferecido-por]
14. Em `A roleta mostra`, escolha nomes ou números da sorte. [guia=sorteios.roleta]
15. Clique em `Publicar` para colocar o sorteio no ar. [guia=sorteios.publicar]

## explicação
- no topo do painel há contadores (abertos, participantes, aguardando sorteio e ganhadores), as abas `Abertos`, `Para sortear`, `Sorteados` e `Rascunhos`, e a busca pelo título.
- cada linha mostra a capa, a situação, as datas, os inscritos e os ganhadores, com os botões de participantes ou ganhadores, editar e excluir.
- na capa, deixe o principal no centro: no celular as bordas podem ser cortadas.
- as regras (por exemplo, idade mínima e cidade) aparecem na página do sorteio.
- há uma opção para mostrar no site a contagem de participantes.
- a página pública do sorteio mostra a capa, a empresa que oferece o prêmio (com ver no guia e WhatsApp), o prêmio, as regras e a contagem regressiva para o fim das inscrições.

## resultado

o sorteio aparece no portal; depois de sorteado, mostra o ganhador com o nome parcial.

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

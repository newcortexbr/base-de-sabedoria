---
id: cadastrar-instituicoes-e-causas-doacoes
titulo: "cadastrar instituições e causas na área de doações"
publico:
  - admin
modulo: doacoes
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-21
validacao: video
videos:
  - grm3bUrPBxM
---

## objetivo
aqui você cadastra as instituições (ONGs e projetos sociais) que aparecem na página de doações do portal e as causas que organizam essas instituições.

## pré-requisitos
- Ter acesso de administrador ao painel do portal.
- Cadastrar a causa antes da instituição, porque a instituição pede uma causa da lista.

## explicação
- a página pública de doações mostra cada instituição num card, com busca por nome, cidade ou pelo que ela faz.
- as causas viram os filtros dessa página pública.
- salvou, está no site: a instituição aparece na hora. Para tirar uma instituição do ar, exclua.
- cada botão de contato (conheça a instituição, WhatsApp, Instagram, Facebook, e-mail) só aparece no site se estiver preenchido.
- a galeria é opcional; se ficar vazia, a seção some do site.

## passos
1. No menu da esquerda, clique em `Doações`. Há duas telas: `Instituições` e `Causas`.
2. Para criar uma causa, entre em `Causas`, clique em `Nova causa`, digite o nome e clique em `Criar causa`. Os quadros do topo mostram o total de causas, quantas estão em uso e quantas instituições existem. Cada cartão mostra a causa e quantas instituições ela tem, com os botões de editar e excluir.
3. Para cadastrar uma instituição, entre em `Instituições` e clique em `+ Nova instituição`. A lista tem busca por nome e, em cada linha, a causa, a cidade e os botões de editar, ver no site e excluir.
4. Em identificação, escreva o `Nome da instituição *`, escolha a `Causa *` na lista e escreva o `Resumo do card`, que aparece na listagem.
5. Em capa da página, monte o slide do topo com fotos e vídeos do YouTube. Use as setas para ordenar: o primeiro item é o que abre.
6. Envie a foto de capa do card e a logo, que aparece como um selo quadrado sobre a capa.
7. Em texto, escreva a `Frase de destaque` (opcional, aparece em letra grande numa faixa rosa) e a `Descrição completa *`.
8. Em endereço, digite o CEP e escolha a cidade e o bairro: o mapa é encontrado sozinho. Os campos são os mesmos do guia comercial.
9. Se quiser, adicione mais fotos e vídeos na galeria.
10. Em botões e contato, preencha o link `Conheça a instituição`, o WhatsApp, o Instagram, o Facebook e o e-mail.
11. Confira tudo e clique em salvar a instituição.

## resultado
a instituição aparece na página de doações, com a causa escolhida como filtro. Na página dela ficam a capa, a causa, a cidade, os botões de contato, as redes sociais, o botão de copiar o link, a descrição, o mapa com o botão `Como chegar` e a galeria.

## desvios
- se a causa que você precisa não está na lista, crie-a primeiro em `Causas`.
- excluir uma instituição a tira do site.

## quando pedir ajuda
peça ajuda se a instituição não aparecer no site depois de salvar ou se o mapa não for encontrado a partir do CEP.

## fontes
- vídeo `grm3bUrPBxM`.
- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:231` — menu `Doações`.
- `portal-cidade/frontend/src/app/painel/doacoes/EditorInstituicao.tsx` — rótulos do formulário.
- `portal-cidade/frontend/src/app/painel/doacoes/causas/page.tsx` — `Nova causa` e `Criar causa`.

## lacunas
não verificado visualmente. O nome exato do botão de salvar a instituição não foi conferido. A ordem "causa antes da instituição" é inferência pelo formulário (a instituição pede uma causa da lista); o vídeo não afirma isso.

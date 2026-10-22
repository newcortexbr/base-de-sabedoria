---
id: gerenciar-banners-publicitarios
titulo: gerenciar banners publicitários
publico:
  - admin
modulo: banners
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - BqIfSq7bVXM
---

## objetivo

aqui você cria, coloca no ar, tira do ar e apaga os banners de publicidade do portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## veja também
- para colocar ou tirar um banner do ar sem apagar, veja o artigo "ativar ou desativar um banner publicitário".
- para mudar um banner, veja o artigo "editar um banner publicitário".
- para apagar um banner, veja o artigo "excluir um banner publicitário".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Banners Publicitários`. [guia=menu:/painel/guia/banners] [t=10] Na lista você busca pelo título e filtra por página e por situação: no ar, agendado, vencido, fora do ar, aguardando pagamento, pendente de aprovação ou reprovado. Cada banner pode ser ativado ou desativado, editado ou excluído.
2. Para criar, clique em `+ Novo Banner` (com a lista vazia, o botão se chama `+ Cadastrar banner`). [guia=guia-banners.novo] [t=46]
3. Escreva o `Título *` do banner. [guia=guia-banners-cadastrar.titulo] [t=48]
4. Envie a imagem do banner (é obrigatória). [guia=guia-banners-cadastrar.imagem] [t=49]
5. Se quiser, escreva a `URL de Destino`, o endereço que abre quando alguém clica no banner. [guia=guia-banners-cadastrar.url-destino] [t=51]
6. Clique em `Posição` para escolher onde o banner aparece. [guia=guia-banners-cadastrar.posicao] [t=54]
7. Na lista, escolha a página e o lugar exato (por exemplo, topo da página, cabeçalho, outdoor, dentro da matéria ou lateral, cada um com o tamanho ideal da arte); digite no filtro para achar mais rápido. A prévia ao lado mostra como o banner vai ficar. [guia=guia-banners-cadastrar.posicao-lista] [t=67]
8. No quadro `Dados da venda`, anote a empresa, o telefone e o valor do plano. Esses dados são de uso interno e nunca aparecem para o visitante. Se quiser, atrele o banner a um cliente já cadastrado em `Meus Clientes`. [guia=guia-banners-cadastrar.dados-da-venda] [t=83]
9. Escolha a `Data de início`. [guia=guia-banners-cadastrar.data-inicio] [t=95]
10. Escolha a `Data de fim`. O banner vencido sai do site sozinho quando essa data passa. [guia=guia-banners-cadastrar.data-fim] [t=97]
    Defina também a ordem do banner.
11. Deixe `Ativo` marcado. [guia=guia-banners-cadastrar.salvar]
12. Clique em `Salvar Banner`. Nada muda no ar até você salvar. [guia=guia-banners-cadastrar.salvar] [t=100]

## resultado

o banner aparece na posição escolhida, dentro das datas.

## banners vendidos pelo cliente

você não precisa cadastrar todos os banners à mão. O cliente contrata o espaço pelo painel dele: escolhe a página e a posição, escolhe o período, envia a arte e paga por Pix ou cartão. Os preços vêm de `Meus Planos`, no espaço de publicidade, e só as posições com preço ficam à venda. O banner pago pelo cliente entra na sua fila de aprovação, e você decide se vai ao ar.

## desvios

- Algumas posições dependem de módulos ligados.
- Se o campo de categoria vier vazio, recarregue a página.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/banners/`
- `suporte-kb/mapa/admin/telas/painel-guia-banners.md`, `painel-guia-banners-cadastrar.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.

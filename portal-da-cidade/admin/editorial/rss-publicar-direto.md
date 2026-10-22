---
id: rss-publicar-direto
titulo: "escolher se as notícias de uma fonte de RSS vão ao ar sozinhas"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo
aqui você escolhe se as notícias de uma fonte vão ao ar sozinhas ou entram como rascunho.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias Automáticas` e depois em `Fontes de RSS`. [guia=menu:/painel/noticias/fontes-rss]
2. Para escolher se as notícias de uma fonte vão ao ar sozinhas, clique no lápis na linha da fonte que você quer. [guia=fontes-rss.editar]
3. Na mesma edição, escolha a quantidade de notícias que entram por vez. Depois marque `Publicar direto no site` para as notícias irem ao ar sozinhas. Desmarcado, elas entram como rascunho para você revisar. [guia=fontes-rss-cadastrar.publicar-direto]
4. Clique em `Salvar`. [guia=fontes-rss-cadastrar.enviar]

## resultado
A fonte passa a seguir a escolha feita.

## desvios

- Fonte desativada para de trazer notícias.
- Se a verificação do endereço falhar, confira o link do RSS.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/noticias/fontes-rss/`
- `suporte-kb/mapa/admin/telas/painel-noticias-fontes-rss.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
- revisão 2026-10-19: o formulário não tem mais campo de categoria (o artigo antigo citava). A conferência do endereço é automática ao sair do campo, não há botão de verificar. O catálogo adiciona direto pelo botão `Adicionar`, não preenche o formulário.

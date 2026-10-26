---
id: rss-editar-endereco-e-quantidade
titulo: "editar endereço e quantidade de uma fonte de RSS"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo

Aqui você ajusta a quantidade importada e, em fonte própria, o nome e o endereço do RSS.

## pré-requisitos

- Entrar no painel como administrador.
- Ter a fonte cadastrada.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias Automáticas`, clique em `Fontes de RSS`. [t=9] [guia=menu:/painel/noticias/fontes-rss]
2. Na linha da fonte, clique no lápis `Editar`; na origem `Plataforma`, o aviso é `Configurar (título e URL são da plataforma)`. [t=75] [guia=fontes-rss.editar]
3. Se a fonte for própria e precisar mudar o nome, altere `Título *`. [guia=fontes-rss-cadastrar.titulo]
4. Se a fonte for própria e precisar mudar o endereço, altere `URL do RSS *`. [guia=fontes-rss-cadastrar.url]
5. Escolha `Quantidade de notícias por vez *`. [t=80] [guia=fontes-rss-cadastrar.quantidade]
6. Clique em `Salvar`. [guia=fontes-rss-cadastrar.enviar]

## resultado

A tela mostra `Fonte salva` e volta à lista. Em fonte da plataforma, título e endereço ficam bloqueados; quantidade, status e publicação direta podem ser configurados.

## desvios

- O endereço de fonte própria é conferido ao sair do campo e novamente ao salvar.
- Quantidade por vez não significa garantia de que esse número de notícias novas esteja disponível.
- Salvar uma fonte ligada solicita uma rodada de importação.
- Para status e publicação direta, use os artigos próprios.

## fontes

- `frontend/src/app/painel/noticias/fontes-rss/page.tsx:282` — edição e origem.
- `frontend/src/components/painel/FonteRssForm.tsx:143` — campos enviados por origem.
- `frontend/src/components/painel/FonteRssForm.tsx:238` — título e URL bloqueados em fonte da plataforma.
- `frontend/src/components/painel/FonteRssForm.tsx:360` — quantidade.
- Vídeo `r5rFCgAV0mg`: edição em 75s e quantidade em 80s.

## lacunas

Não executadas troca de URL ou importação. Não foi verificado o efeito sobre notícias que a fonte já trouxe.

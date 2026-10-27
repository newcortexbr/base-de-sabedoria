---
id: noticias-automaticas-fontes-rss
titulo: "notícias automáticas: cadastrar e controlar fontes de RSS"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - rss
  - noticia
  - automatico
  - fonte
  - ligar
  - desligar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo

Aqui você cadastra fontes prontas do G1 para importar notícias. As opções nacionais e as regionais ficam separadas no catálogo.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias Automáticas`, clique em `Fontes de RSS`. [t=9] [guia=menu:/painel/noticias/fontes-rss]
2. Clique em `+ Cadastrar RSS`. [t=20] [guia=fontes-rss.cadastrar]
3. Na aba `Escolher da lista`, já aberta, marque as fontes que deseja cadastrar; para notícias locais, procure seu estado ou região no grupo regional. [t=63] [guia=fontes-rss-cadastrar.lista]
4. Clique em `Criar 1 fonte` ou `Criar N fontes`, conforme a quantidade marcada. [t=65] [guia=fontes-rss-cadastrar.criar]
5. Após conferir o resultado, clique em `Ver na lista de fontes →`, quando houver fontes criadas. [guia=fontes-rss-cadastrar.ver-lista]

## resultado

A tela informa quais fontes foram criadas, quais já existiam e quais não puderam ser criadas. Fontes já cadastradas ficam marcadas e travadas no catálogo, com `já cadastrada`.

## desvios

- Sem seleção, o botão mostra `Marque ao menos uma fonte`.
- As categorias globais não filtram por cidade; as regionais usam a região indicada pelo feed do G1.
- Para endereço fora da lista, veja “adicionar fonte de RSS colando o endereço”.
- Para ativação, quantidade e publicação automática, veja os artigos próprios de RSS.
- O código separa a busca dos feeds da entrada das notícias no portal: a grade de publicação é 7h e 19h, no horário de São Paulo. Salvar uma fonte ligada também solicita uma rodada; isso não garante que haja notícia nova.

## fontes

- `frontend/src/components/painel/Sidebar.tsx:120` — menu.
- `frontend/src/app/painel/noticias/fontes-rss/cadastrar/page.tsx:15` — aba padrão.
- `frontend/src/components/painel/FonteRssCatalogoPicker.tsx:148` — resultado e retorno.
- `frontend/src/components/painel/FonteRssCatalogoPicker.tsx:212` — seleção e botão Criar.
- `backend/noticias/rss.py:321` — grade de publicação.
- `backend/noticias/api_admin.py:1440` — rodada ao salvar.
- Vídeo `r5rFCgAV0mg`, legenda em 9s, 20s e 63s–68s.

## lacunas

Não executadas importações nem conferidos os agendadores do ambiente publicado. A grade do código não comprova a execução pontual em produção.

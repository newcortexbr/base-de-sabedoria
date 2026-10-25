---
id: rss-ver-atualizacao
titulo: "ver quando cada fonte de RSS trouxe notícias"
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

Aqui você consulta a última tentativa de atualização de uma fonte e o resumo do resultado. Uma tentativa não garante que tenha entrado notícia nova.

## pré-requisitos

- Entrar no painel como administrador.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias Automáticas`, clique em `Fontes de RSS`. [t=9] [guia=menu:/painel/noticias/fontes-rss]
2. Se necessário, localize a fonte em `Buscar por título ou URL...`. [guia=fontes-rss.buscar]
3. Leia a data e o resumo na célula `Última Atualização` da fonte. [t=15] [guia=fontes-rss.atualizacao-linha]

## resultado

Sem uma tentativa registrada, a célula mostra `Nunca atualizado`. Quando há registro, mostra data e hora, com resumo quando disponível; erro aparece em vermelho.

## desvios

- A coluna não é um botão para atualizar agora.
- Não confunda fonte ligada com importação bem-sucedida.
- Ao pedir ajuda, informe a fonte e o texto do resumo, sem presumir que a data signifique publicação.

## fontes

- `frontend/src/app/painel/noticias/fontes-rss/page.tsx:36` — última tentativa, resumo e erro.
- `frontend/src/app/painel/noticias/fontes-rss/page.tsx:183` — busca.
- `frontend/src/app/painel/noticias/fontes-rss/page.tsx:264` — célula de cada fonte.
- Vídeo `r5rFCgAV0mg`, legenda em 9s e 15s.

## lacunas

Não conferidos os registros reais nem a execução dos agendadores em produção.

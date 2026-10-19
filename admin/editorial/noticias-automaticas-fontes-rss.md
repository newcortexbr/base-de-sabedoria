---
id: noticias-automaticas-fontes-rss
titulo: notícias automáticas: cadastrar e controlar fontes de RSS
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-16
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo

trazer notícias de outros sites automaticamente, por fontes de RSS.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Abra `Notícias Automáticas` → `Fontes de RSS` (`/painel/noticias/fontes-rss`). A lista mostra a última atualização de cada fonte.
2. Para adicionar, clique em cadastrar. Você pode escolher uma fonte pronta do catálogo, que já preenche o formulário.
3. Confira título, endereço do RSS, quantidade de notícias por vez, status e categoria. Use a verificação do endereço antes de salvar.
4. Salve. Você volta para a lista.
5. Na lista, ative ou desative uma fonte, edite ou exclua.

## resultado

a fonte cadastrada e ativa passa a trazer notícias para o portal.

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

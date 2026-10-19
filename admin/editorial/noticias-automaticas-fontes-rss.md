---
id: noticias-automaticas-fontes-rss
titulo: "notícias automáticas: cadastrar e controlar fontes de RSS"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo

trazer notícias de outros sites automaticamente, por fontes de RSS.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias Automáticas` e depois em `Fontes de RSS` (`/painel/noticias/fontes-rss`). A lista mostra cada site de onde vêm as notícias e, na coluna `Última Atualização`, quando ele trouxe notícias pela última vez.
2. Para adicionar, clique no botão `+ Cadastrar RSS` no topo da lista.
3. Na aba `Escolher da lista`, marque os sites prontos que você quer (por exemplo, do Portal G1) e clique em `Adicionar`.
4. Se o site que você quer não está na lista, clique na aba `Colar endereço`. Preencha o `Título`, cole o endereço em `URL do RSS` e escolha a `Quantidade de notícias por vez` e o `Status`. Ao sair do campo do endereço, o sistema confere sozinho se ele funciona.
5. Clique em `Salvar`. Você volta para a lista.
6. Para escolher se as notícias de uma fonte vão ao ar sozinhas, clique no lápis dela e marque `Publicar direto no site`. Desmarcado, elas entram como rascunho para você revisar. Clique em `Salvar`.
7. Na lista, clique na situação da fonte para ligar ou desligar. Use o lápis para editar e a lixeira para excluir.

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
- revisão 2026-10-19: o formulário não tem mais campo de categoria (o artigo antigo citava). A conferência do endereço é automática ao sair do campo, não há botão de verificar. O catálogo adiciona direto pelo botão `Adicionar`, não preenche o formulário.

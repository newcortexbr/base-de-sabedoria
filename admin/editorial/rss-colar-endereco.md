---
id: rss-colar-endereco
titulo: "adicionar fonte de RSS colando o endereço"
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
aqui você cadastra um site de notícias que não está na lista pronta, colando o endereço do RSS dele.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias Automáticas` e depois em `Fontes de RSS`. [guia=menu:/painel/noticias/fontes-rss]
2. Para adicionar, clique no botão `+ Cadastrar RSS` no topo da lista. [guia=fontes-rss.cadastrar]
3. Clique na aba `Colar endereço`. [guia=fontes-rss-cadastrar.aba-colar]
4. Preencha o `Título`. [guia=fontes-rss-cadastrar.titulo]
5. Cole o endereço em `URL do RSS`. [guia=fontes-rss-cadastrar.url]
6. Escolha a `Quantidade de notícias por vez`. [guia=fontes-rss-cadastrar.quantidade]
7. Escolha o `Status`: `Ligada` ou `Desligada`. [guia=fontes-rss-cadastrar.status]
8. Clique em `Adicionar`. Você volta para a lista. [guia=fontes-rss-cadastrar.enviar]

## resultado
A fonte aparece na lista de fontes.

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

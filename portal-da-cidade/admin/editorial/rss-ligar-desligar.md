---
id: rss-ligar-desligar
titulo: "ligar ou desligar uma fonte de RSS"
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
aqui você liga ou desliga uma fonte na lista.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias Automáticas` e depois em `Fontes de RSS`. [guia=menu:/painel/noticias/fontes-rss]
2. Na lista, clique na chavinha da coluna `Status` para ligar ou desligar a fonte. [guia=fontes-rss.status]

## resultado
A fonte fica ligada ou desligada.

O status também pode ser mudado no formulário de edição da fonte (o lápis), além da chavinha da lista.

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

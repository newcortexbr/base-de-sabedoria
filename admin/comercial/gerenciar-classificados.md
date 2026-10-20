---
id: gerenciar-classificados
titulo: localizar e gerenciar classificados no painel
publico:
  - admin
modulo: classificados
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-20
validacao: docs-e-codigo
videos:
  - Ps1cgdLQ1FI
---

## objetivo

aqui você acha, muda e apaga os anúncios de classificados do portal. Vagas de emprego têm outro artigo.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo de classificados estar ativo.

## veja também
- para apagar um anúncio, veja o artigo "excluir um anúncio classificado".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Classificados` e depois em `Listar Anúncios`. [guia=menu:/painel/classificados]
2. No topo da lista de anúncios, escreva o título ou a descrição no campo de busca. [guia=classificados.busca]
3. Se quiser, escolha a situação do anúncio. [guia=classificados.situacao]
4. Clique em `Filtrar`. [guia=classificados.filtrar]
5. Para mudar um anúncio, clique em `Editar` na linha do anúncio que você quer. [guia=classificados.editar]

## resultado

A lista mostra os anúncios disponíveis para administração naquele portal.

## desvios

- Para vagas de emprego, veja o artigo "localizar e gerenciar vagas de emprego no painel".
- Anúncio vencido pode sair do ar automaticamente. Este artigo não define regras de cobrança ou publicação.

## quando pedir ajuda

peça ajuda se o anúncio não aparecer ou se houver dúvida sobre edição, remoção ou situação. A IA não publica, exclui nem altera registros.

## fontes

- `portal-cidade/frontend/src/app/painel/vagas/page.tsx:1`
- `portal-cidade/frontend/src/app/painel/classificados/page.tsx:1`
- `portal-cidade/CLAUDE.md:55-56`
- `portal-cidade/docs/PRODUCT.md:43-44`

## lacunas

os filtros e ações internas da lista não foram examinados em detalhe; orientamos somente as rotas confirmadas.

---
id: gerenciar-vagas-e-classificados
titulo: localizar e gerenciar vagas de emprego no painel
publico:
  - admin
modulo: vagas
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo

aqui você acha, muda e apaga as vagas de emprego do portal. Anúncios de classificados têm outro artigo.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo correspondente estar ativo.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Vagas de Emprego` e depois em `Listar Vagas`. [guia=menu:/painel/vagas] [t=4]
2. No topo da lista de vagas, escreva o cargo ou a empresa no campo de busca. [guia=vagas.busca] [t=31]
3. Se quiser, escolha a situação da vaga. [guia=vagas.situacao] [t=34]
4. Clique em `Filtrar`. [guia=vagas.filtrar] [t=36]
5. Para mudar uma vaga, clique em `Editar` na linha da vaga que você quer. [guia=vagas.editar] [t=42]
6. Para apagar, clique em `Excluir` na linha da vaga. [guia=vagas.excluir]
7. Leia a pergunta que o navegador abre: a exclusão é definitiva. Só então confirme. [guia=vagas.excluir]

## resultado

A lista correspondente mostra os registros disponíveis para administração naquele portal.

## desvios

- Para anúncios de classificados, veja o artigo "localizar e gerenciar classificados no painel".
no código, `classificados` designa vagas e `anuncios` designa classificados; para o usuário, as telas reais são `Vagas` e `Classificados`. Anúncio vencido pode sair do ar automaticamente. Este artigo não define regras de cobrança ou publicação.

## quando pedir ajuda

peça ajuda se o registro não aparecer ou se houver dúvida sobre edição, remoção ou situação. A IA não publica, exclui nem altera registros.

## fontes

- `portal-cidade/frontend/src/app/painel/vagas/page.tsx:1`
- `portal-cidade/frontend/src/app/painel/classificados/page.tsx:1`
- `portal-cidade/CLAUDE.md:55-56`
- `portal-cidade/docs/PRODUCT.md:43-44`

## lacunas

os filtros e ações internas das listas não foram examinados em detalhe; orientamos somente as rotas confirmadas.

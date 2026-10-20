---
id: excluir-vaga
titulo: "excluir uma vaga de emprego"
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
aqui você apaga uma vaga. A exclusão é definitiva.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo correspondente estar ativo.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Vagas de Emprego` e depois em `Listar Vagas`. [guia=menu:/painel/vagas]
2. No topo da lista de vagas, escreva o cargo ou a empresa no campo de busca. [guia=vagas.busca]
3. Se quiser, escolha a situação da vaga. [guia=vagas.situacao]
4. Clique em `Filtrar`. [guia=vagas.filtrar]
5. Para apagar, clique em `Excluir` na linha da vaga. [guia=vagas.excluir]
6. Leia a pergunta que o navegador abre: a exclusão é definitiva. Só então confirme. [guia=vagas.excluir]

## resultado
A vaga some da lista.

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

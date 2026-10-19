---
id: gerenciar-vagas-e-classificados
titulo: localizar vagas e classificados no painel
publico:
  - admin
modulo: vagas e classificados
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
  - Ps1cgdLQ1FI
---

## objetivo

acessar as áreas administrativas de vagas e classificados para localizar registros.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo correspondente estar ativo.

## passos

1. Para vagas: no menu da esquerda, na parte `Conteúdo`, clique em `Vagas de Emprego` e depois em `Listar Vagas` (`/painel/vagas`). [guia=menu:/painel/vagas] [t=4]
2. No topo da lista de vagas, escreva o cargo ou a empresa no campo de busca. [guia=vagas.busca] [t=31]
3. Se quiser, escolha a situação da vaga. [guia=vagas.situacao] [t=34]
4. Clique em `Filtrar`. [guia=vagas.filtrar] [t=36]
5. Para mudar uma vaga, clique em `Editar` na linha da vaga que você quer. [guia=vagas.editar] [t=42]
6. Para apagar, clique em `Excluir` na linha da vaga. Leia a pergunta de confirmação que o navegador abre: a exclusão é definitiva. [guia=vagas.excluir]
7. Para anúncios de classificados: no mesmo menu, clique em `Classificados` e depois em `Listar Anúncios` (`/painel/classificados`). [guia=menu:/painel/classificados]
8. No topo da lista de anúncios, escreva o título ou a descrição no campo de busca. [guia=classificados.busca]
9. Se quiser, escolha a situação do anúncio. [guia=classificados.situacao]
10. Clique em `Filtrar`. [guia=classificados.filtrar]
11. Para mudar um anúncio, clique em `Editar` na linha do anúncio que você quer. [guia=classificados.editar]
12. Para apagar, clique em `Excluir` na linha do anúncio. Leia a pergunta de confirmação que o navegador abre: a exclusão é definitiva. [guia=classificados.excluir]

## resultado

A lista correspondente mostra os registros disponíveis para administração naquele portal.

## desvios

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

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
revisado_em: 2026-10-15
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

1. Para vagas: no menu da esquerda, na parte `Conteúdo`, clique em `Vagas de Emprego` e depois em `Listar Vagas` (`/painel/vagas`).
2. Para anúncios de classificados: no mesmo menu, clique em `Classificados` e depois em `Listar Anúncios` (`/painel/classificados`).
3. No topo da lista, escreva no campo de busca ou escolha a situação e a área (ou categoria). Depois clique em `Filtrar`.
4. Para mudar um item, clique em `Editar` na linha dele. Antes de apagar, confira se é o item certo e leia a pergunta de confirmação: a exclusão é definitiva.

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

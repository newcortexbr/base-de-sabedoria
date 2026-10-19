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

1. Para vagas, abra `Vagas` em `/painel/vagas`.
2. Para anúncios classificados, abra `Classificados` em `/painel/classificados`.
3. Use os filtros e ações que a tela oferecer para localizar o registro.
4. Antes de alterar ou remover conteúdo, confira o registro e a confirmação exibida.

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

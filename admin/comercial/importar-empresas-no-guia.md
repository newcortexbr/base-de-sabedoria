---
id: importar-empresas-no-guia
titulo: importar empresas no Guia a partir de lista do Google Maps
publico:
  - admin
modulo: guia
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-16
validacao: docs-e-codigo
videos:
  - jl7GHmHVJcM
---

## objetivo

cadastrar várias empresas de uma vez, usando o arquivo gerado pelo extrator do Google Maps.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. No topo da página, clique no botão `Importar do Google Maps` (`/painel/guia/empresas/importar`).
2. No quadro `Enviar planilha`, escolha o arquivo "Base para Portal" que o extrator do Google Maps gerou. Espere a mensagem "Enviando e processando a planilha..." terminar.
3. Na revisão, para cada categoria que veio do arquivo, escolha em `Escolha a categoria` qual categoria do Guia ela vai usar.
4. Clique em `Importar … empresas` e espere terminar. Se parar no meio por erro, use `Continuar`.
5. No final, clique em `Ver empresas` para conferir. Mais abaixo, em `Importações anteriores`, ficam as importações já feitas, que podem ser abertas de novo.

## resultado

as empresas do arquivo entram no Guia.

## desvios

- `Desfazer` apaga as empresas criadas naquele lote; use só se for preciso.
- O Guia precisa estar ligado no portal.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/guia/empresas/importar/page.tsx`
- `suporte-kb/mapa/admin/telas/painel-guia-empresas-importar.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.

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

1. Abra o Guia Comercial e vá em importar (`/painel/guia/empresas/importar`).
2. Envie o arquivo da lista.
3. Na revisão, ligue cada categoria do arquivo a uma categoria do Guia.
4. Inicie a importação e aguarde terminar. Se parar com erro, dá para continuar.
5. Ao final, confira as empresas criadas. As importações anteriores ficam listadas e podem ser reabertas.

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

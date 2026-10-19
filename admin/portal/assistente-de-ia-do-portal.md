---
id: assistente-de-ia-do-portal
titulo: Assistente de IA: ligar e ver o que perguntam
publico:
  - admin
modulo: assistente
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-16
validacao: docs-e-codigo
videos:
  - 0nkWIgiQfwM
---

## objetivo

ligar ou desligar o assistente no site e ver o que os visitantes perguntam.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Abra `Assistente de IA` na seção Sistema do menu (`/painel/assistente`).
2. Marque ou desmarque `Mostrar o Assistente de IA`. Salva na hora.
3. Escolha o período (7, 30 ou 90 dias).
4. Veja as perguntas, as sem resultado, as palavras, cidades e as últimas perguntas.

## resultado

o assistente aparece ou some do site, e você acompanha o uso. A tela é só de leitura.

## desvios

- Se a tela mostrar acesso restrito, entre com conta de administrador.
- Se der erro, use `Tentar de novo`.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/assistente/page.tsx`
- `suporte-kb/mapa/admin/telas/painel-assistente.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.

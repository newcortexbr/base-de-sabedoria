---
id: assistente-de-ia-do-portal
titulo: "Assistente de IA: ligar e ver o que perguntam"
publico:
  - admin
modulo: assistente
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - 0nkWIgiQfwM
---

## objetivo

aqui você liga ou desliga o assistente no site e vê o que os visitantes perguntam.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Assistente de IA`. [guia=menu:/painel/assistente] [t=81]
2. No quadro `Assistente de IA no site`, marque ou desmarque `Mostrar o Assistente de IA`. Não precisa salvar: muda na hora e aparece "Salvo!". [guia=assistente.mostrar] [t=83]
3. No alto da página, em `O que os visitantes procuram no seu portal`, escolha o período nos botões `7 dias`, `30 dias` ou `90 dias`. [guia=assistente.periodo] [t=94]
4. Veja os quadros com o que as pessoas perguntaram: `Perguntas sem resultado`, `Palavras mais buscadas`, `Cidades citadas`, `Categorias mais pedidas`, `Onde mais procuram` e `Últimas perguntas`. [guia=assistente.quadros]

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

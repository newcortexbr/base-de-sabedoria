---
id: ac-atualizar-telefone
titulo: "atualizar meu telefone / WhatsApp"
publico:
  - cliente
modulo: conta
aba: Minha conta
tipo_problema:
  - trocar telefone
  - mudar whatsapp
  - atualizar celular
  - DDD não existe
  - telefone inválido
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

trocar o número de telefone/WhatsApp de contato da sua conta.

## pré-requisitos

- Estar logado.

## passos

1. No rodapé do menu da esquerda, clique no seu nome (`Minha conta`). [guia=menu:/minha-conta]
2. No quadro `Dados cadastrais`, apague o número antigo do campo `Telefone / WhatsApp`. [guia=conta.telefone]
3. Escreva o número novo com DDD (10 ou 11 números). [guia=fora]
4. Clique em `Salvar alterações`. [guia=conta.salvar-dados]

## resultado

aparece "Telefone atualizado." O número vale para todos os seus negócios.

## desvios

- "Informe o DDD e o número completo.": o número está incompleto.
- "Informe o telefone com DDD, 10 ou 11 números.": quantidade de números errada.
- "Esse DDD não existe. Confira o número.": DDD inválido.
- "Celular com 11 números começa com 9 depois do DDD.": falta o 9 do celular.
- "Esse número parece inválido. Confira os dígitos e tente de novo.": número com dígitos todos iguais ou parecidos.
- "Nenhuma alteração para salvar.": o número é igual ao que já estava.
- "Não foi possível salvar. Confira os dados e tente novamente.": falha ao salvar; tente de novo.

## quando pedir ajuda

peça ajuda se o número certo for recusado várias vezes.

## fontes

- `src/app/(cliente)/minha-conta/MinhaContaForm.tsx:76` — campo "Telefone / WhatsApp" e "Informe o DDD e o número completo."; `:98` — "Telefone atualizado."; `:111` — `Salvar alterações`.
- `src/ui/status/phoneMessages.ts` — mensagens de telefone inválido.
- `src/app/(cliente)/minha-conta/actions.ts:37` — telefone inválido; `:39` — erro genérico; `:62` — "Nenhuma alteração para salvar.".

## lacunas

tela não validada no navegador.

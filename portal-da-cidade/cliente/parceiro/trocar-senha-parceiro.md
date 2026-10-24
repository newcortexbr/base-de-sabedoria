---
id: cliente-parceiro-trocar-senha
titulo: "trocar a senha do painel do parceiro estando logado"
publico:
  - parceiro
modulo: parceiro
categoria: parceiro
aba: Perfil
tipo_problema:
  - trocar senha do parceiro
  - mudar minha senha de parceiro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

trocar a senha da área do parceiro quando você sabe a senha atual.

## pré-requisitos

- estar logado no painel do parceiro.
- saber a senha atual.

## passos

1. No menu da esquerda, na parte `Minha conta`, clique em `Perfil`. [guia=menu:/parceiro/perfil]
2. No quadro `Trocar senha`, escreva a senha de hoje em `Senha atual`. [guia=parceiro.senha-atual]
3. Escreva a senha nova em `Nova senha` (mínimo de 8 caracteres). [guia=parceiro.senha-nova]
4. Repita a senha nova em `Confirmar nova senha`. [guia=parceiro.senha-confirmar]
5. Se quiser conferir o que digitou, marque `Mostrar senhas`. [guia=parceiro.senha-mostrar]
6. Clique em `Salvar nova senha`. [guia=parceiro.senha-salvar]

## resultado

aparece "Senha alterada com sucesso."

## desvios

- confirmação diferente: a tela mostra "As senhas não conferem." e nada é salvo.
- esqueceu a senha atual: use `Esqueci minha senha` na tela de entrada (veja "recuperar a senha da área de parceiro").

## fontes

- `portal-cidade/frontend/src/app/parceiro/(shell)/perfil/ParceiroPerfilClient.tsx:24-90` — quadro `Trocar senha`, campos, mensagens.
- `portal-cidade/frontend/src/app/parceiro/ParceiroSidebar.tsx:27-29` — `Perfil` em `Minha conta`.

## lacunas

- regras do servidor para a senha (além do mínimo de 8 caracteres mostrado na tela) não verificadas.

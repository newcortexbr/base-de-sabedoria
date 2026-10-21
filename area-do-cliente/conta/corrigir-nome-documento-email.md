---
id: ac-corrigir-nome-documento-email
titulo: "corrigir nome, CPF/CNPJ ou e-mail da conta"
publico:
  - cliente
modulo: conta
aba: Minha conta
tipo_problema:
  - trocar e-mail
  - mudar e-mail de acesso
  - nome errado
  - corrigir cpf
  - corrigir cnpj
  - alterar titular
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

pedir a correção de nome, CPF/CNPJ ou e-mail de acesso, que você não consegue mudar sozinho.

## pré-requisitos

- Estar logado.

## passos

1. No rodapé do menu da esquerda, clique no seu nome (`Minha conta`).
2. No quadro `Dados cadastrais`, clique no link `solicite a alteração ao suporte` (abaixo dos campos). Abre `Novo chamado` (`/suporte/novo?assunto=conta`) já com `Negócio vinculado` em `Nenhum: é sobre minha conta` e `Assunto` em `Minha conta`.
3. Em `Título`, escreva o que quer corrigir (por exemplo, "Corrigir e-mail de acesso").
4. Em `Mensagem`, informe o dado atual e o dado correto.
5. Clique em `Enviar chamado`.

## resultado

o chamado vai para a equipe, que faz a correção e responde pelo chamado.

## desvios

- Nome, CPF/CNPJ e e-mail identificam a conta, por isso aparecem com cadeado e ficam protegidos.
- Se o e-mail mudar, você passa a entrar com o e-mail novo.
- Não mande senha, código ou documento sigiloso na mensagem: a tela avisa "Não envie senhas, códigos de acesso ou chaves na mensagem nem nos anexos."

## quando pedir ajuda

este artigo já é o pedido de ajuda. Se não conseguir entrar para abrir o chamado (por exemplo, perdeu o acesso ao e-mail), fale com quem atendeu você na contratação.

## fontes

- `src/app/(cliente)/minha-conta/MinhaContaForm.tsx:86` — "Nome, CPF/CNPJ e e-mail identificam sua conta..." e link para `/suporte/novo?assunto=conta`.
- `src/app/(cliente)/suporte/novo/page.tsx:25` — `assunto=conta` preenche "Nenhum: é sobre minha conta" e `Minha conta`.
- `src/app/(cliente)/minha-conta/actions.ts:29` — o sistema recusa mudar e-mail, CPF/CNPJ e nome por esta tela.
- `src/app/(cliente)/suporte/novo/NovoTicketForm.tsx:241` — aviso de não enviar senhas.

## lacunas

o código não diz se a troca de e-mail exige alguma confirmação no endereço novo, nem documentos exigidos para trocar titular ou CPF/CNPJ.

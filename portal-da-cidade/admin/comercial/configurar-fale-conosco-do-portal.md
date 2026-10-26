---
id: configurar-fale-conosco-do-portal
titulo: "configurar a página Fale Conosco do portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8M4kdEfP7Eg
  - XekThBh1ygU
---

## objetivo

aqui você altera os contatos e o texto da página Fale Conosco.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações`. Só é preciso se as opções estiverem fechadas. [t=6] [guia=configuracoes.abrir-menu]
2. Clique em `Configurações Gerais`. [t=9] [guia=menu:/painel/configuracoes]
3. No quadro `Página Fale Conosco`, preencha `E-mail de contato`. [t=53] [guia=configuracoes.email-contato]
4. Preencha `Telefone` com DDD. [t=53] [guia=configuracoes.telefone-contato]
5. Preencha `Título da página` com até 120 caracteres. [t=53] [guia=configuracoes.titulo-contato]
6. Preencha `Texto da página` com até 300 caracteres. [t=56] [guia=configuracoes.texto-contato]
7. Clique em `Salvar Fale Conosco`. [t=56] [guia=configuracoes.salvar-contato]

## resultado

aparece `Salvo com sucesso` e a atualização é enviada ao site. A página usa os campos preenchidos junto com o WhatsApp e as redes sociais.

## desvios

Telefone inválido impede salvar e mostra `Telefone:` seguido do motivo. WhatsApp e perfis sociais são alterados no quadro `Redes Sociais`, descrito em “configurar as redes sociais do portal”.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:195` — envio e validação.
- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:722` — campos, limites e botão.

## lacunas

Sem validação no navegador ou medição do tempo de atualização pública. O uso do e-mail como endereço de resposta em cada tipo de mensagem não foi verificado.

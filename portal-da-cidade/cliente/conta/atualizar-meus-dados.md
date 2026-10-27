---
id: cliente-atualizar-meus-dados
titulo: "atualizar meus dados de contato (anunciante pessoa física)"
publico:
  - cliente
modulo: conta
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - mudar meu nome
  - trocar meu whatsapp
  - corrigir cpf
  - mudar meu e-mail
  - meus dados
tags:
  - editar
  - dados
  - contato
  - whatsapp
  - perfil
  - classificado
  - pessoa fisica
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

aqui a pessoa que anuncia em Classificados troca o nome e o WhatsApp que vão nos próximos anúncios.

## pré-requisitos

- Estar logado na área do cliente como pessoa física (anunciante).

## passos

1. No menu da esquerda, clique em `Meus dados`. [guia=menu:/minha-conta/meus-dados]
2. No quadro `Contato`, corrija o `Nome`. [guia=meus-dados.nome]
3. Corrija o `WhatsApp`. [guia=meus-dados.whatsapp]
4. Clique em `Salvar dados`. [guia=meus-dados.salvar]

## resultado

aparece "Dados salvos." O contato novo vale para os próximos anúncios.

## desvios

- `E-mail` e `CPF` não mudam nesta tela. Para corrigir o CPF, fale com o portal (a tela diz "Para corrigir o CPF, fale com o portal.").
- a foto e o texto `Sobre você` ficam no quadro ao lado, `Foto e apresentação` (veja "trocar a foto e a apresentação do anunciante").
- empresa não tem esta tela: os contatos da empresa ficam em `Minha empresa`.
- colunista vê em `Meus dados` o perfil de colunista, não o contato (veja "atualizar o perfil de colunista").

## quando pedir ajuda

peça ajuda se precisar trocar o e-mail ou o CPF.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/meus-dados/MeusDados.tsx:72-117` — campos, `Salvar dados`, "Dados salvos.", CPF e e-mail só leitura.
- `portal-cidade/frontend/src/app/minha-conta/meus-dados/page.tsx:20-50` — pessoa física vê contato; demais perfis veem o perfil de colunista.
- `portal-cidade/frontend/src/app/minha-conta/perfil-da-area.ts:37-57` — `Meus dados` no menu de colunista e pessoa física.

## lacunas

- tela não validada no navegador. Não confirmei se o contato novo muda anúncios já publicados.
- o item de menu `Meus dados` só existe nos perfis colunista e pessoa física; a marca de menu é gerada em tempo de execução (`menu:` + endereço) e não é reconhecida por busca estática.

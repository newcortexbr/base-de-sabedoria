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
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui a pessoa que anuncia em Classificados troca o nome e o WhatsApp que vão nos próximos anúncios.

## pré-requisitos

- Estar logado na área de anúncios como pessoa física.

## passos

1. No menu da esquerda da sua área, clique em `Meus dados`. [guia=fora]
2. No quadro `Contato`, corrija o `Nome`. [guia=fora]
3. Corrija o `WhatsApp`. [guia=fora]
4. Clique em `Salvar dados`. [guia=fora]

## resultado
aparece "Dados salvos.". O contato novo vale para os próximos anúncios.

## desvios

- O E-mail e o CPF não mudam nesta tela. Para corrigir o CPF, fale com o portal.
- Empresa não tem esta tela: os contatos da empresa ficam em `Minha empresa`. Veja "atualizar os contatos da empresa".
- Colunista vê nesta tela o perfil de colunista, não o contato.

## quando pedir ajuda

peça ajuda se precisar trocar o e-mail ou o CPF.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/meus-dados/MeusDados.tsx:70-117` — campos, "Salvar dados", "Dados salvos.", CPF e e-mail só leitura.
- `portal-cidade/frontend/src/app/minha-conta/meus-dados/page.tsx` — pessoa física vê contato; demais perfis veem o perfil de colunista.
- `portal-cidade/frontend/src/app/minha-conta/perfil-da-area.ts:37-57` — "Meus dados" no menu de colunista e pessoa física.

## lacunas

tela não validada no navegador nesta tarefa. O item de menu tem marca dinâmica que a trava da base não reconhece, por isso o passo 1 usa `fora`. Não confirmei se o contato novo muda anúncios já publicados.

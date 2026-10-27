---
id: cliente-editar-perfil-publico-empresa
titulo: "atualizar os contatos da empresa"
publico:
  - cliente
modulo: guia-comercial
categoria: guia-comercial
aba: Minha empresa
tipo_problema:
  - editar-perfil-empresa
  - contato-incorreto
tags:
  - editar
  - empresa
  - contato
  - whatsapp
  - link
  - perfil
  - dados
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - OInXMQlSWqw
---

## objetivo
atualizar WhatsApp, e-mail e site da empresa. O dado vale para tudo o que a empresa publica no portal.

## pré-requisitos
- ter vínculo ativo com a empresa no portal.
- estar na área do cliente autenticada. não há instruções de login neste artigo.

## veja também
- para trocar a imagem do logo, veja o artigo "trocar o logo da empresa".
- para mudar o texto que explica o que a empresa faz, veja o artigo "escrever a descrição da empresa".

## passos

1. Na parte `Minha conta` do menu da esquerda, clique em `Minha empresa`. [t=9] [guia=menu:/minha-conta/minha-empresa]
2. No quadro `Contatos`, preencha o `WhatsApp`. [t=26] [guia=empresa:whatsapp]
3. Preencha o `E-mail de contato`. [t=26] [guia=empresa:email]
4. Preencha o `Site`. [t=26] [guia=empresa:site]
5. Clique em `Salvar`. Aparece a mensagem `Dados atualizados em todas as suas seções.` [t=44] [guia=empresa.salvar]

## resultado esperado
a área do cliente confirma o salvamento e, ao recarregar, os dados continuam lá. o quadro `Onde isso aparece` lista onde o dado vale (`Guia Comercial`, vagas, anúncios e eventos, conforme o que a empresa publica). uma alteração atualiza todos de uma vez. [t=32]

## desvios
- os campos disponíveis dependem do tipo de cadastro de empresa.
- se a conta perdeu o vínculo com a empresa, a tela pode informar que o perfil foi removido; suporte/admin deve verificar o vínculo.
- a página pública pode demorar um pouco para mostrar o dado novo; veja "salvei, mas o site ainda mostra o antigo".

## quando pedir ajuda
se não reconhecer a empresa associada ou não puder editar o próprio perfil, contate o suporte do portal. não tente alterar dados de outra empresa.

## fontes
- `frontend/src/app/minha-conta/minha-empresa/page.tsx:184-185` — título `Minha empresa`; `:219-236` quadro `Contatos`; `:241-247` mensagem e `Salvar`; `:255` `Onde isso aparece`.
- `frontend/src/app/minha-conta/ClienteSidebar.tsx` — item `Minha empresa` no grupo `Minha conta`.

## lacunas
testado em tela (2026-10-15, conta sintética sem empresa no Guia): salvar e recarregar. não testado: aparência na ficha pública do Guia, texto de erro por campo (e-mail/telefone inválidos não mostraram mensagem visível). sem tempo fixo de atualização.

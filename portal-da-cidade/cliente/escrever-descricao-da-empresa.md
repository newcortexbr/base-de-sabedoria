---
id: cliente-escrever-descricao-empresa
titulo: "escrever a descrição da empresa"
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
  - descricao
  - guia
  - dados
  - perfil
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - OInXMQlSWqw
---

## objetivo
aqui você escreve o que sua empresa faz, em poucas linhas.

## pré-requisitos
- ter vínculo ativo com a empresa no portal.
- estar na área do cliente autenticada. não há instruções de login neste artigo.

## passos

1. Na parte `Minha conta` do menu da esquerda, clique em `Minha empresa`. [t=9] [guia=menu:/minha-conta/minha-empresa]
2. Escreva em `Descrição da empresa` o que sua empresa faz. [t=22] [guia=empresa.descricao]
3. Clique em `Salvar`. Aparece a mensagem `Dados atualizados em todas as suas seções.` [t=44] [guia=empresa.salvar]

## resultado
A descrição fica salva e vale em todas as seções onde a empresa publica (`Guia Comercial`, vagas, anúncios e eventos). o quadro `Onde isso aparece` mostra o que será atualizado. [t=32]

## desvios
- os campos disponíveis dependem do tipo de cadastro de empresa.
- se a conta perdeu o vínculo com a empresa, a tela pode informar que o perfil foi removido; suporte/admin deve verificar o vínculo.

## quando pedir ajuda
se não reconhecer a empresa associada ou não puder editar o próprio perfil, contate o suporte do portal. não tente alterar dados de outra empresa.

## fontes
- `frontend/src/app/minha-conta/minha-empresa/CamposDeEmpresa.tsx:93-122` — campo `Descrição da empresa` com contador de letras.
- `frontend/src/app/minha-conta/minha-empresa/page.tsx:241-247` — `Salvar` e mensagem.

## lacunas
testado em tela (2026-10-15, conta sintética sem empresa no Guia): salvar e recarregar. não testado: aparência na ficha pública do Guia. sem tempo fixo de atualização.

---
id: cliente-criar-vaga-nova
titulo: criar uma vaga nova na área do cliente
publico:
  - cliente
modulo: vagas
categoria: vagas
aba: Vagas
tipo_problema:
  - vagas-proprias
tags:
  - criar
  - publicar
  - vaga
  - empresa
  - salario
  - area do cliente
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 525qfVrQ4iY
  - D21vBBhzlhg
---

## objetivo

publicar uma vaga nova da sua empresa.

## pré-requisitos

- ter vínculo de contratante e estar na área do cliente autenticada.
- este artigo não trata de acesso, cadastro de conta ou plano.

## passos

1. Na parte `O que eu publico` do menu da esquerda, clique em `Vagas de Emprego`. [t=6] [guia=menu:/minha-conta/vagas]
2. Clique em `Nova vaga`. [t=22] [guia=minhas-vagas.nova]
3. Só na primeira vez, aparece `Complete seu cadastro`: clique em `Adicionar logo` e escolha a imagem da empresa. [t=27] [guia=empresa.logo]
4. Ainda em `Complete seu cadastro`, escreva em `Descrição da empresa` o que a empresa faz (CPF ou CNPJ pode ficar em branco). [t=31] [guia=empresa.descricao]
5. Clique em `Salvar e continuar` (ou em `Preencher depois`). [t=40] [guia=cadastro-vagas.salvar]
6. Escreva o `Título da vaga` (obrigatório) e escolha a cidade. [t=45] [guia=vaga-cliente.titulo]
7. Escreva a `Descrição da vaga` (obrigatória). Área, tipo de contrato, bairro, carga horária, modelo de trabalho, requisitos, benefícios e salário são opcionais; você pode marcar `Vaga PCD`, `Primeiro emprego` e `Urgente`. [t=83] [guia=vaga-cliente.descricao]
8. Preencha pelo menos um canal de candidatura: `WhatsApp para contato` ou `E-mail para currículo`. O `Link externo de candidatura` também existe. [t=102] [guia=vaga-cliente.contato]
9. Clique em `Publicar vaga`. [t=114] [guia=vaga-cliente.salvar]

## resultado

se o portal exige aprovação, aparece `Vaga enviada para aprovação` (análise de 24h a 48h úteis, aviso por e-mail) e a vaga fica `Aguardando aprovação` até ser analisada; depois fica `Ativa` com os dias restantes. Sem aprovação, aparece `Vaga publicada`. Na lista há ícones para editar, pausar e excluir.

## desvios

- com o limite do plano atingido, o botão `Nova vaga` fica desabilitado: encerre uma vaga ou mude de plano.
- `Cancelar` no fim do formulário sai sem publicar.

## fontes

- `frontend/src/app/minha-conta/vagas/page.tsx:208-232` — título `Vagas de Emprego` e `Nova vaga`.
- `frontend/src/app/minha-conta/vagas/VagaForm.tsx:279-500` — campos, `Publicar vaga`, mensagens de aprovação.
- `frontend/src/app/minha-conta/_completar/EtapaCompletarPerfil.tsx:138` e `_completar/FormularioContratanteVagas.tsx:107-129` — `Complete seu cadastro`, `Salvar e continuar`.
- `frontend/src/app/minha-conta/minha-empresa/CamposDeEmpresa.tsx:74-110` — logo e descrição (marcas `empresa.logo`, `empresa.descricao`).

## lacunas

tela não validada no navegador nesta tarefa. Se é obrigatório ter WhatsApp ou e-mail (e não o link) é regra de validação do servidor, não conferida; a tela diz "Ao menos um dos dois".

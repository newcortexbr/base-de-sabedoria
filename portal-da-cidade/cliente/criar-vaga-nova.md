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
revisado_em: 2026-10-27
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

## campos

- No topo de `Vagas de Emprego` ficam o plano contratado e os quadros com quantas vagas estão no ar e quantas em análise.
- `Título da vaga`: o cargo (por exemplo, "Operador de caixa").
- `Área`: por exemplo "Vendas e comércio". `Tipo de contrato`: CLT, PJ, estágio, temporário e outros.
- `Carga horária`: a jornada, por exemplo "44 horas semanais".
- `Modelo de trabalho`: presencial, home office ou híbrido.
- `Descrição da vaga`: o que a pessoa fará no dia a dia.
- `Requisitos`: formação, experiência e habilidades desejadas.
- `Benefícios`: um por linha.
- `Salário`: o valor, ou marque `Salário a combinar`.
- Candidatura: preencha ao menos um entre `WhatsApp para contato` e `E-mail para currículo`. Quem usa site de recrutamento cola o endereço em `Link externo de candidatura`.

## na página pública da vaga

Em destaque: cargo, logo da empresa, tipo de contrato, local e salário. Abaixo: descrição, requisitos e benefícios. Ao lado, o candidato chama pelo WhatsApp ou envia o currículo por e-mail com um clique.

## dicas

- Publicar vaga não tem custo; sem aprovação exigida ela vai ao ar em cerca de um minuto.
- Você define como o candidato se inscreve; o resto o portal cuida.
- Planos pagos colocam a vaga no topo, em destaque, e podem ser cancelados quando quiser.

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

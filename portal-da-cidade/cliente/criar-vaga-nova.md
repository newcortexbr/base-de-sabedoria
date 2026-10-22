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
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - 525qfVrQ4iY
  - D21vBBhzlhg
---

## objetivo

publicar uma vaga nova da sua empresa.

## pré-requisitos

- ter vínculo de contratante e estar na área de cliente autenticada.
- este artigo não trata de acesso, cadastro de conta ou plano.

## passos

1. No menu da esquerda da sua área, na parte `O que eu publico`, clique em `Vagas de Emprego` (`/minha-conta/vagas`). [guia=menu:/minha-conta/vagas]
2. Clique em `Nova vaga`. Na primeira vez aparece antes a página `Complete seu cadastro`: adicione o logo e a descrição da empresa (CPF ou CNPJ é opcional) e clique em `Salvar e continuar` (ou `Preencher depois`). O topo da página mostra o nome do plano contratado e contadores de vagas no ar e em análise. [guia=minhas-vagas.nova]
3. Preencha pelo menos o título, a cidade e a descrição da vaga (obrigatória). Há também área, tipo de contrato (CLT, PJ, estágio, temporário, outros), bairro, carga horária e modelo de trabalho (presencial, home office, híbrida), além dos requisitos, dos benefícios (um por linha) e do salário (ou `Salário a combinar`). Você pode marcar `Vaga PCD`, `Primeiro emprego` e `Urgente`. [guia=vaga-cliente.salvar]
4. Preencha pelo menos um canal de candidatura (WhatsApp ou e-mail); um link externo de candidatura também é aceito. [guia=vaga-cliente.salvar]
5. Clique em `Publicar vaga`. Aparece a mensagem de vaga enviada para aprovação. [guia=vaga-cliente.salvar]

## resultado

a vaga fica `aguardando aprovação` e o autor é avisado por e-mail quando ela for analisada. Depois de aprovada, aparece `ativa` com os dias restantes. Na lista há ícones para editar, pausar e excluir.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/vagas/page.tsx:4`
- `portal-cidade/frontend/src/app/minha-conta/vagas/page.tsx:45`
- `portal-cidade/frontend/src/app/minha-conta/vagas/page.tsx:80`
- `portal-cidade/docs/PRODUCT.md:43`

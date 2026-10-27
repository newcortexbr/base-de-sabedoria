---
id: aprovar-cadastro-de-empresa
titulo: "aprovar ou recusar o cadastro de empresa feito pelo cliente (quanto tempo leva)"
publico:
  - admin
modulo: aprovações
categoria: aprovações
aba: Aprovações
tipo_problema: operacao
tags:
  - aprovar
  - recusar
  - empresa
  - guia
  - cadastro
  - autocadastro
  - pendente
  - aprovacao
  - prazo
  - conta
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Libere a empresa que o próprio cliente cadastrou no Guia Comercial. Enquanto você não aprova, ela não aparece no site.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- `Exigir minha aprovação antes de publicar` ligado quando o cliente cadastrou a empresa.

## passos

1. No menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes] [t=5]
2. No envio do tipo `Empresa`, clique em `Ver detalhe`. [guia=aprovacoes.ver-detalhe]
3. Clique em `Aprovar` na janela de detalhes. Antes, confira os dados. [guia=aprovacoes.aprovar-detalhe]

## resultado

A empresa passa a `Ativo` e o cliente recebe um e-mail avisando. Para aparecer no Guia ainda valem as demais regras do Guia. Para recusar, veja "recusar o cadastro de uma empresa".

## perguntas comuns

**posso aprovar ou recusar cadastro?** Sim, o cadastro de empresa feito pelo cliente: aprove ou recuse na aba `Aprovações`. A criação da conta do cliente em si não passa por aprovação.
**quanto tempo leva?** Depende só de você. O portal não define prazo, não aprova nem recusa sozinho e não avisa sobre atraso. A linha mostra há quanto tempo o cadastro espera.
**e com a aprovação desligada?** A empresa cadastrada vai direto ao ar.
**a empresa que eu mesmo cadastro passa pela fila?** Não, vai direto ao ar.

## desvios

Empresas pendentes também aparecem em `Guia Comercial` > `Listar Empresas`, filtro `Pendente`.

## fontes

- frontend/src/app/painel/aprovacoes/AprovacoesClient.tsx:120-142,230,405-410
- backend/guia/moderacao.py:101-131; portais/moderacao.py:54-76; portais/views_admin.py:941-945
- backend/portais/contas.py (sem etapa de aprovação de conta)
- backend/portais/emails/moderacao.py

## lacunas

- Conferido por leitura do código no HEAD 66d38db2. Sem execução nem validação visual.
- Cadastro de parceiro: não encontrei aprovação de cadastro; o que espera o dono é o pedido de troca de plano. Não verificado a fundo.

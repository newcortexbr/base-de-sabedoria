---
id: cliente-parceiro-virar-representante
titulo: "virar representante parceiro e indicar empresas ao portal"
publico:
  - cliente
modulo: parceiro
categoria: parceiro
aba: nao-se-aplica
tipo_problema:
  - virar-parceiro
tags:
  - parceiro
  - cadastro
  - comissao
  - link de indicacao
  - empresa
  - criar
status: rascunho-documental
revisado_em: 2026-10-24
validacao: video
videos:
  - DFVw9nSAZAQ
  - -Krm1tXfeig
---

## objetivo

entender como funciona o programa de representantes parceiros e como se cadastrar.

## pré-requisitos

- ter acesso ao e-mail, pois o portal envia um código de 6 números.
- o cadastro leva cerca de um minuto (segundo o vídeo).

## explicação

- o representante se cadastra e recebe um link exclusivo, que indica para empresas da região (restaurante, loja, oficina, salão etc.).
- ele pode revender os produtos do portal: banner de publicidade, anúncio de vagas de emprego, coluna de especialista, anúncios nos classificados, matérias corporativas e outros.
- quando a empresa fecha um plano pelo link, o representante recebe comissão e pode ter renda recorrente: continua recebendo comissões mensais sem vender de novo.
- não há meta nem chefe; o ritmo é do representante.
- os percentuais de comissão são definidos pelo portal.

## passos

1. No site do portal, abra o menu e clique em `Seja um representante`. [t=54] [guia=site.seja-representante]
2. Em `Escolha seu plano e comece`, escolha o plano de representante. [t=54] [guia=parceiro-cadastro.plano]
3. Preencha nome completo, e-mail, CPF, telefone, WhatsApp e uma senha. [guia=parceiro-cadastro.formulario]
4. Clique no botão do formulário (`Quero começar a ganhar` no plano grátis ou `Criar conta e ir para o pagamento` no plano pago). [guia=parceiro-cadastro.criar]
5. Digite os 6 números enviados ao e-mail em `Confirme seu e-mail` e clique em `Confirmar e continuar`. [guia=parceiro-cadastro.codigo]
6. Depois de entrar, pegue o seu link de indicação na tela `Início` do painel do parceiro (veja "visão geral do painel do parceiro"). [guia=fora]
7. Compartilhe o link com as empresas da região. [t=9] [guia=fora]

## resultado

a empresa fecha um plano pelo seu link e você recebe a comissão.

## desvios

- ao final do cadastro a tela pode mostrar `Cadastro recebido`.
- já é parceiro: a página tem a seção `Já é parceiro?` com a entrada da área.

## quando pedir ajuda

se o código não chegar ou o pagamento do plano não for confirmado, peça ajuda ao portal. Não envie senha nem código.

## fontes

- `portal-cidade/frontend/src/components/layout/HeaderClient.tsx:515,699,784` — `Seja um representante`.
- `portal-cidade/frontend/src/app/seja-parceiro/SejaParceiroClient.tsx:393-408,453-461,510-540,560-648,685` — cadastro.
- vídeos: `DFVw9nSAZAQ` (promocional) e `-Krm1tXfeig` (painel).

## lacunas

- o mínimo da senha no cadastro mostra "Mínimo 6 caracteres" no campo; não confirmei no servidor.
- se o link `Seja um representante` aparece em todos os portais (depende de configuração do menu) não foi verificado.
- o tempo do vídeo vale para o primeiro vídeo da lista.

---
id: cliente-parceiro-visao-geral-painel
titulo: "visão geral do painel do parceiro: link de indicação, clientes e comissões"
publico:
  - parceiro
permissoes:
  - parceiro-comercial
modulo: parceiro
categoria: parceiro
aba: Início
tipo_problema:
  - orientacao
tags:
  - parceiro
  - link de indicacao
  - cliente
  - comissao
  - visao geral
  - painel
status: rascunho-documental
revisado_em: 2026-10-24
validacao: video
videos:
  - -Krm1tXfeig
---

## objetivo

conhecer os menus do painel do parceiro e pegar o link de indicação.

## pré-requisitos

- ser parceiro do portal e estar logado no painel do parceiro.

## explicação

- o menu da esquerda tem `Início`; em `Minhas vendas`, `Meus clientes` e `Minhas comissões`; e, em `Minha conta`, o `Perfil`.
- toda venda feita a partir do seu link de indicação é contabilizada para você.
- os percentuais de comissão são definidos pelo portal.

## passos

1. No menu da esquerda, clique em `Início` e veja no topo o seu plano de parceiro e o seu link de indicação. [t=18] [guia=parceiro.link]
2. Em `Para qual página?`, escolha para onde o link leva: Guia Comercial, vagas de emprego, classificados, eventos, notícias, publicidade ou artigos. O endereço do link muda conforme a página. [t=28] [guia=parceiro.pagina-do-link]
3. Clique em `Copiar link` (vira `Copiado`) e compartilhe pelo WhatsApp, redes sociais ou com seus contatos. [t=45] [guia=parceiro.copiar-link]
4. Logo abaixo está `Grupo dos parceiros`, com dicas, novidades e avisos do portal. Clique em `Entrar no grupo`. O atalho também fica fixo no menu. [t=51] [guia=parceiro.grupo-whatsapp]
5. Os quadros `A receber`, `Recebido`, `Clientes ativos` e o plano atual mostram o resumo do seu trabalho. [t=60] [guia=parceiro.quadros]
6. Em `Simule seus ganhos`, escolha o número de vendas e o valor médio para ver uma estimativa. É só simulação: os valores reais dependem do que cada cliente contratar. [t=69] [guia=parceiro.simulador]
7. A tabela `Quanto você ganha em cada venda` mostra os planos que você pode vender e a sua comissão em cada um. [t=82] [guia=parceiro.tabela-ganhos]
8. Em `Meu plano`, veja o plano atual, quando renova e os outros planos de parceiro. Para mudar, clique em `Fazer upgrade`. [t=93] [guia=parceiro.trocar-plano]
9. Confira o CPF ou CNPJ para cobrança e clique em `Ir para o pagamento`. O plano novo vale assim que o pagamento é confirmado. [t=102] [guia=parceiro.ir-para-pagamento]
10. No menu, clique em `Meus clientes` para acompanhar quem contratou pelo seu link, o total de clientes e os ativos. Sem clientes ainda, `Compartilhar meu link` ajuda a começar. [t=113] [guia=menu:/parceiro/clientes]
11. Clique em `Minhas comissões` para ver as vendas e os residuais gerados pelo seu link, com o total a receber, o total recebido e filtros por tipo, situação e período. [t=128] [guia=menu:/parceiro/comissoes]
12. Clique em `Perfil` para informar a carteira Asaas e trocar a senha. Veja os artigos "cadastrar a carteira Asaas do parceiro" e "trocar a senha do parceiro". [t=135] [guia=menu:/parceiro/perfil]

## resultado

você tem o link copiado e sabe acompanhar clientes e comissões.

## desvios

- o quadro `Grupo dos parceiros` só aparece se o portal configurou o grupo.

## fontes

- `portal-cidade/frontend/src/app/parceiro/ParceiroSidebar.tsx:17-30,88-92` — menu e atalho do grupo.
- `portal-cidade/frontend/src/app/parceiro/(shell)/ParceiroInicioClient.tsx:90-157` — link, página, grupo, quadros.
- `portal-cidade/frontend/src/app/parceiro/(shell)/GanhosDoParceiro.tsx:61,101` — simulador e tabela.
- `portal-cidade/frontend/src/app/parceiro/MeuPlano.tsx:186-397` — plano, `Fazer upgrade`, `Ir para o pagamento`.
- `portal-cidade/frontend/src/app/parceiro/(shell)/clientes/ParceiroClientesClient.tsx:122`.

## lacunas

- o botão "Fale com o suporte" do vídeo não existe no código do painel do parceiro (a área não monta o suporte flutuante); não prometer. Para ajuda, o parceiro fala com o portal.
- o atalho do grupo "fixo no canto do menu" vem do código (`ParceiroSidebar.tsx:88`); o item de menu não tem marca de guia ainda.

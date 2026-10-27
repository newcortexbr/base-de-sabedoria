---
id: moderar-solicitacoes-de-orcamento
titulo: moderar as solicitações de orçamento
publico:
  - admin
modulo: orçamentos
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - orcamento
  - aprovar
  - recusar
  - moderacao
  - status
  - pendente
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Ru3949-VUX4
---

## objetivo

Aqui você lê e aprova pedidos de orçamento enviados pelos visitantes. Reprovar ou corrigir o status são caminhos separados abaixo.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Em `Conteúdo`, em `Orçamentos Online`, clique em `Todas as Solicitações`. [t=85] [guia=menu:/painel/orcamentos/categorias]
2. Se quiser limitar o período, preencha `De`. [t=142] [guia=orcamentos-categorias.de]
3. Se quiser limitar o fim do período, preencha `Até`. [t=142] [guia=orcamentos-categorias.ate]
4. Na linha do pedido, clique em `Ver detalhes` (ícone de olho). [t=116] [guia=orcamentos-categorias.ver-detalhes]
5. Em um pedido `Aguardando aprovação`, clique em `Aprovar e enviar`. [t=133] [guia=orcamentos-categorias.detalhe-aprovar]

## aprovar direto na linha

1. Na parte `Conteúdo` do menu, em `Orçamentos Online`, clique em `Todas as Solicitações`. [guia=menu:/painel/orcamentos/categorias]
2. Na linha do pedido que não está aprovado, clique no ícone de visto `Aprovar e enviar à empresa`. [guia=orcamentos-categorias.aprovar]

## reprovar direto na linha

1. Na parte `Conteúdo` do menu, em `Orçamentos Online`, clique em `Todas as Solicitações`. [guia=menu:/painel/orcamentos/categorias]
2. Na linha do pedido que não está reprovado, clique no ícone de X `Reprovar — não vai para a empresa`. [guia=orcamentos-categorias.reprovar]
3. Confirme em `Reprovar esta solicitação? A empresa não vai receber o pedido.`. [guia=confirmacao.confirmar]

## reprovar um pedido

1. Na parte `Conteúdo` do menu, em `Orçamentos Online`, clique em `Todas as Solicitações`. [t=85] [guia=menu:/painel/orcamentos/categorias]
2. Na linha do pedido, clique em `Ver detalhes` (ícone de olho). [t=116] [guia=orcamentos-categorias.ver-detalhes]
3. Em um pedido `Aguardando aprovação`, clique em `Reprovar`. [t=168] [guia=orcamentos-categorias.detalhe-reprovar]

## corrigir o status de um pedido

1. Na parte `Conteúdo` do menu, em `Orçamentos Online`, clique em `Todas as Solicitações`. [t=85] [guia=menu:/painel/orcamentos/categorias]
2. Na linha do pedido, clique em `Ver detalhes` (ícone de olho). [t=116] [guia=orcamentos-categorias.ver-detalhes]
3. Escolha a situação desejada em `Editar status`. [guia=orcamentos-categorias.detalhe-status]
4. Clique em `Salvar status`. [guia=orcamentos-categorias.detalhe-salvar]

## resultado

O pedido passa para aprovado. Ele fica disponível para empresas elegíveis e o sistema solicita o envio dos avisos por e-mail; entrega do e-mail não é comprovada pelo clique.

## desvios

- Receber pedidos depende do benefício `orcamentos`, da subcategoria do pedido e das condições de acesso da empresa; não basta o plano ter o nome de “mais completo”.
- A tela permite alterar status, não reescrever o texto do pedido.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/orcamentos/categorias/SolicitacoesOrcamentoClient.tsx:190`.
- `frontend/src/app/painel/orcamentos/categorias/SolicitacoesOrcamentoClient.tsx:216`.
- `backend/orcamentos/views_admin.py:76`.
- `backend/orcamentos/emails.py:72`.
- Vídeo `Ru3949-VUX4`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/Ru3949-VUX4.md` e legenda `videos/legendas/Ru3949-VUX4.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

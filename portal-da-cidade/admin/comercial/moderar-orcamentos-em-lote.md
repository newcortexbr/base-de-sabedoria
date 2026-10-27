---
id: moderar-orcamentos-em-lote
titulo: "aprovar ou reprovar vários pedidos de orçamento de uma vez"
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
  - lote
  - excluir
  - moderacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Ru3949-VUX4
---

## objetivo

Aqui você aprova vários pedidos de orçamento de uma vez. Reprovar, encerrar e excluir têm caminhos separados abaixo.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Orçamentos Online`, clique em `Todas as Solicitações`. [t=85] [guia=menu:/painel/orcamentos/categorias]
2. Marque a caixa de seleção de cada pedido desejado. [t=171] [guia=orcamentos-categorias.selecionar]
3. Na barra dos selecionados, clique em `Aprovar e enviar`. [t=173] [guia=orcamentos-categorias.lote-aprovar]
4. Na janela que mostra a ação e a quantidade selecionada, clique em `Confirmar`. [guia=confirmacao.confirmar]

## reprovar vários pedidos

1. Na parte `Conteúdo` do menu, em `Orçamentos Online`, clique em `Todas as Solicitações`. [t=85] [guia=menu:/painel/orcamentos/categorias]
2. Marque a caixa de seleção de cada pedido desejado. [t=171] [guia=orcamentos-categorias.selecionar]
3. Clique em `Reprovar`. [t=173] [guia=orcamentos-categorias.lote-reprovar]
4. Na janela que mostra a ação e a quantidade selecionada, clique em `Confirmar`. [guia=confirmacao.confirmar]

## encerrar vários pedidos

1. Na parte `Conteúdo` do menu, em `Orçamentos Online`, clique em `Todas as Solicitações`. [t=85] [guia=menu:/painel/orcamentos/categorias]
2. Marque a caixa de seleção de cada pedido desejado. [t=171] [guia=orcamentos-categorias.selecionar]
3. Clique em `Encerrar`. [t=173] [guia=orcamentos-categorias.lote-encerrar]
4. Na janela que mostra a ação e a quantidade selecionada, clique em `Confirmar`. [guia=confirmacao.confirmar]

## excluir vários pedidos

1. Na parte `Conteúdo` do menu, em `Orçamentos Online`, clique em `Todas as Solicitações`. [t=85] [guia=menu:/painel/orcamentos/categorias]
2. Marque a caixa de seleção de cada pedido desejado. [t=171] [guia=orcamentos-categorias.selecionar]
3. Clique em `Excluir`. [guia=orcamentos-categorias.lote-excluir]
4. Na janela que mostra a ação e a quantidade selecionada, clique em `Confirmar`. [guia=confirmacao.confirmar]

## resultado

A ação é aplicada aos pedidos encontrados. Se parte do lote falhar ou não for encontrada, a tela mostra as quantidades; confira o aviso antes de considerar todos processados.

## desvios

- Aprovar libera os pedidos para empresas elegíveis. Reprovar não os envia às empresas.
- Encerrar altera o status e preserva o cadastro. Excluir apaga os pedidos e não pode ser desfeito.
- Para corrigir uma situação depois, veja a seção de correção de status em “moderar as solicitações de orçamento”.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/orcamentos/categorias/SolicitacoesOrcamentoClient.tsx:434`.
- `frontend/src/app/painel/orcamentos/categorias/SolicitacoesOrcamentoClient.tsx:470`.
- `frontend/src/app/painel/orcamentos/categorias/SolicitacoesOrcamentoClient.tsx:671`.
- `frontend/src/app/painel/orcamentos/categorias/SolicitacoesOrcamentoClient.tsx:860`.
- Vídeo `Ru3949-VUX4`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/Ru3949-VUX4.md` e legenda `videos/legendas/Ru3949-VUX4.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

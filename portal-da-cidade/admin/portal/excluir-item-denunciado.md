---
id: excluir-item-denunciado
titulo: "tirar do ar o conteúdo de uma denúncia"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo
aqui você exclui o conteúdo que foi denunciado e tira ele do ar.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, logo no começo, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Para ver as denúncias, clique na aba `Denúncias`. [guia=aprovacoes-aba:denuncias]
3. Clique na denúncia que você quer ver, para abrir os detalhes. [guia=denuncias.abrir]
4. Para tirar o conteúdo do ar, clique em `Excluir item`. [guia=denuncias.excluir-item]
5. Confirme na janela que aparece. [guia=denuncias.bloquear]

## resultado
O conteúdo denunciado é excluído.

## desvios

- Com a fila desligada, os envios dos clientes não passam por você.
- `A Voz do Povo` é outra coisa: são relatos de moradores, em outra tela.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/aprovacoes/`: `AprovacoesEDenuncias.tsx`, `ConfigDaFila.tsx`
- `suporte-kb/mapa/admin/telas/painel-aprovacoes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.

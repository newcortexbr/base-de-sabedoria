---
id: bloquear-conta-denunciada
titulo: "bloquear a empresa ou conta de uma denúncia"
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
aqui você tira do ar tudo o que o responsável publicou naquela parte do site. Dá para desfazer depois.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, logo no começo, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Para ver as denúncias, clique na aba `Denúncias`. [guia=aprovacoes-aba:denuncias]
3. Clique na denúncia que você quer ver, para abrir os detalhes. [guia=denuncias.abrir]
4. Para tirar do ar tudo o que aquele responsável publicou nessa parte do site, clique em `Bloquear empresa/conta` (pode ser desfeito depois). [guia=denuncias.bloquear]
5. Confirme na janela que aparece. [guia=denuncias.bloquear]

## resultado
O que aquele responsável publicou naquela parte do site sai do ar.

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

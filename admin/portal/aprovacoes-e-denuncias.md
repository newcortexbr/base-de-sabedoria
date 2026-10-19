---
id: aprovacoes-e-denuncias
titulo: aprovar conteúdo de clientes e ver denúncias
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-16
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

decidir o que os clientes enviam antes de ir ao ar e acompanhar as denúncias feitas por visitantes.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, logo no começo, clique em `Aprovações e Denúncias` (`/painel/aprovacoes`).
2. No topo da página, no quadro `Como funciona neste portal`, marque ou desmarque `Exigir minha aprovação antes de publicar`. Marcado, o que os clientes enviam só vai ao ar depois que você aprovar. Muda na hora.
3. No mesmo quadro, marque ou desmarque `Permitir que visitantes denunciem conteúdo`. Desmarcado, o botão "Denunciar" some do site.
4. Na aba `Aprovações`, clique em `Ver detalhe` para ver o que o cliente enviou.
5. Clique em `Aprovar` para colocar no ar, ou em `Recusar`. Ao recusar, escreva o motivo (é obrigatório) e clique em `Confirmar recusa`.
6. Na aba `Denúncias`, escolha quais quer ver (`Pendentes`, `Resolvidas`, `Ignoradas` ou `Todos`) e de qual parte do site (`Guia`, `Vagas`, `Classificados`, `Eventos`). Clique na denúncia para ver os detalhes.

## resultado

conteúdo aprovado vai ao ar; recusado volta com o motivo. As denúncias ficam organizadas por situação.

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

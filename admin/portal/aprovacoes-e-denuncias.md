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

1. Abra `Aprovações e Denúncias` no menu (`/painel/aprovacoes`).
2. Na parte de cima, use `Exigir minha aprovação antes de publicar` para ligar ou desligar a fila. A mudança salva na hora.
3. Use `Permitir que visitantes denunciem conteúdo` para ligar ou desligar o botão de denúncia no site.
4. Na aba `Aprovações`, use `Ver detalhe` para conferir o conteúdo e depois `Aprovar` ou `Recusar`. Ao recusar, escreva o motivo (obrigatório).
5. Na aba `Denúncias`, filtre por situação (pendentes, resolvidas, ignoradas) e por módulo, e abra a denúncia para ver o detalhe.

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

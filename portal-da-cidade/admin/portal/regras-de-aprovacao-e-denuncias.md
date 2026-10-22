---
id: regras-de-aprovacao-e-denuncias
titulo: "escolher as regras de aprovação e denúncias do portal"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo
aqui você escolhe se o que os clientes enviam precisa da sua aprovação e se os visitantes podem denunciar conteúdo.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, logo no começo, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. No topo da página, no quadro `Como funciona neste portal`, marque ou desmarque `Exigir minha aprovação antes de publicar`. Marcado, o que os clientes enviam só vai ao ar depois que você aprovar: ficam pendentes as vagas, as empresas do guia, os classificados e os demais envios de clientes. Só os artigos são publicados direto. [guia=aprovacoes-config:aprovacao]
3. No mesmo quadro, marque ou desmarque `Permitir que visitantes denunciem conteúdo`. Desmarcado, o botão "Denunciar" some do site. Quando ligado, ele aparece nas páginas de empresa, vaga, classificado e evento. [guia=aprovacoes-config:denuncias]

## resultado
As duas opções mudam na hora, conforme o que você marcou.

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

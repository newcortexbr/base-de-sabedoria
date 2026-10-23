---
id: radar-de-precos
titulo: "Radar de Preços: o que é e como funciona"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: orientacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
videos:
  - O3sdByn6xK8
  - iuCYHVzr37g
---

## objetivo

aqui você entende o Radar de Preços: uma página onde os moradores comparam preços de supermercados, farmácias e postos de combustível da cidade.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- O módulo `Radar de Preços` estar ligado em `Módulos do Portal`. Desligado, o Radar não aparece no site.

## como funciona

- o Radar tem **três categorias fixas**: `Supermercados`, `Farmácias` e `Postos de combustível`. Você não cria nem apaga categoria; só muda nome, ícone, ordem ou desliga (veja "mudar as categorias do Radar de Preços").
- em `Postos de combustível` só existem três produtos: `Gasolina`, `Etanol` e `Diesel`.
- **quem envia preço:**
  - o **morador** (qualquer visitante, sem criar conta) manda uma foto do produto ou do encarte, o preço, o estabelecimento, o nome e o WhatsApp, em `/radar-de-precos/enviar`.
  - **você** também pode lançar um preço direto, sem foto, em `Produtos e preços`.
- **passa pela sua aprovação?** Sim, em dois pontos:
  1. a foto enviada pelo morador fica em `Fotos enviadas`, em `Aguardando`. Você aprova ou recusa. Só depois de aprovada ela é lida e os preços entram no site.
  2. se o morador indicou um estabelecimento novo, ele nasce `Pendente` e os preços só aparecem no site depois que você aprova o mercado.
- o que você lança direto em `Produtos e preços` entra no site na hora, sem fila.
- preço que parece estranho (muito diferente do que já existe) não vai ao ar sozinho: fica em `Preços retidos` esperando você.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Radar de Preços`. Aparecem cinco telas: `Fotos enviadas`, `Preços retidos`, `Produtos e preços`, `Mercados` e `Categorias`. [guia=menu:/painel/radar/fotos]
2. Para o dia a dia, comece por `Fotos enviadas`: o número no menu mostra quantas esperam por você. [guia=menu:/painel/radar/fotos]

## veja também

- "aprovar as fotos enviadas ao Radar de Preços"
- "resolver preços retidos do Radar de Preços"
- "aprovar e juntar mercados do Radar de Preços"
- "ver e lançar preços no Radar de Preços"
- "mudar as categorias do Radar de Preços"

## resultado

você sabe quem envia os preços, o que precisa da sua aprovação e onde cuidar de cada coisa.

## fontes

- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:137`
- `portal-cidade/docs/RADAR-CONTRATO.md`
- `portal-cidade/backend/radar/categorias.py`

## lacunas

não verificado visualmente no navegador. O número no menu vem de contadores do painel (`BADGE_DO_RADAR`); o texto exato do selo não foi conferido.

---
id: entender-o-trafego-do-portal
titulo: entender os números do tráfego do portal (acessos, visitantes, tempo médio)
publico:
  - admin
modulo: painel
categoria: admin
aba: painel
tipo_problema: duvida
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

Consulte as visitas ao site público e compare períodos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No topo do menu da esquerda, clique em `Painel`. [guia=menu:/painel]
2. Em `Tráfego do portal`, escolha `7 dias`, `30 dias` ou `Este mês`. [guia=trafego.periodo]
3. Consulte os cartões de acessos, visitantes e tempo médio. [guia=trafego.numeros]

## resultado

Os indicadores refletem o período escolhido. O painel informa que as visitas são contadas pelo próprio portal.

## escolher datas específicas

1. Clique em `Personalizado` no período. [guia=trafego.periodo]
2. Preencha `Data inicial`.  [guia=trafego.data-inicial]
3. Preencha `Data final`.  [guia=trafego.data-final]
4. Clique em `Aplicar`.  [guia=trafego.aplicar]

## baixar o relatório

1. No topo do menu, clique em `Painel`. [guia=menu:/painel]
2. Escolha o período do relatório. [guia=trafego.periodo]
3. Clique em `Baixar relatório PDF`.  [guia=trafego.baixar-pdf]

## entender os indicadores

- `Acessos (páginas vistas)` conta páginas abertas; uma pessoa pode abrir várias.
- `Visitantes` soma as pessoas contadas por dia, como explica a ajuda do cartão; não equivale a pessoas únicas em todo o período.
- `Tempo médio na página` mostra a média de permanência medida.
- `Páginas por visitante` compara páginas vistas e visitantes.
- Os gráficos abaixo detalham os dias, as seções e as páginas mais lidas.

## fontes

- `frontend/src/components/painel/TrafegoDoPortal.tsx:352`
- `frontend/src/components/painel/TrafegoDoPortal.tsx:468`

## lacunas

- Não foi identificado vídeo específico desta tarefa no catálogo; nenhum tempo foi atribuído.
- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.

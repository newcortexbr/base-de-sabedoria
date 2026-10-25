# /painel/radar/retidos (Radar de Preços — Preços retidos)

Arquivo: `app/painel/radar/retidos/page.tsx` (217 linhas)

## o que você vê
Preços que a IA leu e ficaram parados por estarem muito fora do normal: "O que a IA leu e saiu muito fora do preço atual (mais que o dobro ou menos da metade) fica aqui. O resto já foi publicado." Tabela com `Produto` (foto, nome, estabelecimento, marca "produto novo" se não existia), `Lido pela IA` (preço atual riscado → preço lido), `Motivo` e `Ações`: `Corrigir`, `Publicar`, `Descartar`. Sem nada: "Nada retido. A IA publicou tudo o que leu."

## rota e gate
- `/painel/radar/retidos`. client, `Header` "Radar de Preços — …". só administrador; módulo `radar` (`lib/painel-menu.ts:78-82,120`).

## como chegar
- menu lateral, parte Conteúdo: grupo `Radar de Preços` > `Preços retidos` (`Sidebar.tsx:140-149`).

## o que faz
- você decide se o preço estranho vale: publica como está, corrige e publica ou descarta.

## ações e campos
- `Publicar`: publica o preço lido ("Preço publicado").
- `Corrigir`: janela "Corrigir e publicar" com `Nome do produto`, `Categoria` ("Manter a atual") e `Preço (R$)`; botão `Corrigir e publicar`. Preço inválido bloqueia.
- `Descartar`: "Descartar este preço?" — o preço é apagado e não vai ao site ("Preço descartado").

## estados
- "Carregando preços retidos…"; erro com `Tentar de novo`; "Não foi possível concluir"/"Não foi possível publicar".

## possíveis problemas
- descartar é definitivo.
- o contador de retidos também aparece no menu lateral.

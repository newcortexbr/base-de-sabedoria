---
id: entender-o-trafego-do-portal
titulo: entender os números do tráfego do portal (acessos, visitantes, tempo médio, gráfico, seções, mais lidas, endereço em vez do título, relatório PDF)
publico:
  - admin
modulo: painel
categoria: admin
aba: painel
tipo_problema: duvida
tags:
  - trafego
  - numeros
  - visualizacao
  - ver
  - exportar
  - periodo
  - painel
  - datas
  - quantidade
  - acesso
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - jZUtDBYZ8DM
---

## objetivo

Consulte as visitas ao site público do portal, compare com o período anterior e baixe o relatório.

## passos

1. No topo do menu da esquerda, clique em `Painel`. [guia=menu:/painel]
2. Em `Tráfego do portal`, escolha `7 dias`, `30 dias`, `Este mês` ou `Personalizado`. [guia=trafego.periodo]
3. Consulte os cartões com os números do período. [guia=trafego.numeros]

## resultado

Os cartões, o gráfico, as seções e as mais lidas mostram só o período escolhido.

## escolher datas específicas

1. Clique em `Personalizado`. [guia=trafego.periodo]
2. Preencha `Data inicial`. [guia=trafego.data-inicial]
3. Preencha `Data final`. [guia=trafego.data-final]
4. Clique em `Aplicar`. Sem esse clique, os números não mudam. [guia=trafego.aplicar]

- O período pode ter no máximo 366 dias.
- A data final vai no máximo até hoje; não dá para escolher datas futuras.
- A data inicial não pode passar da data final.
- Se o período for inválido, aparece uma mensagem de erro e os números não são trocados.

## baixar o relatório

1. Escolha o período. [guia=trafego.periodo]
2. Clique em `Baixar relatório PDF`. [guia=trafego.baixar-pdf]

O PDF vale para o período que está na tela. Ele traz o nome do portal, as datas e a quantidade de dias, os quatro números dos cartões, o gráfico por dia, todas as seções e as dez páginas mais lidas. Ele usa cores fixas do painel (verde) e não leva a logo nem as cores do seu portal. Você pode enviar o arquivo a quem quiser, como um anunciante; o portal não define um modelo próprio para anunciante.

## o que é contado

- Contam as páginas abertas no site público, inclusive as suas visitas e as da sua equipe. Não existe opção para ignorar a equipe.
- **O que fazer:** para conferir o site sem somar visitas, use a prévia de layout ou o painel, que não contam. Se precisar separar a equipe, peça a função em `Sugestões de Funções`. [guia=menu:/painel/sugestoes]
- Não contam: robôs de busca, o painel, a área do cliente (`Minha conta`), a área do parceiro e a prévia de layout.
- O aviso azul `As visitas são contadas desde…` aparece quando o período começa antes do primeiro dia contado. Antes dessa data o portal não guardava visitas, então não há como recuperar esses dados. Se ainda não houve nenhuma visita, o aviso diz que a contagem começa hoje.
- **O que fazer:** escolha um período que comece na data do aviso. Para guardar o histórico daqui para frente, baixe o `Baixar relatório PDF` de cada mês e guarde os arquivos. [guia=trafego.baixar-pdf]

## entender os cartões

- `Acessos (páginas vistas)`: cada página aberta conta 1. Uma pessoa que abre 5 páginas conta 5.
- `Visitantes`: pessoas diferentes em cada dia, somadas dia a dia (por isso a nota `pessoas por dia, somadas`). A mesma pessoa que volta em 3 dias diferentes conta 3. É menor que os acessos porque cada pessoa costuma abrir mais de uma página.
- `Tempo médio na página`: quanto tempo a página ficou visível na tela, medido quando a pessoa troca de página, esconde a aba ou fecha. Cada medida vale no máximo 30 minutos: uma aba esquecida aberta entra como 30 minutos. Aparece `—` quando não há nenhuma medida no período.
- `Páginas por visitante`: acessos divididos por visitantes, com uma casa decimal. Aparece `—` se não houve visitante. Quanto maior, mais páginas cada pessoa abriu. O portal não traz uma meta de número bom. **O que fazer:** compare com você mesmo: a seta do cartão mostra se subiu ou caiu em relação ao período anterior.
- A seta com porcentagem compara com o período anterior do mesmo tamanho, logo antes do escolhido. Exemplo: em `30 dias`, compara com os 30 dias anteriores. Em `Este mês` (do dia 1 até hoje), compara com a mesma quantidade de dias logo antes do dia 1, ou seja, o fim do mês passado. `igual` quer dizer que não mudou.
- Um cartão fica sem seta quando o período anterior não tem número para comparar (zero ou sem medida), como logo depois que a contagem começou.
- A linha pequena dentro de `Acessos` e `Visitantes` mostra a subida e a descida dia a dia no período. Os cartões de tempo e de páginas por visitante não têm essa linha.

## gráfico `Acessos por dia`

- A linha escura com área preenchida é de acessos; a linha clara é de visitantes.
- Quando o último dia é hoje, o trecho final fica tracejado com o aviso `Hoje ainda está contando — a linha tracejada não é queda.` O dia ainda não acabou.
- Passar o mouse sobre um dia mostra os números daquele dia. A tela foi feita para o mouse: não tem toque próprio para o celular. **O que fazer:** no celular, toque no dia e veja se os números aparecem; se não aparecerem, abra o painel num computador ou baixe o `Baixar relatório PDF`, que traz o gráfico por dia. [guia=trafego.baixar-pdf]
- As datas embaixo aparecem espaçadas para caber cerca de 8 rótulos, por isso o espaçamento muda com o tamanho do período. O último dia sempre aparece.

## `Acessos por seção`

- Cada seção junta as páginas pela primeira parte do endereço: notícias, Guia, vagas, eventos, Melhores da Cidade, Fale conosco e assim por diante. A `Página inicial` é só a capa do portal.
- `Outras páginas` reúne busca, anuncie, seja parceiro, privacidade, termos, cookies e endereços que não pertencem a nenhuma seção.
- A porcentagem é a parte do total de acessos. A barra é comparada com a maior seção, que sempre tem a barra cheia. Por isso barra e porcentagem não batem.
- Aparecem 6 seções de início; `Ver as N seções` mostra todas.

## `Mais lidas no período`

**por que aparece o endereço em vez do título?** Porque o portal não achou o conteúdo daquele endereço: ele foi apagado ou mudou de endereço (por exemplo, quando o endereço da notícia mudou). As visitas antigas continuam contadas no endereço antigo.

- Vale para qualquer página pública, não só notícias.
- São no máximo 10 páginas. Aparecem 6 de início; `Ver as N` mostra o resto.
- O título vem do conteúdo (notícia, empresa, roteiro, ponto turístico, evento, artigo, anúncio, vaga). Quando o portal não acha o conteúdo daquele endereço, por exemplo se ele foi apagado ou mudou de endereço, aparece o endereço no lugar do título.
- As colunas mostram a posição, a seção, os acessos e o tempo médio na página. Tempo `—` quer dizer que não houve nenhuma medida de tempo para aquela página.

## fontes

- frontend/src/components/painel/TrafegoDoPortal.tsx:42 (variação, sem base → sem seta), :107 (igual), :165 (rótulos), :201 (tracejado), :218 (onMouseEnter), :232 (aviso hoje), :241-264 (barra relativa à maior), :242 (6 seções), :283-292 (6 mais lidas), :329-334 (aviso de início), :438-447 (datas, max, Aplicar, PDF), :468-484 (cartões, notas, mini-linha só em 2)
- frontend/src/components/painel/relatorioTrafegoPdf.ts:10-20 (conteúdo e cor fixa), :70-73 (nome, datas, dias)
- backend/portais/visitas.py:43 (30 min), :45 (366 dias), :70 (melhores-da-cidade), :83-84 (outras páginas), :92 (áreas não contadas), :102 (robôs), :285-289 (período anterior), :320-343 (10 mais lidas, títulos)

## lacunas

- Comportamento do toque no celular no gráfico não verificado em aparelho (o código só tem evento de mouse).
- Texto exato da mensagem de erro de período inválido não conferido.
- Sem referência de "bom" para páginas por visitante; sem opção de ignorar equipe; logo no PDF não existe (decisão de produto).

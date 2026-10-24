---
id: usuario-consultar-telefones-uteis-onibus
titulo: "consultar telefones úteis, linhas de ônibus e previsão do tempo"
publico:
  - usuario
modulo: utilidade
categoria: utilidade
aba: nao-se-aplica
tipo_problema: orientacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

achar na página `A Voz do Povo` os telefones de emergência e serviços da cidade, as linhas de ônibus e a previsão do tempo.

## pré-requisitos

- a seção `A Voz do Povo` precisa estar ligada no portal.

## passos

1. No menu do topo do portal, clique em `A Voz do Povo`. [guia=topo.utilidade]
2. Na coluna lateral da página, veja o quadro `Telefones Úteis`. [guia=voz.telefones]
3. Para falar, clique no número curto (por exemplo, 190) ou no telefone: no celular, ele liga. [guia=voz.telefones]
4. Para ver os outros telefones, clique em `Ver mais telefones` (o botão mostra quantos faltam). [guia=voz.telefones-mais]
5. No quadro `Linhas de Ônibus`, veja o número, o nome, o itinerário e os horários de cada linha e clique em `Ver todas as linhas` (o botão mostra quantas faltam) para abrir a lista completa. [guia=voz.onibus]
6. No quadro `Previsão do Tempo`, veja a temperatura, a umidade e os próximos dias. [guia=voz.tempo]

## resultado

você encontra o telefone ou a linha que procura sem sair do portal.

## desvios

- cada quadro só aparece se o portal cadastrou dados: sem telefones, ônibus ou previsão, o quadro some.
- o número curto (190, 192, 193 e semelhantes) aparece em destaque; telefone com DDD aparece com máscara.
- em emergência, ligue direto para o número oficial.

## fontes

- `portal-cidade/frontend/src/app/a-voz-do-povo/UtilidadePublicaClient.tsx:90-135,402-500,998-1004`
- `portal-cidade/frontend/src/components/layout/HeaderClient.tsx:587`

## lacunas

não verificado em navegador. Os dados (telefones, linhas, previsão) vêm do cadastro do portal e mudam de cidade para cidade; nada aqui garante que os horários de ônibus estejam atualizados.

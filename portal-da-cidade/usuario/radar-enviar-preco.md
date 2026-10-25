---
id: usuario-radar-enviar-preco
titulo: "enviar um preço para o Radar de Preços"
publico:
  - usuario
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: orientacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 3FZrdVUN_Yk
---

## objetivo

mandar a foto de um preço ou de um encarte para ajudar outras pessoas a economizar. O envio tem 4 passos e a equipe confere antes de publicar.

## pré-requisitos

- uma foto do produto com o preço, ou do encarte. Nos postos, dá para mandar só os valores, sem foto.
- o envio não pede login: só seu nome e WhatsApp.

## passos

1. No menu do topo do portal, clique em `Radar de Preços`. [guia=topo.radar]
2. Na página do Radar, clique em `Enviar preço` (ou em `Enviar foto ou encarte`, no quadro `Encontrou um preço?`). [guia=radar.nav-enviar] [t=5]
3. No passo `Onde você viu o preço?`, clique em `Supermercados`, `Farmácias` ou `Postos de combustível`. A tela avança sozinha. [guia=radar.envio-categoria] [t=8]
4. No passo `Qual é o estabelecimento?`, digite o nome em `Nome *` e toque na sugestão marcada `Já está no Radar`. [guia=radar.envio-mercado] [t=17]
5. Clique em `Continuar`. [guia=radar.envio-continuar]
6. No passo `Mande a foto do preço`, escolha `Foto de um produto` (até 5 fotos) ou `Encarte` (uma foto; os preços são lidos dela). [guia=radar.envio-tipo] [t=41]
7. Clique em `Adicionar foto` e escolha a foto no aparelho. Se precisar, gire ou remova a foto pelos botões dela. [guia=radar.envio-foto] [t=52]
8. Clique em `Continuar`. [guia=radar.envio-continuar]
9. No passo `Quase lá! Quem está mandando?`, preencha `Seu nome *` e `Seu WhatsApp *`. [guia=radar.envio-contato] [t=58]
10. Clique em `Enviar preço`. [guia=radar.envio-enviar] [t=66]

## resultado

aparece `Valeu! Preço enviado.` e a dica `A equipe confere e, se estiver certo, entra no Radar.` Há os botões `Ver os preços` e `Mandar outro preço`. A equipe do portal confere o envio antes de ele aparecer no Radar, então pode demorar.

## desvios

- se o estabelecimento não está na lista, no passo 4 toque em `Procurar "..." no Google Maps` (nome e endereço vêm do Google) ou cadastre um novo, informando `Nome *`, `Endereço *`, `Cidade` e `Bairro`. O estabelecimento novo só aparece no Radar depois da conferência da equipe.
- nos postos, o passo da foto pede `Mande a foto da placa ou só o preço`: sem foto, toque em `Não tem foto? Mande só o preço` e digite os valores dos combustíveis que viu.
- o formulário mostra `Passo N de 4` e a barra de progresso; `Voltar` retorna ao passo anterior.
- o nome e o WhatsApp servem para a equipe tirar dúvida sobre o preço; só a equipe os vê.
- o portal pode pedir uma confirmação de que você é uma pessoa antes do envio.

## fontes

- `portal-cidade/frontend/src/components/radar/EnviarRadar.tsx:35-38,288-312,335-345,346-560`
- `portal-cidade/frontend/src/components/radar/FotosDoEnvio.tsx:50-84`
- `portal-cidade/frontend/src/components/radar/ChamadaEnvio.tsx:7-20`
- `portal-cidade/frontend/src/components/radar/NavegacaoRadar.tsx:7-26`
- vídeo `3FZrdVUN_Yk`.

## lacunas

não verificado visualmente. Não há campo de preço no envio com foto: o preço é lido da foto (`FotosDoEnvio.tsx:10`). O que a equipe recusa na conferência não está descrito no código consultado.

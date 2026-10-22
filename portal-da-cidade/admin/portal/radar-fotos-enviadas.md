---
id: radar-fotos-enviadas
titulo: "aprovar as fotos enviadas ao Radar de Preços"
publico:
  - admin
modulo: radar
categoria: radar
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

aqui você decide se a foto de preço enviada por um morador vai ao ar. Aprovada, o portal lê os preços da foto e eles entram no Radar.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, clique em `Radar de Preços` e depois em `Fotos enviadas`. [guia=menu:/painel/radar/fotos]
2. Fique na aba `Aguardando`. As outras são `Lidos` (já aprovadas) e `Recusados`.
3. Confira a foto. Clique nela para ampliar; use os botões de girar se estiver de lado. Veja o tipo (produto ou encarte), o mercado, o preço informado e quem enviou.
4. Se o mercado ou o preço estiverem errados, clique em `Corrigir`, ajuste o `Mercado *` ou o `Preço informado` e salve.
5. Se estiver certo, clique em `Aprovar e ler`. Quando o mercado ainda é novo, o botão se chama `Aprovar foto e mercado` e aprova os dois.
6. Se não serve, clique em `Recusar` e confirme em `Recusar esta foto?`. Nada é lido.

## resultado

foto aprovada vai para `Lidos` e, em alguns minutos, o portal lê os preços e os publica. Foto recusada vai para `Recusados`.

## desvios

- se a leitura falhar, a foto fica com erro e aparecem `Tentar de novo` e `Corrigir`. O portal nunca inventa preço.
- se o mercado continuar `Pendente`, os preços só aparecem no site depois que o mercado for aprovado (veja "aprovar e juntar mercados do Radar de Preços").
- preço lido que parece fora do normal vai para `Preços retidos`.

## quando pedir ajuda

peça ajuda se a foto ficar muito tempo em `Lidos` sem os preços aparecerem.

## fontes

- `portal-cidade/frontend/src/app/painel/radar/fotos/page.tsx:19`
- `portal-cidade/docs/RADAR-CONTRATO.md`

## lacunas

não verificado visualmente. O tempo de leitura depende de um processo automático do servidor; não foi medido.

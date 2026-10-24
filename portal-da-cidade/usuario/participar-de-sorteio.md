---
id: usuario-participar-de-sorteio
titulo: participar de um sorteio do portal
publico:
  - usuario
modulo: sorteios
categoria: sorteios
aba: nao-se-aplica
tipo_problema: participar-sorteio
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - REgRSXekqpA
---

## objetivo

se inscrever de graça num sorteio de empresa da cidade e guardar o número da sorte.

## pré-requisitos

- a seção `Sorteios` precisa estar ligada no portal.
- ter um número de WhatsApp seu: é por ele que o ganhador é chamado.

## passos

1. No menu do topo do portal, clique em `Sorteios`. [guia=topo.sorteios]
2. Na lista, em `Próximos sorteios`, clique no sorteio que você quer (botão `Participar`). [guia=sorteios.sorteio] [t=19]
3. Na página do sorteio, leia o prêmio e as `Regras`. [guia=sorteios.regras]
4. Clique em `Participar do sorteio`. [guia=sorteios.participar] [t=21]
5. Na janela `Participar do sorteio`, preencha `Nome` e `Sobrenome`. [guia=sorteios.formulario] [t=24]
6. Preencha `WhatsApp com DDD`. O número precisa ser seu. [guia=sorteios.formulario] [t=26]
7. Marque a caixa `Confirmo que o número acima é o meu WhatsApp e li as regras do sorteio.` [guia=sorteios.formulario]
8. Clique em `Confirmar participação` e guarde o seu `Número da sorte`. [guia=sorteios.confirmar] [t=35]

## resultado

a inscrição é confirmada na hora com um número da sorte. A data do sorteio e o link da live ficam na página do sorteio, que também mostra os ganhadores de sorteios já realizados e os próximos sorteios.

## desvios

- cada aparelho só se inscreve uma vez por sorteio: a tela avisa `Já existe uma inscrição deste aparelho neste sorteio.` e mostra `Você está participando` com o número.
- com número errado, o prêmio pode ir para outra pessoa.
- quando as inscrições não abriram, o botão aparece como `Inscrições abrem em breve`; quando fecharam, como `Inscrições encerradas`.
- na lista, use o campo `Buscar prêmio ou empresa` e o filtro `Situação` (por exemplo `Abertos`) para achar o sorteio.

## quando pedir ajuda

se a inscrição der erro ou as inscrições estiverem encerradas, veja `Próximos sorteios` ou fale com o portal.

## fontes

- `portal-cidade/frontend/src/components/sorteios/ListaSorteios.tsx:72-120`
- `portal-cidade/frontend/src/components/sorteios/SorteioCard.tsx:44-60`
- `portal-cidade/frontend/src/components/sorteios/DetalheSorteio.tsx:323,343-362`
- `portal-cidade/frontend/src/components/sorteios/ModalParticipar.tsx:95-182`
- `portal-cidade/frontend/src/components/sorteios/util.ts:21-27,125`
- vídeo `REgRSXekqpA` (19–54 s).

## lacunas

não verificado visualmente. O vídeo `REgRSXekqpA` diz para ativar as notificações para receber avisos de novos sorteios, mas não encontrei esse controle na página de sorteios; por isso não virou passo.

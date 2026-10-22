---
id: ext-dashboard
titulo: "Dashboard do Extrator: saldo, extrações do mês e avisos"
publico:
  - cliente
modulo: extracao
aba: Dashboard
tipo_problema:
  - dashboard
  - saldo
  - saldo-baixo
  - pagamento-pendente
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - F136_v1JyRY
  - R9FCgunNxFE
---

## objetivo
entender o que aparece no `Dashboard` e o que significam os avisos.

## pré-requisitos
- estar logado no Extrator (veja `ext-entrar-pela-area-do-cliente`).

## explicação
- menu lateral do Extrator: `Dashboard`, `Nova extração` (destacado), `Histórico`, `Extrato de créditos`, `Comprar créditos`; no perfil, `Trocar senha`. o botão flutuante `Suporte pelo WhatsApp` aparece em todas as telas.
- o `Dashboard` tem o título "Dashboard" e o subtítulo "Saldo, extrações do mês e o que está em andamento agora.", mais um vídeo de apresentação no topo.
- cartões: `Saldo de créditos`, `Extrações no mês`, `Créditos consumidos no mês`.
- botões: `Nova extração`, `Comprar créditos`, `Ver extrato`.
- `Últimas extrações`: cada item mostra o nome (ou "Extração #" seguido dos 8 primeiros caracteres do identificador), a data e botões para baixar os arquivos que ainda não expiraram. sem extrações: "Você ainda não criou nenhuma extração." / "Comece escolhendo cidade, nicho e quantidade de registros." link `Ver histórico`.
- `Extrações em andamento`: lista o que está rodando; vazio mostra "Nenhum job em andamento no momento."
- aviso de pagamento pendente: "Você tem um pagamento pendente de X créditos / R$ Y" e "Os créditos entram no saldo assim que o pagamento for confirmado." com o botão `Pagar agora`, que abre a fatura.
- aviso de saldo baixo: aparece quando o saldo é menor que 200 créditos: "Saldo baixo — X créditos restantes" / "Compre créditos antes de montar a próxima extração para não ficar sem saldo no meio do caminho." com o botão `Comprar agora`.
- no vídeo, o saldo cai logo após a extração gerar o arquivo (200 créditos consumidos numa extração de duas buscas).

## passos
1. clique em `Dashboard` no menu lateral.
2. confira o `Saldo de créditos`.
3. se houver faixa de pagamento pendente, clique em `Pagar agora` para pagar a fatura.
4. se houver faixa de saldo baixo, clique em `Comprar agora` (veja `ext-comprar-creditos`).
5. para baixar arquivos recentes, use os botões em `Últimas extrações` (veja `ext-baixar-arquivos`).

## resultado
você acompanha saldo, consumo do mês e extrações recentes.

## se der errado
- `Não foi possível carregar o dashboard. Tente novamente.`: clique em `Tentar novamente`.

---
id: ext-licenca-suspensa-ou-conta-bloqueada
titulo: "o que acontece no Extrator se a licença for suspensa ou a conta bloqueada"
publico:
  - cliente
modulo: acesso
aba: Login
tipo_problema:
  - licenca-suspensa
  - conta-bloqueada
  - inadimplencia
  - extrator-maps
  - creditos
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo
videos: []
---

## objetivo
saber o que acontece com o seu acesso e os seus créditos quando há suspensão ou bloqueio.

## pré-requisitos
- nenhum.

## explicação
- quem decide quais licenças dão direito ao Extrator é a Área do Cliente. o Extrator só reage ao status da conta: quando o status do cliente muda lá (inclusive bloqueio), a Área do Cliente avisa o Extrator, que derruba as sessões abertas. além disso, cada sessão é revalidada a cada 5 minutos.
- depois disso, o próximo login só funciona se a Área do Cliente ainda der direito. a mensagem é genérica (a tela volta ao login).
- bloqueio feito pelo administrador do próprio Extrator também impede o login pela Área do Cliente.
- créditos e arquivos: o código de bloqueio e suspensão não mexe na carteira de créditos, então eles não são apagados.
- exceção: estorno ou chargeback de uma compra de créditos remove os créditos daquela compra e bloqueia a conta automaticamente. o desbloqueio é manual, feito pela equipe.
- no cartão da Área do Cliente, com o negócio suspenso aparece `Suspenso` e `Regularizar pagamento` (veja `ac-ferramentas-extrator-maps` e `ac-atraso-e-suspensao`).

## passos
1. regularize o pagamento do negócio em atraso (veja `ac-pagar-cobranca-pendente`).
2. aguarde a liberação (veja `ac-reativar-depois-de-pagar`).
3. entre de novo pelo caminho de `ext-entrar-pela-area-do-cliente`.
4. se a conta foi bloqueada após estorno, abra um chamado no `Suporte`.

## resultado
com o direito restabelecido, você volta a entrar e encontra seus créditos.

## se der errado
- o comportamento exato do Extrator aberto direto, com licença suspensa, depende do estado do cadastro e não foi testado em produção; se houver dúvida, fale com o suporte.

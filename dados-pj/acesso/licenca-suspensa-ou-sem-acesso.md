---
id: pj-licenca-suspensa-ou-sem-acesso
titulo: "Dados PJ bloqueado: licença suspensa, cancelada ou plataforma não liberada"
publico:
  - cliente
modulo: acesso
aba: Login
tipo_problema:
  - licenca-suspensa
  - sem-acesso
  - plataforma-nao-liberada
  - conta-bloqueada
  - inadimplencia
  - dados-pj
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos: []
produto: dados-pj
---

## objetivo
entender por que o Dados PJ não abre ou não deixa gerar lista.

## pré-requisitos
- nenhum.

## explicação
- o Dados PJ exige ao menos uma licença ATIVA. diferente do Extrator Maps, licença suspensa não dá acesso.
- se todas as suas licenças estiverem suspensas, a Área do Cliente recusa a entrada: `Sua plataforma está suspensa. Regularize a pendência na Central para voltar a usar o DadosPJ.`
- outras recusas da Área do Cliente: `Nenhuma licença sua dá direito ao DadosPJ.`, `A licença que dava direito ao DadosPJ foi cancelada.`, `Sua conta está bloqueada. Regularize a pendência na Central para voltar a acessar o DadosPJ.`
- se você já estava dentro, o Dados PJ desconecta em poucos minutos após a suspensão.
- dentro do Dados PJ, `Sua plataforma ainda não foi liberada. Entre em contato com o suporte.` significa que nenhum estado está liberado para a sua conta.
- quem tem uma licença ativa e outra suspensa só gera listas no estado da ativa.

## passos
1. na Área do Cliente, confira a situação do negócio e pague a pendência, se houver.
2. depois da confirmação do pagamento, entre de novo.
3. se a mensagem for `Sua plataforma ainda não foi liberada`, abra um chamado em `Suporte`.

## resultado
o acesso volta quando a licença estiver ativa.

## se der errado
- pagou e continua bloqueado: abra um chamado em `Suporte` com o nome do negócio.

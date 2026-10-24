# /painel/melhores-da-cidade/[id]/suspeitos (Votos suspeitos)

Arquivo: `app/painel/melhores-da-cidade/[id]/suspeitos/page.tsx` (143 linhas)

## o que você vê
Tela "Votos suspeitos" com link `Voltar ao placar` e a explicação: o sistema avisa quando alguém recebe votos de um jeito que não parece gente de verdade; você decide entre anular (tira os votos do placar) e manter (deixa como está). Cada alerta pendente é um cartão com o nome da empresa, a competição, o motivo ("Muitos votos em poucos minutos" ou "Votos rápidos demais") e um gráfico "votos a cada 10 minutos" com o pico. Botões do cartão: `Anular N votos` e `Manter, parece normal`. Abaixo, "O que você já decidiu": tabela com Quando, Participante, Motivo, Votos e Decisão (`Anulados` ou `Mantidos`) e o botão `Desfazer` em cada linha. Sem alertas: "Nenhum voto suspeito esperando decisão."; sem decisões: "Nenhuma decisão ainda."

## rota e gate
- `/painel/melhores-da-cidade/<id>/suspeitos`. client, `Header` "Votos suspeitos". só administrador; módulo `melhores`.

## como chegar
- na lista: `Votos suspeitos` no cartão de votação no ar; ou no placar, botão `Votos suspeitos` ou a etiqueta `suspeito`.

## o que faz
- registra a decisão sobre cada alerta: anular, manter ou desfazer a decisão (volta a pendente).

## ações e campos
- `Anular N votos` e `Manter, parece normal`: sem janela de confirmação, valem na hora. `Desfazer` reabre o alerta.
- votação encerrada: "A votação terminou: este alerta não pode mais ser decidido." e some o `Desfazer`.

## estados
- "Carregando…"; erro em alerta vermelho ("registrar a decisão" / "carregar os votos suspeitos"); botões desativados enquanto grava.

## possíveis problemas
- anular não pede confirmação; para corrigir use `Desfazer` (só até a votação terminar).
- decisão não notifica a empresa.

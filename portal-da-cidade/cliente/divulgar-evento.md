---
id: cliente-divulgar-evento
titulo: "divulgar um evento na agenda do portal"
publico:
  - cliente
modulo: eventos
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - cadastrar evento
  - divulgar evento
  - colocar meu show na agenda
  - salvar evento
tags:
  - criar
  - publicar
  - evento
  - pagamento
  - organizador
  - programacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - aNqs6gSprvs
  - TWKsO_iuxGE
---

## objetivo
aqui você cadastra um evento seu e paga a divulgação. O pagamento é por evento, sem mensalidade.

## pré-requisitos

- Estar logado na área do cliente como empresa.
- Ter pelo menos uma foto do evento.

## passos

1. Na parte `O que eu publico` do menu da esquerda, clique em `Agenda de Eventos`. [t=6] [guia=menu:/minha-conta/eventos]
2. Clique em `Novo evento`. O formulário tem três partes e o quadro `Como vai aparecer` mostra a prévia. [t=25] [guia=eventos.novo]
3. Escreva o `Título do evento *`. A categoria é opcional e o organizador já vem com o nome da empresa. [t=42] [guia=evento-form.titulo]
4. Escolha a `Data *` do evento. Se durar mais de um dia, preencha também a `Data de término`. [t=67] [guia=evento-form.data]
5. Escreva o `Horário` (texto livre, por exemplo "sábado das 16h às 23h") e o `Local`. O CEP preenche o endereço e a cidade já vem escolhida. [t=75] [guia=evento-form.horario]
6. Em `Fotos, vídeo e ingressos`, clique em `Enviar foto de capa` e escolha a imagem principal (recomendado: 1280 × 720 px, deitada). [t=106] [guia=evento-form.capa]
7. Na galeria logo abaixo, clique em `+ Adicionar fotos` e envie ao menos uma foto. A galeria aceita até 10 itens, foto ou vídeo do YouTube. [t=120] [guia=evento-form.galeria]
8. Se quiser, preencha `Preço` (por exemplo, "Entrada gratuita"), `Link de ingresso` (vira botão na página), `WhatsApp para contato` e marque `Mostrar telefone na página`. [t=142] [guia=evento-form.preco]
9. Em `Como você quer divulgar?`, clique na opção de divulgação que quer. A prévia mostra o evento com a escolha. [t=163] [guia=evento-form.divulgacao]
10. Clique em `Pagar e publicar`. [t=185] [guia=evento-form.pagar]
11. Pague com Pix ou cartão na janela que abre. [t=191] [guia=pagamento.janela]

## resultado
depois de pago, se o portal exigir aprovação, o evento entra em análise antes de ir ao ar. Na lista, a situação é `Aguardando pagamento` (com o botão `Continuar pagamento`), `Em análise` após o pagamento e `Publicado` após a aprovação. Use `Editar` para alterar e a setinha para abrir a página pública do evento. [t=200]

## desvios

- Se você já pagou um pacote de eventos com saldo, o botão do fim se chama `Publicar pelo pacote` e não cobra de novo.
- Evento reprovado: leia o `Motivo da reprovação`, clique em `Corrigir e reenviar`, ajuste e salve.
- O título não muda depois que o evento foi publicado (aviso da tela).
- Ao editar um evento, o botão do fim se chama `Salvar alterações`.
- Os filtros da lista são `Todos`, `Aguardando pagamento`, `Em análise`, `Publicado`, `Encerrados` e `Reprovado`.

## quando pedir ajuda

peça ajuda se aparecer "Divulgação indisponível no momento. Volte mais tarde." ou se o evento pago não entrar em análise.

## fontes

- `frontend/src/app/minha-conta/eventos/page.tsx:35-40` — situações; `:136-143` `Novo evento`; `:185-193` filtros; `:226-237` reprovação e `Continuar pagamento`.
- `frontend/src/app/minha-conta/eventos/EventoForm.tsx:332-340` — título, data e uma foto obrigatórios; `:572-760` campos e seções; `:827-832` botões finais; `:584-586` aviso do título.
- `frontend/src/app/minha-conta/eventos/GaleriaDoEvento.tsx:280` — `+ Adicionar fotos`.
- `backend/comercial/views_eventos.py:295` — título travado depois de publicado.

## lacunas

tela não validada no navegador nesta tarefa. Não há prazo de análise no código além do aviso "24h a 48h úteis" mostrado após o pagamento. A foto de capa é opcional no código; a validação exige ao menos uma foto na galeria (`EventoForm.tsx:339`).

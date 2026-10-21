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
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - Hyh3UxHW_jU
---

## objetivo
aqui você cadastra um evento seu e paga a divulgação. O pagamento é por evento, sem mensalidade.

## pré-requisitos

- Estar logado na área do cliente como empresa.
- Ter pelo menos uma foto do evento.

## passos

1. No menu da esquerda da sua área, clique em `Agenda de Eventos`. [guia=menu:/minha-conta/eventos]
2. Clique em `Novo evento`, no topo. [guia=fora]
3. Escreva o `Título do evento *`. [guia=fora]
4. Escolha a `Data *` do evento. [guia=fora]
5. Preencha o horário, o local e os outros campos que quiser. [guia=fora]
6. Em `Fotos, vídeo e ingressos`, clique em `+ Adicionar fotos` e envie ao menos uma foto. [guia=galeria.adicionar-fotos]
7. Em `Como você quer divulgar?`, escolha a opção de divulgação. [guia=fora]
8. Role até o fim e clique em `Pagar e publicar`. [guia=fora]
9. Pague com Pix ou cartão na janela que abre. [guia=fora]

## resultado
depois de pago, o evento entra em análise do portal antes de ir ao ar.

## desvios

- Se você já pagou um pacote de eventos com saldo, o botão do fim se chama `Publicar pelo pacote` e não cobra de novo.
- Evento reprovado: leia o `Motivo da reprovação`, clique em `Corrigir e reenviar`, ajuste e salve.
- O título não muda depois que o evento foi publicado.
- Ao editar um evento, o botão do fim se chama `Salvar alterações`.

## quando pedir ajuda

peça ajuda se aparecer "Divulgação indisponível no momento." ou se o evento pago não entrar em análise.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/eventos/page.tsx:142-143,182,226-227` — "Novo evento", aviso de análise, reprovação.
- `portal-cidade/frontend/src/app/minha-conta/eventos/EventoForm.tsx:333-340` — título, data e uma foto obrigatórios.
- `portal-cidade/frontend/src/app/minha-conta/eventos/EventoForm.tsx:572-832` — seções, "Como você quer divulgar?", botões finais.
- `portal-cidade/frontend/src/app/minha-conta/eventos/GaleriaDoEvento.tsx:279` — "+ Adicionar fotos".
- `portal-cidade/backend/comercial/catalogo.py` — rótulo "Agenda de Eventos" da seção, usado no menu (`rotuloDoModulo`).

## lacunas

tela não validada no navegador nesta tarefa. A ficha `mapa/cliente/telas/minha-conta-eventos-novo.md` fala em foto de capa obrigatória; o código exige uma foto na galeria (`EventoForm.tsx:339`). Não há prazo de análise no código.

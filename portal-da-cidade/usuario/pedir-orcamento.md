---
id: usuario-pedir-orcamento
titulo: pedir orçamento a empresas da cidade
publico:
  - usuario
modulo: orcamentos
categoria: orcamentos
aba: nao-se-aplica
tipo_problema: pedido-de-orcamento
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - VmEwdNZd7pw
---

## objetivo

contar o que precisa e receber contato de empresas pelo WhatsApp. O pedido é grátis e leva menos de um minuto.

## pré-requisitos

- a seção `Orçamentos` precisa estar ligada no portal.

## passos

1. No menu do topo do portal, clique em `Orçamentos`. [guia=topo.orcamentos] [t=7]
2. Em `Etapa 1`, escolha como explicar: `Gravar áudio` (toque no microfone e fale) ou `Escrever`. [guia=orcamento.modo] [t=10]
3. Para falar, toque no microfone, diga o que precisa (até 2 minutos) e toque de novo para parar; para escrever, digite no campo (por exemplo, "Preciso trocar a fiação da sala e instalar dois chuveiros") e clique em `Continuar`. [guia=orcamento.pedido] [t=13]
4. Na janela `Vamos enviar para empresas desta categoria`, confira a categoria em `Seu pedido vai para`. Se não for isso, clique em `Não é isso? Troque aqui` e escolha outra `Categoria` e o `Tipo de serviço`. [guia=orcamento.categoria] [t=37]
5. Clique em `Confirmar e continuar`. [guia=orcamento.categoria-confirmar]
6. Em `Etapa 2`, escolha a `Cidade` e o `Bairro`. [guia=orcamento.local]
7. Escreva os detalhes em `Descrição detalhada *`. [guia=orcamento.descricao]
8. Se quiser, em `Fotos` (até 5), adicione fotos do que precisa. [guia=orcamento.fotos] [t=30]
9. Clique em `Continuar para o contato`. [guia=orcamento.continuar-contato]
10. Em `Etapa 3`, preencha `Nome e sobrenome *` e `WhatsApp *`. [guia=orcamento.contato]
11. Clique em `Enviar solicitação` e espere `Pedido enviado!`. [guia=orcamento.enviar] [t=41]

## resultado

a tela `Pedido enviado!` explica o caminho: primeiro o portal analisa e aprova o pedido; depois de aprovado, todos os profissionais da categoria cadastrados no portal recebem o pedido e entram em contato pelo WhatsApp. A tela tem o botão `Fazer outro pedido`.

## desvios

- use um WhatsApp seu e verdadeiro: a tela avisa que números e nomes inválidos são barrados.
- o portal pode pedir uma verificação de segurança antes do envio.
- se a categoria não carregar, aparece `Não foi possível carregar as categorias. Tente novamente.` com o botão `Tentar de novo`.
- sem o recurso de áudio, a etapa 1 mostra só o campo `O que você precisa?`.

## o que pedir

- Serve para serviço ou compra: ex.: "carro de até 80.000 reais com no máximo 5 anos de uso", "limpeza de sofá", "trocar os pneus do carro". Categorias vão de veículos, imóveis e bikes a mecânico, eletricista, frete, pintor e roupas.
- A inteligência artificial entende o pedido e acha a categoria sozinha (ex.: carro com problema elétrico vira veículos > auto elétrica). Fotos ajudam a detalhar a necessidade.
- Depois do envio, as empresas retornam e o visitante escolhe a que melhor atender. Não tem custo.
- Trocar a categoria (`Não é isso? Troque aqui`) permite mudar categoria (ex.: construção e reforma, assistência técnica) e tipo de serviço (ex.: mecânico, funilaria e pintura, guincho).

## quando pedir ajuda

se der erro ao enviar, tente de novo mais tarde ou fale com o portal.

## fontes

- `portal-cidade/frontend/src/app/orcamento/OrcamentoFormClient.tsx:437-650`
- `portal-cidade/frontend/src/app/orcamento/ModalConfirmarCategoria.tsx:124-190`
- `portal-cidade/frontend/src/app/orcamento/LocalDoPedido.tsx:20-95`
- `portal-cidade/frontend/src/app/orcamento/PedidoEnviado.tsx:45-80`
- `portal-cidade/frontend/src/components/layout/HeaderClient.tsx:527`
- vídeo `VmEwdNZd7pw`.

## lacunas

não verificado em navegador. A verificação de segurança (captcha) aparece conforme a configuração do portal; não foi conferido quando. O prazo da análise do portal não está definido no código consultado.

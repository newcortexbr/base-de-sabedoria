---
id: operar-delivery-pedidos-e-configuracoes
titulo: configurar o delivery de uma empresa
publico:
  - admin
modulo: delivery
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - TgIUmqrRuBY
  - 2ShbACG2mHE
---

## objetivo

aqui você ajusta taxa, tempo, forma de pagamento e áreas de entrega do delivery de uma empresa.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O módulo Guia Comercial estar disponível no portal.
- A categoria da empresa ter `Delivery` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa que você quer, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Desça até `Conteúdo da ficha` e, no cartão `Configurações do delivery`, clique em `Gerenciar`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-config-delivery] [t=9]
4. Em `Status`, ligue a chave `Delivery ativo (página pública visível)`. Desligado, a página de pedidos sai do ar. [guia=delivery-configuracoes.ativo] [t=65]
5. Em `Entrega`, preencha a `Taxa de entrega (R$)` (0 = grátis). [guia=delivery-configuracoes.taxa] [t=73]
6. Preencha o `Pedido mínimo (R$)`. [guia=delivery-configuracoes.pedido-minimo] [t=76]
7. Preencha o `Tempo mínimo (min)`. [guia=delivery-configuracoes.tempo-minimo] [t=78]
8. Preencha o `Tempo máximo (min)`. [guia=delivery-configuracoes.tempo-maximo] [t=80]
9. Preencha o `Raio de entrega (km)`. [guia=delivery-configuracoes.raio] [t=83]
10. Em `Formas de Pagamento`, ligue as que a loja aceita: `Dinheiro (troco na entrega)`, `Cartão na entrega` ou `PIX`. [guia=delivery-configuracoes.pagamentos] [t=85]
11. Com `PIX` ligado, preencha a `Chave PIX` da loja. [guia=delivery-configuracoes.chave-pix] [t=93]
12. Em `Áreas de Atendimento`, escolha a `Cidade`. [guia=delivery-configuracoes.area-cidade] [t=104]
13. Escolha a `Cobertura`: `Município todo` ou `Bairros específicos`. [guia=delivery-configuracoes.area-cobertura] [t=107]
14. Clique em `Adicionar área`. Repita para cada área. [guia=delivery-configuracoes.adicionar-area] [t=109]
15. Em `Mensagem de Boas-Vindas`, escreva um recado curto para o topo da loja. [guia=delivery-configuracoes.boas-vindas] [t=111]
16. Clique em `Salvar configurações`. [guia=delivery-configuracoes.salvar] [t=120]

## resultado

a loja mostra taxa, tempo e mensagem configurados.

## desvios

- O cliente só escolhe no checkout as áreas cadastradas em `Áreas de Atendimento`.
- Para acompanhar os pedidos, veja o artigo "acompanhar a fila de pedidos do delivery".

## quando pedir ajuda

peça ajuda se a loja não abrir mesmo com `Delivery ativo` ligado ou se um pagamento parecer errado.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:933-946,1655-1686` — cartões de `Conteúdo da ficha`.
- `portal-cidade/frontend/src/app/painel/delivery/configuracoes/page.tsx:1`
- `portal-cidade/frontend/src/app/painel/delivery/pedidos/page.tsx:1`
- vídeo `TgIUmqrRuBY`.

## lacunas

não verificado visualmente nesta tarefa; passos conferidos com o vídeo de suporte e com o código da tela. Rótulos `Ativar som`, `↻ Atualizar` e `Saiu para entrega` confirmados em `app/painel/delivery/pedidos/page.tsx`.

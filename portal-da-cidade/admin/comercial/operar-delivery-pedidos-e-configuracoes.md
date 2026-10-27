---
id: operar-delivery-pedidos-e-configuracoes
titulo: configurar o delivery de uma empresa
publico:
  - admin
modulo: delivery
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - delivery
  - empresa
  - pagamento
  - entregar
  - horario
  - preco
status: rascunho-documental
revisado_em: 2026-10-27
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
- A empresa ter ficha completa; a cortesia do portal também atende a essa condição.
- A categoria da empresa ter `Delivery` marcado em `Gerenciar Categorias`.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Comercial` e depois em `Listar Empresas`. [guia=menu:/painel/guia/empresas]
2. Na linha da empresa, clique no lápis (`Editar`). [guia=guia-empresas.editar]
3. Em `Conteúdo da ficha`, clique em `Gerenciar` no cartão `Configurações do delivery`. O formulário da empresa é salvo antes de abrir a tela. [guia=guia-empresas-editar.gerenciar-config-delivery] [t=9]
4. Ligue `Delivery ativo (página pública visível)`. A mudança vale ao salvar as configurações. [guia=delivery-configuracoes.ativo] [t=68]
5. Preencha `Taxa de entrega (R$)`; zero indica entrega grátis. [guia=delivery-configuracoes.taxa] [t=74]
6. Preencha `Pedido mínimo (R$)`. [guia=delivery-configuracoes.pedido-minimo] [t=77]
7. Preencha `Tempo mínimo (min)`. [guia=delivery-configuracoes.tempo-minimo] [t=81]
8. Preencha `Tempo máximo (min)`. [guia=delivery-configuracoes.tempo-maximo] [t=81]
9. Preencha `Raio de entrega (km)`. [guia=delivery-configuracoes.raio] [t=86]
10. Role até `Formas de Pagamento`. [guia=delivery-configuracoes.pagamentos]
11. Ajuste `Dinheiro (troco na entrega)`, conforme o que a loja aceita. [guia=delivery-configuracoes.dinheiro] [t=89]
12. Ajuste `Cartão na entrega`, conforme o que a loja aceita. [guia=delivery-configuracoes.cartao] [t=92]
13. Ajuste `PIX`, conforme o que a loja aceita. [guia=delivery-configuracoes.pix] [t=94]
14. Se ligou `PIX`, preencha `Chave PIX`. [guia=delivery-configuracoes.chave-pix] [t=96]
15. Em `Áreas de Atendimento`, escolha a `Cidade` da nova área. [guia=delivery-configuracoes.area-cidade] [t=107]
16. Escolha `Município todo` ou `Bairros específicos` em `Cobertura`. [guia=delivery-configuracoes.area-cobertura] [t=109]
17. Se escolheu `Bairros específicos`, selecione os `Bairros atendidos`. [guia=delivery-configuracoes.area-bairros] [t=110]
18. Clique em `Adicionar área`. Repita os passos da nova área se atender outras cidades. [guia=delivery-configuracoes.adicionar-area] [t=113]
19. Preencha `Mensagem de Boas-Vindas`, se quiser. [guia=delivery-configuracoes.boas-vindas] [t=115]
20. Clique em `Salvar configurações`. [guia=delivery-configuracoes.salvar] [t=123]

## resultado

As configurações ficam salvas e o painel mostra `Configurações salvas`. As áreas são gravadas separadamente ao clicar em `Adicionar área`, com o aviso `Área cadastrada`.

## desvios

- O cliente só escolhe no checkout as áreas cadastradas em `Áreas de Atendimento`.
- Para acompanhar os pedidos, veja o artigo "acompanhar a fila de pedidos do delivery".

## campos
- a empresa também acompanha os pedidos na área dela e configura o próprio delivery.
- `Delivery ativo` desligado tira a página de pedidos do ar.
- `Taxa de entrega (R$)` 0 = entrega grátis. tempo mínimo e máximo (min) aparecem para o cliente na loja.
- `Chave PIX`: a chave da loja (CPF, CNPJ, e-mail, telefone ou aleatória).
- `Áreas de Atendimento`: no checkout o cliente só escolhe as áreas listadas. `Cobertura`: município todo ou só alguns bairros.
- `Mensagem de Boas-Vindas` aparece no topo da loja. ex.: pedidos até as 22 horas, entregamos em toda a cidade.
- na loja o cliente vê taxa, tempo, `Aberto agora` e a mensagem como configurados.

## quando pedir ajuda

peça ajuda se a loja não abrir mesmo com `Delivery ativo` ligado ou se um pagamento parecer errado.

## fontes

- `portal-cidade/frontend/src/components/painel/EmpresaEditor.tsx:984,1735-1744`.
- `portal-cidade/frontend/src/app/painel/delivery/configuracoes/page.tsx:167-176,199-210,232-314,430-509`.

## lacunas

Conferência documental no código b2f62d3f e nas legendas dos vídeos citados. Sem execução no navegador; não foram medidos cache, entrega de pedidos, impressão ou upload reais.

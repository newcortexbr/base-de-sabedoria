---
id: encontrar-cliente-e-ver-faturas
titulo: "encontrar um cliente e ver planos e faturas"
publico:
  - admin
modulo: clientes
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo
aqui você acha um cliente pelo nome, documento ou telefone e abre a página dele.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Clientes`. [guia=menu:/painel/clientes]
2. No topo da página, veja quantos clientes estão `Vencidos`, quantos vencem em 7 dias e em 30 dias, e quantos estão sem plano. [guia=clientes.resumo]
3. Para achar alguém, escreva em `Buscar por nome, documento ou telefone…`. [guia=clientes.busca]
4. Se quiser, escolha uma situação no filtro ao lado para ver só vencidos, a vencer ou sem plano. [guia=clientes.filtro-situacao]
5. Clique no nome do cliente para abrir a ficha dele. [guia=clientes.ver-cliente]
6. No topo da ficha ficam o documento, o WhatsApp e o e-mail, com o botão `Editar`. [guia=clientes.documento]
7. Na aba `Contratações`, veja todos os planos do cliente, com preço, período e status. em cada um dá para renovar ou cancelar. para vender um plano novo, clique em `registrar contratação` e escolha o plano e a forma de pagamento. [guia=clientes.ver-cliente]
8. Na aba `Financeiro`, veja o que está em aberto, o que venceu e o que foi pago nos últimos 12 meses, fatura por fatura. [guia=clientes.ver-cliente]
9. Se o cliente pagou por fora, clique em `Confirmar pagamento` na ficha (na tela `Financeiro` o rótulo é `Já recebi`). o plano continua no ar sem interrupção. [guia=financeiro.ja-recebi]
10. A aba `No portal` mostra tudo o que o cliente publicou: empresas no guia, vagas, classificados e banners. [guia=clientes.ver-cliente]

## resultado
Você vê os planos, as faturas e o que o cliente publicou.

## desvios

- Excluir e bloquear pedem confirmação; confira antes.
- O arquivo exportado tem dados de contato: guarde com cuidado.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx`
- `suporte-kb/mapa/admin/telas/painel-clientes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.

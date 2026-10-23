---
id: ac-onde-ver-pagamentos
titulo: "onde vejo minhas cobranças, vencimentos e pagamentos"
publico:
  - cliente
modulo: financeiro
aba: Pagamentos
tipo_problema:
  - ver pagamentos
  - histórico de cobranças
  - faturas
  - boletos
  - vencimento
  - quanto vou pagar
  - próxima cobrança
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - RjoIdbHZrkQ
---

## objetivo

encontrar a situação, os vencimentos e o histórico de cobranças de cada negócio.

## pré-requisitos

- Estar logado com a conta ativa.

## passos

1. Se você tem mais de um negócio, escolha qual no seletor do topo da página ou em `Meus negócios`. O menu da esquerda mostra os itens do negócio escolhido. [guia=menu:/negocios]
2. No menu da esquerda, clique em `Pagamentos` (último item). Abre `/negocios/<seu negócio>/pagamentos`. [guia=menu:/negocios/[licenseId]/pagamentos]
3. Leia o quadro `Situação dos pagamentos`: há um cartão para `Reserva territorial` e outro para `Mensalidade`, cada um com selo (`Em dia`, `A vencer`, `Em atraso`, `Suspenso`, `Após a instalação` ou `Sem cobrança`), vencimento e valor. [guia=fora]
4. Desça até `Histórico de cobranças` para ver todas as cobranças daquele negócio. Use os filtros `Todas`, `Reserva territorial` ou `Mensalidade`. [guia=pagamentos.historico]

## resultado

você vê, para aquele negócio, cada cobrança com `Vencimento`, `Valor`, `Situação` e um link em `Detalhes`: `Ver cobrança` (em aberto), `Regularizar` (vencida) ou `Ver comprovante` (paga).

## desvios

- Pagamentos são por negócio. Se você tem duas cidades, cada uma tem a sua página.
- Atalhos: o `Início` tem o quadro `Seus pagamentos`, e cada cartão em `Meus negócios` tem `Situação dos pagamentos` com o botão `Ver pagamentos` (ou `Regularizar pagamento` se o negócio estiver suspenso).
- "Ainda não há cobranças para este negócio. Quando a primeira for gerada, ela aparece aqui.": nenhuma cobrança foi criada ainda.
- "A mensalidade começa depois que o portal é instalado.": a mensalidade ainda não começou.
- "Não foi possível carregar o histórico agora." ou "Não foi possível carregar a situação dos seus pagamentos agora.": falha momentânea; use `Tentar de novo`.
- Conta bloqueada não vê esta página.

## quando pedir ajuda

peça ajuda se um pagamento que você fez não aparece como `Pago` depois de alguns dias úteis, ou se um valor parece errado. Use `Assunto` `Pagamentos`.

## fontes

- `src/app/(cliente)/negocios/[licenseId]/labels.ts:181` — item de menu "Pagamentos".
- `src/ui/shells/ClientShell.tsx:249` — "Pagamentos" no fim do menu.
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx:226` — título "Pagamentos"; `:245` — "Situação dos pagamentos"; `:84`–`:137` — selos e ações dos cartões; `:198`–`:210` — linhas do histórico; `:288` — mensalidade só depois da instalação.
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/PagamentosCliente.tsx:89` — filtros; `:99` — "Histórico de cobranças"; `:112` — histórico vazio; `:135` — colunas.
- `src/app/(cliente)/negocios/page.tsx:201` e `:244` — situação no cartão e botões.

## lacunas

não existe uma página única com as cobranças de todos os negócios juntas. Também não há página de "pedidos" para o cliente; a compra inicial aparece no histórico como "Reserva territorial · contratação".

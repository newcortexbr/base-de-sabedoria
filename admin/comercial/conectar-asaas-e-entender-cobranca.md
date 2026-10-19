---
id: conectar-asaas-e-entender-cobranca
titulo: entender a conexão Asaas e a cobrança
publico:
  - admin
modulo: financeiro
categoria: admin
aba: nao-se-aplica
tipo_problema: pagamento
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - lwaG-T87hJI
---

## objetivo

entender o que a conexão Asaas significa e onde conferir seu estado.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Ter autorização para lidar com a conta Asaas do próprio negócio.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Configurações` e depois em `Cobrança` (`/painel/configuracoes/cobranca`).
2. No quadro `Conta Asaas`, veja se a conta está conectada ou `Não conectada`.
3. Para conectar, siga as instruções da própria tela: entre na sua conta em asaas.com, gere a chave, cole no campo `Chave de API da sua conta Asaas` e clique em `Conectar`. Para conferir uma conta já ligada, use `Testar conexão`.
4. Não mande essa chave para ninguém: nem em conversa, nem em chamado, nem para o assistente.
5. Para ver as faturas e as cobranças, no menu da esquerda, na parte `Comercial`, clique em `Financeiro` (`/painel/financeiro`) e confira cada fatura.

## resultado

A tela de cobrança informa a conexão da conta. O Financeiro apresenta faturas e opções específicas por fatura.

## desvios

conexão não significa, por si só, que uma fatura foi enviada, paga ou confirmada. A via de cobrança pode variar por fatura. Não assumimos que chave conectada equivale a cobrança automática de todos os clientes.

## quando pedir ajuda

peça ajuda humana se não souber qual conta ou chave usar, se a conexão falhar ou se houver dúvida sobre a cobrança de uma fatura específica. A IA só orienta e nunca acessa ou altera credenciais, cobrança ou permissões.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/cobranca/page.tsx:9-16,40-45,47-64,75-94`
- `portal-cidade/frontend/src/app/painel/financeiro/page.tsx:3-13,61-71`
- `portal-cidade/CLAUDE.md:41-42`
- `portal-cidade/docs/PRODUCT.md:196-205`

## lacunas

não reproduzimos o passo a passo de obtenção da chave: a tela contém dados sensíveis e a orientação deve ser consultada diretamente nela. A conexão não foi validada em ambiente real.

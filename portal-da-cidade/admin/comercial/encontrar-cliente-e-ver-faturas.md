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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - -FASO6flcCw
---

## objetivo

Aqui você encontra um cliente e consulta suas contratações, faturas e conteúdo no portal.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Clientes`. [t=10] [guia=menu:/painel/clientes]
2. Escreva o nome, documento ou telefone em `Buscar por nome, documento ou telefone…`. [t=42] [guia=clientes.busca]
3. Clique na lupa `Buscar`. [guia=clientes.buscar]
4. Clique no nome do cliente para abrir a ficha. [t=99] [guia=clientes.ver-cliente]
5. Clique em `Contratações` para consultar os planos do cliente. [t=106] [guia=clientes.aba-contratacoes]
6. Clique em `Financeiro` para consultar as faturas. [t=122] [guia=clientes.aba-financeiro]
7. Clique em `No portal` para consultar o conteúdo do cliente. [t=136] [guia=clientes.aba-portal]

## resultado

A ficha separa planos, faturas e conteúdo nas três abas.

## desvios

Na aba `Financeiro`, os resumos são `Em aberto`, `Vencido` e `Pago (12 meses)`. `Confirmar pagamento` abre a janela de registro; clicar nele ainda não dá baixa. Para o procedimento completo pela tela geral, veja `marcar-fatura-como-recebida.md`.

O botão de adicionar um plano na ficha é `+ Registrar contratação`. Não confunda o alvo da lista `clientes.ver-cliente` com as abas internas da ficha.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:715`
- `portal-cidade/frontend/src/app/painel/clientes/page.tsx:818`
- `portal-cidade/frontend/src/app/painel/clientes/[id]/page.tsx:738`
- `portal-cidade/frontend/src/app/painel/clientes/[id]/page.tsx:990`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.

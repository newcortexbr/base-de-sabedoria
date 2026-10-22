---
id: pj-filtros-da-empresa
titulo: "filtros da empresa: situação, porte, MEI, telefone e data de abertura"
publico:
  - cliente
modulo: lista
aba: Gerar Lista de Empresas
tipo_problema:
  - situacao-cadastral
  - porte
  - mei
  - telefone-movel
  - whatsapp
  - data-de-abertura
  - dados-pj
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - IKdKLgi-e94
produto: dados-pj
---

## objetivo
refinar a lista pelo tipo de empresa e de contato.

## pré-requisitos
- estar na tela `Gerar Lista de Empresas`.

## explicação
- `Situação`: `Ativa` (padrão), `Baixada`, `Inapta`, `Suspensa`, `Nula`. para vender ao guia, use `Ativa`; pode marcar várias.
- `Porte`: `ME - Microempresa`, `EPP - Empresa de Pequeno Porte`, `DEMAS - Empresa de Médio ou Grande Porte`. vazio = todos.
- `Tipo de empresa`: `Não MEI` (padrão, tira os MEI), `Só MEI` ou `Ambos`.
- `Telefone`:
  - `Móvel`: só empresas com ao menos um celular. use para WhatsApp ou SMS. outros telefones da empresa continuam no arquivo.
  - `Fixo` e `Móveis + Fixos`: na versão atual as duas opções trazem todas as empresas, inclusive sem telefone. `Fixo` não filtra só fixos.
- `Data início atividades`: traz empresas abertas ATÉ a data informada (a confirmação mostra `Início atividade ≤`). não serve para pegar só empresas novas. vazio = qualquer data.
- `Formato do arquivo`: `Excel (.xlsx)` ou `CSV (.csv)`. CSV costuma ser o pedido por ferramentas de disparo.

## passos
1. ajuste os campos desejados.
2. confira tudo na `Confirmação da Pesquisa` antes de exportar.

## resultado
a lista vem só com o perfil de empresa que você quer.

## se der errado
- precisa só de empresas novas ou só de fixos: gere com filtro mais amplo e filtre no Excel pelas colunas `data_inicio_atividades` e `TEL1`–`TEL3` (`pj-colunas-do-arquivo`).

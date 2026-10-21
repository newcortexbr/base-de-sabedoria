---
id: interno-bancada-cache-qwen37-flash
titulo: bancada de cache de prompt qwen/qwen3.7-flash via OpenRouter
status: bloqueado-auth
revisado_em: 2026-10-15
tags: [cache, openrouter, qwen, benchmark, suporte, ia]
---

## objetivo
medir se o cache de prompt de `qwen/qwen3.7-flash` funciona via OpenRouter, com qual provedor, para o assistente de suporte com prefixo grande fixo.

## resultado
bloqueado antes de medir. a primeira chamada (cenário A, implícito) retornou HTTP 401 com a mensagem da API `API key expired`. pelo procedimento, a execução parou em auth. nenhum cenário B ou C foi executado. não há dados de cache, custo por chamada ou provedor.

## o que foi feito
- prefixo montado a partir de `suporte-kb/usuario/` (`buscar-anuncios-classificados.md`, `encontrar-empresa-no-guia.md`, `fazer-pedido-no-delivery.md`) e um system prompt de suporte. nenhum dado pessoal.
- script stdlib em `.qa-suporte/cache-bench/bancada.py` (cenários A, B e C; teto de 20 chamadas e US$ 0,05 via `ledger.json`).
- 1 chamada feita (HTTP 401). ledger: 1 chamada, custo 0.
- resultado bruto em `.qa-suporte/cache-bench/resultado-A.json` (sem chave).

## o que falta
- renovar ou substituir a `OPENROUTER_API_KEY` no ambiente do shell e repetir `python3 bancada.py A`, depois `B` e `C`.
- para B, o nome do provedor `Alibaba` ainda não foi validado; se for rejeitado, consultar `GET https://openrouter.ai/api/v1/models/qwen/qwen3.7-flash/endpoints`.

## perguntas em aberto
- o cache implícito funciona neste modelo via OpenRouter?
- é preciso fixar provedor?
- o `usage` expõe `cached_tokens`?

as três perguntas continuam sem resposta até a chave ser renovada.

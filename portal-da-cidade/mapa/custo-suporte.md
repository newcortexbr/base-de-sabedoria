---
titulo: custo estimado do suporte com IA (10 mensagens/dia, 30 dias)
revisado_em: 2026-10-15
tags: [custo, openrouter, qwen, suporte, ia]
---

## premissas
- modelo `qwen/qwen3.7-flash` via OpenRouter, preço oficial de `GET /api/v1/models` em 2026-10-15, em US$ por milhão de tokens: entrada 0,03; saída 0,13; leitura de cache 0,006 (abaixo de 32 mil tokens de entrada).
- cliente: entrada medida no protótipo de ~3.056 tokens, dos quais 2.816 vieram do cache (print de 2026-10-15).
- admin: base admin medida em ~8.791 tokens (8.576 do cache). como o admin também pode fazer tudo que o cliente faz, o suporte dele lê as duas bases: ~11.600 tokens de entrada, ~11.300 do cache (estimado, não medido).
- saída: 200 tokens por resposta (conservador; o medido ficou entre 28 e 71).
- 10 mensagens/dia × 30 dias = 300 respostas por usuário, todas indo para a IA. respostas pelo atalho de artigo custam zero, então o real tende a ser menor.
- o histórico da conversa não foi somado; cada troca extra adiciona algumas centenas de tokens de entrada.

## custo por resposta
- cliente com cache: US$ 0,000050 (2.816 × 0,006 + 240 × 0,03 + 200 × 0,13, por milhão)
- cliente sem cache: US$ 0,000118
- admin com cache: US$ 0,000103
- admin sem cache: US$ 0,000374

## tabela mensal (300 mensagens)

| tipo de usuário | base lida | com cache | sem cache | 100 usuários com cache |
|---|---|---|---|---|
| cliente | cliente | US$ 0,015 | US$ 0,035 | US$ 1,50 |
| admin | admin + cliente | US$ 0,031 | US$ 0,112 | US$ 3,10 |

## leitura
- o custo é irrisório nos dois perfis. mesmo sem cache, 100 admins custariam ~US$ 11 por mês.
- o cache só vale se o prefixo (instruções + base) ficar idêntico entre chamadas; mudar a ordem dos artigos ou inserir dados por usuário antes da base quebra o cache.
- acima de 32 mil tokens de entrada o preço sobe ~3×; a base do admin precisa ficar abaixo disso se crescer.

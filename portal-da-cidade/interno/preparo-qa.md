# preparo do ambiente QA (2026-10-15)

HEAD portal-cidade: 6884994332a79eb5e5543d5469392feefb8b7034 (confere).

## processos (mantidos rodando)
- backend: PID 26757, `127.0.0.1:8010`, Django 5.2.14, settings `qa_settings` (overlay), SQLite sintético `.qa-suporte/data/qa.sqlite3`, mídia `.qa-suporte/data/media`, log `data/backend.log`
- frontend: PID 27727 (next-server), `127.0.0.1:3010`, `next dev --webpack`, log `data/frontend.log`
- url do navegador: `http://localhost:3010` (portal `grandevix` resolve por domínio `localhost`). Painel: `/painel/login`.

## isolamento
- `qa_settings.py` importa `core.settings.base` (não `dev.py`, que lê `backend/.env.local`). e-mail/push simulados, cache em memória, sem Google/Resend, throttles folgados.
- frontend recebe API/slug/site por variáveis explícitas (API=http://127.0.0.1:8010). `frontend/.env.local` foi carregado pelo Next só para variáveis não definidas; não foi lido.
- chave Django sintética aleatória em `data/.chave` (0600), usada por `env.sh`.
- seed: `seed_dev` com senha aleatória descartada (saída não guardada). Contas sintéticas: admin `qa+admin@qa.test`, master `qa-master@qa.test`. Ninguém sabe a senha: acesso é por token.

## acesso autenticado sem segredo
- `. .qa-suporte/env.sh; cd .qa-suporte; $PY mint_token.py admin|master` imprime access (linha 1) e refresh (linha 2). Capture em variável, não grave.
- frontend do painel lê `localStorage.painel_token` / `painel_refresh`; use `context.addInitScript`. Exemplo funcional: `.qa-suporte/auth-smoke.mjs`.
- público (cliente/lojista/jornalista etc.): só existem admin e master; contas de outros públicos precisam ser criadas via `portais.contas.criar_conta` num shell com `env.sh` (senha aleatória) e token via `RefreshToken.for_user`.

## smoke
- `/painel/login` 200; `/` 307 → `/painel/login`; API 8010 responde.
- Playwright 1.62.1 + chromium-1234 em `~/.cache/ms-playwright`: `smoke.mjs` abriu a página (200). `auth-smoke.mjs` com token sintético permaneceu em `/painel` (sem redirecionar ao login).

## mudanças/gaps
- `portal-cidade/frontend/node_modules` era de Windows (binários win32; 500 no Tailwind/SWC). Rodei `npm ci` (22 s, só node_modules, ignorado pelo git; package*.json já vinham modificados antes). Scripts de `sharp`/`unrs-resolver` bloqueados (não necessários ao dev).
- `node_modules/.bin/next` sem permissão de execução antes do `npm ci`; subir com `node node_modules/next/dist/bin/next dev --webpack -p 3010 -H 127.0.0.1`.
- venv do repo (`portal-cidade/venv`) é Windows; criei `.qa-suporte/venv` (python 3.14.7, requirements.txt instalados).
- Next baixou o pacote swc para `~/.cache/next-swc` (rede do npm, uma vez).
- primeira compilação de cada rota leva minutos (login ~93 s).
- não executei validação dos 9 artigos nem suíte/build/typecheck.
- parar: `kill 27727 26757`.

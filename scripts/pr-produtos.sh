#!/usr/bin/env bash
# Abre (ou atualiza) um PR com o catálogo de vídeos em cada repo de produto afetado.
# Uso: GH_TOKEN=<PAT com contents+pull-requests nos repos> bash scripts/pr-produtos.sh <produto,produto,...>
# O portal não entra: o deploy dele puxa a base direto. A Área do Cliente usa todos os produtos.
set -euo pipefail
BASE=$(cd "$(dirname "$0")/.." && pwd)
produtos=",$1,"
[ "$produtos" = ",," ] && exit 0
TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
export GIT_AUTHOR_NAME='base-de-sabedoria bot' GIT_AUTHOR_EMAIL='bot@newcortex.com.br'
export GIT_COMMITTER_NAME="$GIT_AUTHOR_NAME" GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL"

pr() { # repo, comando de sync (roda dentro do clone)
  local repo=$1 cmd=$2 dir="$TMP/${1#*/}" branch=auto/videos-suporte
  git clone -q --depth 1 "https://x-access-token:$GH_TOKEN@github.com/$repo.git" "$dir"
  (cd "$dir" && git checkout -q -b "$branch" && eval "$cmd" >/dev/null
   if git diff --quiet; then echo "$repo: catálogo já em dia"; exit 0; fi
   git commit -qam 'chore(suporte): vídeos novos da planilha' && git push -qf origin "$branch"
   gh pr view "$branch" >/dev/null 2>&1 || gh pr create -B main -H "$branch" -t 'chore(suporte): vídeos novos da planilha' \
     -b 'Catálogo de vídeos do suporte atualizado pela base-de-sabedoria (workflow atualizar-videos).'
   echo "$repo: PR aberto/atualizado")
}

pr newcortexbr/area-clientes "SUPORTE_KB_DIR='$BASE' node scripts/sync-videos-suporte.mjs"
[[ $produtos == *,extrator-maps,* ]] && pr newcortexbr/extrator_maps "SUPORTE_KB_DIR='$BASE/extrator-maps' node scripts/sync-videos-suporte.mjs"
[[ $produtos == *,dados-pj,* ]] && pr newcortexbr/dadospj-backend "python3 scripts/sync_videos_suporte.py '$BASE'"
exit 0

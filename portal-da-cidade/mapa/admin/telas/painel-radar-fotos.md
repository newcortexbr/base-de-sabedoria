# /painel/radar/fotos (Radar de Preços — Fotos enviadas)

Arquivo: `app/painel/radar/fotos/page.tsx` (421 linhas)

## o que você vê
Fotos de produtos, encartes e preços de combustível enviados por moradores. Frase: "Aprovou, a IA lê a foto e atualiza os preços. Recusou, nada é lido." No alto: `Aguardando você`, `Preços retidos`, `Preços no site` e o gráfico "Envios na semana". Abas `Aguardando (N)`, `Lidos` e `Recusados`. Cada envio mostra a foto (clique amplia), o tipo (`Foto de produto`, `Encarte` ou `Só preço (posto)`), o estabelecimento (com a marca "estabelecimento novo" se for pendente), outras fotos, o preço informado e quem enviou (nome, WhatsApp, data). Em Aguardando: `Aprovar e ler` (ou `Aprovar foto e estabelecimento`, `Aprovar preços`, `Aprovar preços e posto`), `Corrigir` e `Recusar`; setas para girar a foto. O menu lateral mostra a quantidade aguardando como número ao lado do item.

## rota e gate
- `/painel/radar/fotos`. client, `Header` "Radar de Preços — …". só administrador; módulo `radar` (`lib/painel-menu.ts:78-82,120`).

## como chegar
- menu lateral, parte Conteúdo: grupo `Radar de Preços` > `Fotos enviadas` (`Sidebar.tsx:140-149`).

## o que faz
- fila de aprovação das fotos antes de a IA ler os preços e publicá-los no site.

## ações e campos
- `Aprovar…`: libera a leitura; aparece "A IA está lendo a foto…" e, ao terminar, "Leitura concluída: …". "Foto aprovada".
- `Corrigir` abre "Corrigir envio": `Estabelecimento *` (lista com busca; escolher o certo descarta o duplicado) e `Preço informado` (opcional). `Salvar` / `Cancelar`.
- `Recusar`: "Recusar esta foto?" — nada é lido, o morador não é avisado, sem desfazer.
- leitura falhou: "A leitura falhou: …" com `Tentar de novo` e `Corrigir`.
- girar foto à esquerda/direita antes de aprovar.

## estados
- "Carregando fotos…"; "Nenhuma foto nesta aba."; erro com `Tentar de novo`; "Não foi possível concluir"; sucessos "Foto aprovada", "Foto recusada", "Correção salva". Envios em leitura são reconsultados a cada 3 s com a aba visível.

## possíveis problemas
- foto aprovada com preço muito diferente do atual não publica direto: vai para `Preços retidos`.
- não existe desfazer recusa.

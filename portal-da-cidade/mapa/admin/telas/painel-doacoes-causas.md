# /painel/doacoes/causas (Doações — Causas)

Arquivo: `app/painel/doacoes/causas/page.tsx` (226 linhas)

## o que você vê
Lista das causas que organizam as instituições (ex.: animais, saúde). Título "Causas" com a frase "As causas organizam as instituições e viram os filtros da página pública de Doações." No alto, três números: `Causas`, `Causas em uso` e `Instituições`. Botão `Nova causa` e campo "Buscar causa pelo nome..." com botão `Buscar`. Cada causa aparece em um cartão com ícone, nome, a quantidade ("1 instituição" / "N instituições") e dois ícones: lápis (`Editar`) e lixeira (`Excluir`). Sem causas: "Nenhuma causa cadastrada." e "Use "Nova causa" para criar a primeira."

## rota e gate
- `/painel/doacoes/causas`. client, `Header` "Causas". só administrador; módulo `doacoes` (`lib/painel-menu.ts:88`).

## como chegar
- menu lateral, parte Conteúdo: grupo `Doações` > `Causas`.

## o que faz
- cria, renomeia e exclui causas. A instituição precisa de uma causa para ser salva; a causa vira filtro no site.

## ações e campos
- `Nova causa` / `Editar` abrem janela "Nova causa" / "Editar causa": campo `Nome da causa *` (até 80 letras, contador N/80), botões `Cancelar` e `Criar causa` (ao editar, `Salvar`). Nome vazio: "Informe o nome da causa."
- `Excluir`: aviso "Excluir causa" com a pergunta de confirmação.
- o ícone da causa é escolhido pelo sistema a partir do nome; não há seletor.

## estados
- "Carregando..."; erros "Não foi possível carregar" / "Não foi possível excluir"; sucessos "Causa criada", "Causa salva", "Causa excluída". Os números do topo só aparecem sem erro.

## possíveis problemas
- excluir causa que tem instituições: o servidor pode recusar e a mensagem sai no aviso "Não foi possível excluir" (não li a regra do backend).
- renomear causa atualiza o site na hora (a tela invalida o cache público).

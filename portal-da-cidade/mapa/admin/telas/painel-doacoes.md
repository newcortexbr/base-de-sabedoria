# /painel/doacoes (Doações — Instituições)

Arquivo: `app/painel/doacoes/page.tsx` (147 linhas)

## o que você vê
Lista das instituições de doação do portal (ONGs, abrigos, projetos). Título "Instituições", no topo da página "Doações". Cada linha mostra a foto de capa, o nome, o resumo (ou a frase de destaque), a causa e a cidade. À direita de cada linha, três ícones: lápis (`Editar`), seta para fora (`Ver no site`, abre /doacoes/<instituição> em outra aba) e lixeira (`Excluir`). Acima da lista: campo "Buscar instituição..." com botão `Buscar` e o botão `+ Nova instituição`. Embaixo, o aviso "Salvou, está no site. Para tirar do ar, exclua." Lista vazia mostra "Nenhuma instituição cadastrada ainda." ou, após busca, "Nenhuma instituição encontrada para essa busca."

## rota e gate
- `/painel/doacoes`. client, `Header` "Doações". só administrador. módulo `doacoes`: com ele desligado o item some do menu e a rota é bloqueada (`lib/painel-menu.ts:87,122`).

## como chegar
- menu lateral, parte Conteúdo: grupo `Doações` > `Instituições` (`Sidebar.tsx:234-239`).

## o que faz
- lista, busca por nome e exclui instituições. Não há aprovação: o que é salvo vai direto para o site público.

## ações e campos
- `Buscar`: filtra pelo nome (envia ao apertar o botão ou Enter).
- `+ Nova instituição` leva a `/painel/doacoes/nova`.
- lápis leva a `/painel/doacoes/<id>` (editor).
- `Ver no site` abre a página pública.
- `Excluir` abre o aviso "Excluir instituição": "Ela sai do site na hora e as fotos enviadas são apagadas." Botões `Excluir` e cancelar.

## estados
- "Carregando..."; erro "Não foi possível carregar" (aviso vermelho); erro "Não foi possível excluir" em aviso próprio; sucesso "Instituição excluída". A lista recarrega ao voltar para a aba.

## possíveis problemas
- excluir é definitivo e apaga as fotos; para só esconder não há opção (não existe rascunho).
- sumiu do menu: módulo Doações desligado em Configurações > Módulos do Portal.
- a lista mostra tudo de uma vez (sem paginação nesta tela).

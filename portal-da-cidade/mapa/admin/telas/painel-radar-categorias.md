# /painel/radar/categorias (Radar de Preços — Categorias)

Arquivo: `app/painel/radar/categorias/page.tsx` (160 linhas)

## o que você vê
Tabela com as categorias fixas do Radar: Supermercados, Farmácias e Postos de combustível. Aviso: em Postos de combustível os produtos são só Gasolina, Etanol e Diesel; dá para mudar nome, ícone, ordem ou desligar. Colunas `Categoria` (ícone e nome), `Ordem`, `Produtos`, `Situação` (Ativa/Inativa) e `Ações` com o lápis (`Editar`). Não há botão para criar nem excluir.

## rota e gate
- `/painel/radar/categorias`. client, `Header` "Radar de Preços — …". só administrador; módulo `radar` (`lib/painel-menu.ts:78-82,120`).

## como chegar
- menu lateral, parte Conteúdo: grupo `Radar de Preços` > `Categorias` (`Sidebar.tsx:140-149`).

## o que faz
- ajusta a aparência e a ordem das categorias no site e liga/desliga cada uma.

## ações e campos
- janela "Editar categoria": `Nome *`, `Ícone` (seletor), `Ordem` (número inteiro), caixa `Ativa`; `Salvar` / `Cancelar`. Mensagens: "Informe o nome da categoria.", "A ordem é um número inteiro.". "Categoria salva".

## estados
- "Carregando categorias…"; erro com `Tentar de novo`; "Não foi possível salvar".

## possíveis problemas
- desligar uma categoria tira ela do Radar público; os preços não são apagados.

# /painel/radar/mercados (Radar de Preços — Estabelecimentos)

Arquivo: `app/painel/radar/mercados/page.tsx` (333 linhas)

## o que você vê
Lista dos estabelecimentos do Radar (supermercados, farmácias, postos). Subtítulo "N ativos · N pendentes". Botão `Cadastrar estabelecimento`, campo "Buscar estabelecimento pelo nome ou endereço", abas `Todos`, `Precisa aprovar`, `Ativos`, `Desativados` (com contagem) e botões por categoria. Cada linha traz nome, endereço · bairro, categoria e, se novo, "Pendente de aprovação". Botões: `Aprovar` e `Juntar com…` (pendentes), ativar/desativar, lápis (`Editar`) e lixeira (`Excluir`).

## rota e gate
- `/painel/radar/mercados`. client, `Header` "Radar de Preços — …". só administrador; módulo `radar` (`lib/painel-menu.ts:78-82,120`).

## como chegar
- menu lateral, parte Conteúdo: grupo `Radar de Preços` > `Estabelecimentos` (`Sidebar.tsx:140-149`).

## o que faz
- aprova locais cadastrados pelos moradores, junta duplicados, e cadastra ou edita estabelecimentos.

## ações e campos
- formulário "Cadastrar estabelecimento" / "Editar estabelecimento": `Categoria *`, `Nome *`, `Endereço`, `Cidade`, `Bairro` (cidades e bairros da cobertura do portal). `Salvar` / `Cancelar`.
- `Juntar com…`: "Os preços passam para o estabelecimento escolhido e este cadastro é apagado." Botão `Juntar`.
- `Excluir`: "Excluir este estabelecimento?" — os preços dele também são apagados.
- sucessos: "Estabelecimento aprovado", "Estabelecimentos juntados", "Estabelecimento excluído", "Estabelecimento salvo/criado".

## estados
- "Carregando estabelecimentos…"; "Nenhum estabelecimento cadastrado."; "Nenhum estabelecimento com esse filtro."; erro com `Tentar de novo`.

## possíveis problemas
- estabelecimento pendente ligado a fotos: aprovar a foto em `Fotos enviadas` ("Aprovar foto e estabelecimento") também resolve.
- juntar e excluir são definitivos.
- não conferi o texto exato do botão de ativar/desativar.

# /painel/turismo/eventos/organizadores/[id]/editar (`.../[id]/editar/page.tsx`)
- gate: módulo `eventos` (prefixo `/painel/turismo/eventos`, avaliado antes de `turismo` na lista de prefixos); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). Produto separado do Turismo, embora more no mesmo caminho.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: edita o organizador (Nome, Descrição, Logo, Cor) e o acesso (`AcessoDoProprietario`: criar, redefinir senha, remover; :159-161).
- APIs: `organizadoresEvento.detalhe` (:47), `atualizar` (:71), `criarAcesso|redefinirSenhaAcesso|removerAcesso`.
- estados: erro `formatApiError` (:76); voltar à lista (:74,175).
- problemas: nenhum confirmado.
- admin vs cliente: admin redefine a senha do organizador.

## o que você vê
Tela para mudar um organizador de eventos.
- chega-se por `Editar` na linha do organizador.
- Nome *, Descrição, Logo (deixe em branco para manter) e Cor do logo: como o organizador aparece no site.
- "Painel do proprietário": se há acesso, mostra "Acesso ativo" com `Redefinir senha` (campo "Nova senha"; a nova senha vai por e-mail) e `Remover acesso`; se não há, `Criar acesso`.
- `Salvar Alterações` grava; `Cancelar` volta.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-turismo-eventos-organizadores-id-editar.png](../prints/painel-turismo-eventos-organizadores-id-editar.png) · dados brutos: [json](../prints/json/painel-turismo-eventos-organizadores-id-editar.json)
- aberta em `/painel/turismo/eventos/organizadores/1/editar` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "28 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Pontos Turísticos · Novo Ponto · Categorias · Roteiros · Eventos …" — menu lateral, no topo da página, à esquerda (lista de 28 itens em coluna) (10,18,255,985)
- [título] "Eventos — Editar Organizador" — topo, no topo da página, ao centro (300,19,260,28)
- [link] "Eventos0" — menu, na parte de cima, ao centro (471,104,115,44)
- [link] "Categorias8" — menu, na parte de cima, ao centro (588,104,132,44)
- [link] "Organizadores2" — menu, na parte de cima, ao centro (722,104,158,44)
- [selo] "0" — menu, na parte de cima, ao centro (547,116,22,20)
- [selo] "8" — menu, na parte de cima, ao centro (682,116,22,20)
- [selo] "2" — menu, na parte de cima, ao centro (842,116,22,20)
- [título] "Editar Organizador" — conteúdo, na parte de cima, ao centro (466,173,624,32)
- [campo] "QA Loja Sintetica" — conteúdo, na parte de cima, ao centro, logo abaixo de “Editar Organizador” (490,277,576,38)
- [envio de arquivo] "" — conteúdo, no meio da tela, ao centro (490,480,576,32)
- [título] "Acesso do proprietário" — conteúdo, no meio da tela, ao centro (490,660,576,20)
- [título] "Painel do proprietário" — conteúdo, no meio da tela, ao centro (507,709,542,20)
- [botão] "Copiar" — conteúdo, no meio da tela, à direita, logo abaixo de “Painel do proprietário” (969,802,80,44)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [botão] "Redefinir senha" — conteúdo, mais abaixo (rolando a página), ao centro (507,947,139,44)
- [botão] "Remover acesso" — conteúdo, mais abaixo (rolando a página), ao centro (654,947,145,44)
- [botão] "Cancelar" — conteúdo, no fim da página, ao centro, logo abaixo de “Redefinir senha” (466,1056,307,42)
- [botão] "Salvar Alterações" — conteúdo, no fim da página, à direita, logo abaixo de “Remover acesso” (785,1056,305,42)

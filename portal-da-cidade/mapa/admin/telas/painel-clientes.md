# /painel/clientes (Meus Clientes)

Arquivos: `app/painel/clientes/page.tsx` (1001 linhas), `exportar.ts`

## o que você vê
Carteira de clientes que compram planos do portal: quem é cliente, o que contratou e quando vence.
- faixa amarela de contratações aguardando confirmação de pagamento: clientes que contrataram e ainda não pagaram; o link abre a ficha.
- cartões de contagem: mostram quantos clientes há em cada situação; clicar filtra a lista. Receita mensal recorrente: quanto entra por mês com os planos.
- Buscar clientes e Filtrar por status: acham por nome, documento ou telefone e por situação (Com plano, Em dia, Vence em 7 dias, Vence em 30 dias, Atrasado, Sem plano, Aguardando pagamento).
- colunas Cliente, WhatsApp, Planos, Contratado, Vencimento e Receita: quem é, contato, quantos planos tem, onde aparece, quando vence e quanto paga.
- novo cliente / Editar cliente: cadastra nome, Pessoa física ou Pessoa jurídica, CPF/CNPJ, telefone, WhatsApp, e-mail e observações.
- Nova senha: troca a senha de acesso do cliente.
- bloquear / desbloquear: suspende o acesso sem apagar o cadastro. excluir apaga o cadastro e não pode ser desfeito.
- exportar: baixa a lista em Excel, CSV ou PDF, ou todos os cadastros.
- clicar no nome abre a ficha do cliente.

## rota e gate
- `/painel/clientes`. client. gate `PainelGuard` (`app/painel/layout.tsx:38-96`): exige login; papel `admin` passa em tudo, `master` também, `sem_portal` só nas rotas de `SEM_PORTAL_ALLOWED` (`lib/painel-permissoes.ts:40`). sem gate de módulo (a rota não está em `MODULO_POR_PREFIXO_DE_ROTA`, `lib/painel-menu.ts`). menu: "Meus Clientes", seção Comercial (`components/painel/Sidebar.tsx:220`).

## o que faz
- carteira de clientes do dono do portal (vende plano por WhatsApp, sem checkout). lista quem é cliente, o que contratou e quando vence (`:3-12`). o semáforo de vencimento usa `dias_para_vencer` vindo do servidor (`corVencimento`, `:78`).

## o que exibe
- faixa âmbar "contratações aguardando confirmação de pagamento" com link por cliente para a ficha (`:685-705`, `data-testid=faixa-pendentes`); selo "Aguardando pagamento" na linha.
- cartões-contadores clicáveis (filtram por status) e linha com "clientes no total" e "Receita mensal recorrente" (`:708-755`).
- busca (nome, documento, telefone) e select de status: Todos, Com plano, Em dia, Vence em 7 dias, Vence em 30 dias, Atrasado, Sem plano, Aguardando pagamento (`FILTROS`, `:53-61`). busca e filtro sincronizam com a URL (`sincronizarUrl`, `:526`).
- tabela: Cliente (nome/fantasia), WhatsApp (link wa.me), Planos (contagem), Contratado (seções), Vencimento, Receita, Ações.

## ações e campos
- novo cliente / editar (`ModalCliente`, `:99`): nome*, nome fantasia, tipo (pf/pj), documento (CPF/CNPJ validado, `:124`), telefone, WhatsApp (validação `portais/telefone`), e-mail (obrigatório só quando a conta Asaas está cobrando, `:243-255`), observações.
- resetar senha do cliente (`ModalResetSenha`, `:291`): nova senha, mínimo 6 caracteres (`:300`).
- bloquear/desbloquear (`alternarBloqueio`, `:454`): PATCH `ativo`, com `confirm()` nativo. "o cadastro continua existindo, mas o acesso fica suspenso".
- excluir (`excluirCliente`, `:469`): `confirm()` nativo, "não pode ser desfeita".
- exportar (um botão com menu): Excel, CSV, PDF da lista como está na tela (`exportar`, `:491`), e "todos os cadastros" sem filtro (`exportarTodos`, `:512`, uso: marketing externo).
- nome do cliente leva à ficha `/painel/clientes/[id]`.

## apis (`lib/admin-api.ts`)
- `comercial.resumo` (contadores e receita)
- `comercial.contratacoes.listar({status:'pendente'})` (`:1123`)
- `comercial.clientes.listar` (`:1108`), `.criar` POST (`:1115`), `.atualizar` PATCH (`:1117`), `.excluir` DELETE (`:1119`), `.resetarSenha` POST `/comercial/clientes/<id>/reset-senha/` (`:1120`)
- `comercial.asaas.obter` (só para decidir se e-mail é obrigatório)

## estados
- carregando; erro da lista `erro-clientes`; erro de ação por linha `erro-acao-linha`; erro de cargas extras (resumo/pendências) `erro-carga-extra`; erros dos modais ficam dentro do modal (`erro-form-cliente`, `erro-reset-senha`).
- vazio: "Nenhum cliente encontrado. Tente ajustar os filtros ou buscar por outro termo." (`:848`). não distingue "sem clientes ainda" de "filtro sem resultado".
- erro de exportação: "Não foi possível gerar o arquivo…".

## em nome do cliente (o que o admin faz nesta lista)
- criar e editar cadastro; bloquear/desbloquear; excluir; trocar a senha do cliente; abrir a ficha (onde ficam planos e faturas, ver `painel-clientes-id.md`).

## possíveis problemas
- fato: `asaas.obter()` falha em silêncio (`.catch(() => {})`, `:538`). o e-mail deixa de ser obrigatório sem aviso e o cliente pode ficar sem link de pagamento do Asaas.
- fato: ao salvar o modal só recarrega lista e resumo (`:974`), não `loadPendentes`; faixa de pendentes pode ficar defasada até recarregar (efeito pequeno, hipótese de impacto).
- fato: bloquear/excluir usam `confirm()` nativo; funciona, mas é diferente do resto do painel (hipótese: pode ser bloqueado por alguns navegadores embutidos).
- fato: a exclusão do cliente não mostra o que será apagado (planos/faturas ativas); o efeito depende do backend (hipótese, não verifiquei).
- fato: exportação "todos" traz dados de contato de todos os cadastros; sem registro/aviso de LGPD na tela (observação de privacidade).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-clientes.png](../prints/painel-clientes.png) · dados brutos: [json](../prints/json/painel-clientes.json)
- aberta em `/painel/clientes`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Meus Clientes" — topo, no topo da página, à esquerda (300,19,121,28)
- [título] "Meus Clientes" — conteúdo, na parte de cima, ao centro (300,99,564,32)
- [botão] "Exportar" — conteúdo, na parte de cima, à direita (990,108,121,38)
- [botão] "Novo cliente" — conteúdo, na parte de cima, à direita (1119,109,137,36)
- [botão] "0Vencidos (e outros 3 parecidos)" — conteúdo, na parte de cima, à esquerda, logo abaixo de “Meus Clientes” (repetido ×4, um sob o outro) (300,179,230,82)
- [campo] "Buscar clientes" — conteúdo, no meio da tela, ao centro (317,386,641,38)
- [botão] "Buscar" — conteúdo, no meio da tela, à direita (958,386,40,38)
- [lista de opções] "Filtrar por status" — conteúdo, no meio da tela, à direita (1010,388,229,36)
- [coluna] "Cliente" — conteúdo, no meio da tela, à esquerda (301,486,178,33)
- [coluna] "WhatsApp" — conteúdo, no meio da tela, ao centro (479,486,117,33)
- [coluna] "Planos" — conteúdo, no meio da tela, ao centro (596,486,96,33)
- [coluna] "Contratado" — conteúdo, no meio da tela, ao centro (692,486,136,33)
- [coluna] "Vencimento" — conteúdo, no meio da tela, à direita (828,486,132,33)
- [coluna] "Receita" — conteúdo, no meio da tela, à direita (959,486,108,33)
- [coluna] "Ações" — conteúdo, no meio da tela, à direita (1067,486,188,33)
- [botão] "Resetar senha (e outros 3 parecidos)" — conteúdo, no meio da tela, à direita, logo abaixo de “Ações” (repetido ×4, um sob o outro) (1111,531,28,28)
- [link] "QA Loja Sintetica" — conteúdo, no meio da tela, à esquerda (321,535,115,20)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)

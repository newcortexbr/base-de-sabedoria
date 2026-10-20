# /painel/utilidade/telefones (A Voz do Povo — Telefones Úteis)

Arquivo: `app/painel/utilidade/telefones/page.tsx`

## o que você vê
Lista de telefones úteis (polícia, hospital, prefeitura etc.) mostrados na seção de utilidades do site.
- Exibir no site: liga ou desliga a seção de telefones inteira no site.
- Órgão/serviço *: nome do lugar ou serviço.
- Telefone e Número curto de emergência (ex.: 190): preencha ao menos um dos dois.
- Endereço e Horário de atendimento (ex.: 24 horas, ou 08h às 18h).
- clique no status para ativar ou desativar; lápis edita; lixeira apaga, com confirmação.
- contador de registros: quantos telefones estão na lista.
- mudanças podem levar alguns minutos para aparecer no site.

## rota e gate
- `/painel/utilidade/telefones`. client. gate `PainelGuard` + módulo `utilidade` (`lib/painel-menu.ts:73,105`); desligado mostra "Módulo desativado".

## o que faz
- cadastro dos telefones úteis do portal (órgão/serviço, número de emergência).

## ações e campos
- botão "Cadastrar telefone" abre modal: Órgão/serviço (obrigatório), Telefone (máscara), Número curto de emergência (máx. 5, sem máscara), Endereço, Horário de atendimento. pelo menos telefone ou número curto é exigido pelo servidor (comentário `:19-23`).
- por linha: editar, ativar/desativar (PATCH `ativo`, trava por ref contra duplo clique), excluir (`ModalAvisoConfirmacao`).
- bloco `ExibirNoSite secao="telefones"`: interruptor "Exibir no site" (config da seção).
- contador "N registros".

## apis
- `adminApi.utilidade.telefones.listar/criar/atualizar/excluir` (`lib/admin-api.ts:1305-1315`); `utilidade.config.obter/atualizar` (`:1300`) via `ExibirNoSite`; `revalidarVozDoPovo` só no interruptor.

## estados
- carregando; erro "Erro ao carregar telefones úteis: …"; vazio "Nenhum telefone útil cadastrado."; erro por campo no modal; outros erros em modal de aviso.

## possíveis problemas
- fato: `listar()` não passa `page` e a tela só guarda `res.results` (`:52-53`); o endpoint é paginado (`PaginatedAdmin`), então telefones além da primeira página não aparecem e o contador mostra só a página 1. tamanho da página é do backend (não verifiquei).
- fato: criar/editar/excluir/ativar não chama Server Action de revalidação; a página pública tem `revalidate = 300`, então a mudança leva até 5 min (comentário `:28-31`). só o interruptor "Exibir no site" revalida.
- fato: a validação de telefone usa `{ comercial: true }` (`:92`), aceitando fixo/comercial; número curto é campo separado.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-utilidade-telefones.png](../prints/painel-utilidade-telefones.png) · dados brutos: [json](../prints/json/painel-utilidade-telefones.json)
- aberta em `/painel/utilidade/telefones`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "26 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Denúncias · Telefones Úteis …" — menu lateral, no topo da página, à esquerda (lista de 26 itens em coluna) (10,18,255,921)
- [título] "A Voz do Povo — Telefones Úteis" — topo, no topo da página, ao centro (300,19,284,28)
- [botão] "Exibir Telefones Úteis no site" — conteúdo, na parte de cima, à direita (1200,115,40,20)
- [botão] "Cadastrar telefone" — conteúdo, na parte de cima, à esquerda (300,175,177,36)
- [coluna] "Órgão/serviço" — conteúdo, na parte de cima, à esquerda (300,227,227,41)
- [coluna] "Telefone" — conteúdo, na parte de cima, ao centro (527,227,161,41)
- [coluna] "Endereço" — conteúdo, na parte de cima, ao centro (687,227,167,41)
- [coluna] "Horário" — conteúdo, na parte de cima, à direita (854,227,148,41)
- [coluna] "Status" — conteúdo, na parte de cima, à direita (1002,227,130,41)
- [coluna] "Ações" — conteúdo, na parte de cima, à direita (1132,227,124,41)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)

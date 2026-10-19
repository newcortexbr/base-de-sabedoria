# /painel/notificacoes

Arquivo: `app/painel/notificacoes/page.tsx`

## rota e gate
- `/painel/notificacoes`. client. gate `PainelGuard`; sem gate de módulo (rota ausente de `lib/painel-menu.ts`).

## o que faz
- envio de notificações push do portal a quem se inscreveu, com histórico e liga/desliga do convite no site.

## campos e ações
- resumo: inscritos, enviadas no mês, taxa média de abertura.
- caixa "Convidar visitantes a receber notificações" (`push_convite_ativo`): salva na hora, reverte se falhar, revalida o layout (`:126-141`).
- formulário "Nova notificação": Título (máx. 50), Mensagem (máx. 120), Link (https obrigatório, máx. 500), Quando: agora ou agendar (Data + Hora). botão "Enviar para N" ou "Agendar para N".
- `window.confirm` antes de enviar ("Depois de enviada, a notificação não volta", `:176-178`). chave de idempotência `crypto.randomUUID()` por envio (`:81`).
- histórico: tabela com status (Agendada, Enviando…, Enviada, Cancelada, Falhou), entregues, abriram; botão cancelar com `window.confirm` (`:205`).
- recarrega a cada 10 s enquanto houver item `na_fila` ou `enviando` (`:116-120`).

## apis
- `adminApi.push.resumo` (`lib/admin-api.ts:760`), `push.notificacoes.listar/criar/cancelar` (`:761-770`), `guia.config.get/atualizar`.

## estados
- carregando; erro de carga `role=alert`; vazio "Nenhuma notificação enviada ainda."; aviso amarelo "O envio de notificações ainda não está disponível neste ambiente" quando `envio_configurado` é falso, com botão desativado (`:337-341`); modal "Notificação enviada/agendada" ao concluir.

## possíveis problemas
- fato: agendamento usa `new Date(`${data}T${hora}`)` (`:166`), que interpreta no fuso do navegador, não em America/Sao_Paulo; a convenção do projeto manda usar `lib/data-local.ts` para data sem hora. admin fora do fuso de Brasília agenda no horário errado (hipótese quanto ao efeito).
- fato: o texto do histórico mostra "Falhou" sem motivo nem botão de reenviar (`ROTULO_STATUS`, `:11-18`).
- fato: erro numa recarga automática (a cada 10 s) aparece como erro do histórico (`:104-106`) e o polling continua; pode piscar o mesmo erro.
- fato: `enviar` envia ao número de inscritos do último resumo (`:174`); se o número mudou, o texto do confirm está defasado (menor).
- fato: título/mensagem/link não passam por moderação nem prévia além do texto "Aparece exatamente assim no celular", sem prévia visual real (não encontrei componente de prévia).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-notificacoes.png](../prints/painel-notificacoes.png) · dados brutos: [json](../prints/json/painel-notificacoes.json)
- aberta em `/painel/notificacoes`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Notificações" — conteúdo, no topo da página, ao centro (402,36,751,36)
- [título] "Notificações" — conteúdo, na parte de cima, ao centro (427,152,701,26)
- [checkbox] "Convidar visitantes a receber notificaçõesDesligado, ninguém novo é co" — conteúdo, na parte de cima, ao centro (442,342,20,20)
- [título] "Histórico" — conteúdo, no meio da tela, ao centro (427,455,701,26)
- [título] "Nova notificação" — conteúdo, no meio da tela, ao centro (427,613,701,26)
- [aviso] "O envio de notificações ainda não está disponível neste ambiente. Você" — conteúdo, no meio da tela, ao centro (427,681,701,44)
- [campo] "Título" — conteúdo, no meio da tela, ao centro, logo abaixo de “O envio de notificações ainda não e” (427,767,701,44)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [campo de texto longo] "Mensagem" — conteúdo, no meio da tela, ao centro, logo abaixo de “Título” (427,876,701,85)
- [campo] "Link" — conteúdo, mais abaixo (rolando a página), ao centro (427,1061,701,44)
- [radio] "Agora" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Link” (444,1162,13,13)
- [radio] "Agendar" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Link” (546,1162,13,13)
- [botão] "Enviar para 0" — conteúdo, no fim da página, ao centro (427,1282,132,44)

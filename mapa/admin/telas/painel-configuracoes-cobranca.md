# /painel/configuracoes/cobranca (Cobrança pelo Asaas)

Arquivos: `app/painel/configuracoes/cobranca/page.tsx` (474 linhas), `CartaoPix.tsx`, `ModaisAutenticador.tsx`, `erro-do-servidor.ts`, `lib/asaas-cobrando.ts`

## rota e gate
- `/painel/configuracoes/cobranca`. client. gate `PainelGuard` (admin/master); sem gate de módulo. menu: "Cobrança" (`components/painel/Sidebar.tsx:254`).

## o que faz
- conecta a conta Asaas do dono do portal para gerar cobrança automática dos clientes (link com Pix, boleto ou cartão, confirmação automática). sem Asaas ou com a cobrança desligada, o cliente vê a chave Pix e o dono confirma na mão no Financeiro (`:199-203`, `:290`).
- decisões do dono fixas no cabeçalho (`:7-15`): conectar já liga a cobrança; sem escolha de ambiente (servidor detecta pela chave); trocar a chave é clicar no campo, sem "Desconectar".

## campos e ações
- chave de API (campo `password`, `$aact_…`). quando conectada, mostra `chave_mascarada` (vinda do servidor) com "clique para trocar"; a chave antiga só é trocada se a nova funcionar (`:256-259`).
- Conectar (`conectar`, `:111`): POST com a chave; sucesso "Conectado com sucesso."
- Interruptor "Cobrar pelo Asaas" (`alternarCobranca`, `:129`, `role=switch`): liga/desliga sem apagar a chave; erro em `erroInterruptor`.
- Testar conexão (`testar`, `:148`): mostra `mensagem` do servidor, `ok` ou falha.
- selo: "Não conectada", "✓ Conectada", "Desligada" (`:211`). data "Conectada em …".
- aviso `aviso-cobrancas-abertas` (cobranças já abertas no Asaas ao desligar), com link "Ver quais" para `/painel/financeiro`.
- aviso `aviso-webhook-pendente`: conta ligada sem aviso automático de pagamento (texto vem do servidor, `conta.webhook_pendente`).
- `CartaoPix` (abaixo): WhatsApp para comprovante e configuração Pix; fica "em uso" quando não há Asaas cobrando (`emUso={!(conectada && cobrancaLigada)}`, `:167`). `ModaisAutenticador` serve ao fluxo do autenticador do Pix.

## apis (`lib/admin-api.ts`)
- `comercial.asaas.obter` (`:1200`), `.conectar` (POST, `:1201`), `.testar` (POST `/testar/`, `:1206`), `.definirCobranca` (POST `/cobranca/`, `:1208`)
- `guia.config.pix.get` (`:1688`), `.atualizar` (PATCH, `:1689`), `.iniciarAutenticador` (`:1694`, via `CartaoPix`/modais)

## estados
- carregando; falha de `asaas.obter`: cartão com erro e "Tentar de novo" (`:171-186`).
- falha só do Pix: `erroPix` com `role=alert`, sem derrubar o cartão Asaas (`:168-170`).
- erros de conectar/testar: `extrairErroReal` (`erro-do-servidor.ts`), em vermelho no próprio cartão.
- não há estado "vazio" próprio: o equivalente é "Não conectada" com campo vazio.

## em nome do cliente
- esta tela não age em nome do cliente. ela define como o cliente paga: Asaas (link) ou Pix manual. o efeito aparece em `/painel/clientes` (e-mail obrigatório) e na ficha (aviso de mínimo de R$ 5,00).

## possíveis problemas
- fato: `cobrancaLigada = conta?.cobranca_ativa !== false` (`:187`): se o servidor não mandar o campo, a tela assume "ligada" (hipótese de risco: mostra "✓ Conectada" mesmo sem saber).
- fato: `conectada_em` formatado com `new Date(iso).toLocaleDateString` (`:18-22`); a regra do projeto é usar `lib/data-local.ts` apenas para data sem hora; aqui é data/hora ISO, então tende a estar ok, mas o fuso do navegador pode deslocar o dia (hipótese).
- fato: o texto do cabeçalho diz "o lojista recebe um link"; no resto do painel o termo é "cliente" (inconsistência de linguagem para o público leigo).
- fato: carregar o Pix depende de o Asaas carregar antes (`:85`, aninhado); se `asaas.obter` falha, o cartão Pix não aparece e o dono não consegue configurar a alternativa.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-configuracoes-cobranca.png](../prints/painel-configuracoes-cobranca.png) · dados brutos: [json](../prints/json/painel-configuracoes-cobranca.json)
- aberta em `/painel/configuracoes/cobranca`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,949)
- [título] "Cobrança pelo Asaas" — conteúdo, no topo da página, ao centro (482,36,592,36)
- [título] "Conta Asaas" — conteúdo, na parte de cima, ao centro (511,223,96,24)
- [campo] "$aact_… (cole aqui)" — conteúdo, na parte de cima, ao centro, logo abaixo de “Conta Asaas” (511,279,534,44)
- [botão] "Conectar" — conteúdo, na parte de cima, ao centro, logo abaixo de “$aact_… (cole aqui)” (511,363,117,44)
- [título] "Recebimento por Pix" — conteúdo, no meio da tela, ao centro (511,683,159,24)
- [botão] "🔒 Nenhuma chave cadastradacadastrar com autenticador" — conteúdo, no meio da tela, ao centro, logo abaixo de “Recebimento por Pix” (511,749,534,44)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [campo] "WhatsApp que recebe os comprovantes" — conteúdo, mais abaixo (rolando a página), ao centro (511,920,377,44)
- [botão] "Salvar WhatsApp" — conteúdo, mais abaixo (rolando a página), à direita (898,920,147,44)

## o que você vê
Aqui você escolhe como os clientes pagam: por link do Asaas (confirmação automática) ou pela sua chave Pix (você confirma na mão).
- Conta Asaas: selo "Não conectada", "✓ Conectada" ou "Desligada", e a data em que foi conectada.
- Chave de API da sua conta Asaas: cole a chave copiada do Asaas e clique em Conectar. depois, ela aparece escondida; "clique para trocar" deixa colar outra. a antiga só é trocada se a nova funcionar.
- Cobrar pelo Asaas (liga/desliga): ligado, o cliente paga por link (Pix, boleto ou cartão) e a confirmação é automática. desligado, todo pagamento mostra a sua chave Pix e você confirma no Financeiro. desligar não apaga a chave.
- Testar conexão: confere se a chave ainda funciona.
- aviso de cobranças abertas: ao desligar, mostra que ainda há cobranças no Asaas; "Ver quais" leva ao Financeiro.
- aviso "a confirmação automática não": a cobrança sai, mas o portal não fica sabendo sozinho que foi paga.
- Recebimento por Pix: sua chave Pix (cadastrada com o autenticador, por segurança) e as instruções para o cliente. selo "✓ Em uso" quando é a forma de pagamento valendo; "Reserva" quando o Asaas está cobrando.
- WhatsApp que recebe os comprovantes: número para onde o cliente manda o comprovante do Pix. é diferente do WhatsApp de contato do portal. "Salvar WhatsApp" grava.

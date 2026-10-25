# /painel/configuracoes (Configurações Gerais)

Arquivos: `app/painel/configuracoes/page.tsx` (910 linhas), `PixelsCard.tsx`, `layout/actions.ts` (`revalidarLayout`)

## como chegar
- na parte Sistema do menu, abra `Configurações` e clique em `Configurações Gerais`.

## rota e gate
- `/painel/configuracoes`. client. gate `PainelGuard` (admin/master); sem gate de módulo (Configurações não pertencem a módulo, `lib/painel-menu.ts`). menu: "Configurações Gerais" (`components/painel/Sidebar.tsx:247`).

## o que faz
- cartões independentes, cada um com o seu botão de salvar e aviso "Salvo com sucesso" (`avisos.sucesso`, `:99-290`).
- Identidade: nome do portal (`saveNome`, `:99`), logo (`Enviar logo`/`Trocar logo`/`Remover`; remover pede confirmação "Remover a logo do portal?"), favicon (`Enviar favicon`/`Trocar favicon`/`Remover`, idem).
- Cidades do Portal (`:511`): só lista. campo e botão "Adicionar" ficam desabilitados de propósito; texto manda falar com o time comercial, com link wa.me (`NUMERO_SUPORTE_PLATAFORMA`). remover cidade também é pela plataforma.
- Redes sociais (`saveSocial`, `:157`): WhatsApp (DDD+número, `maxLength 20`, validado por `motivoTelefoneInvalido`), Instagram, Facebook, YouTube, TikTok.
- Fale Conosco (`saveContato`, `:189`): e-mail de contato (`email_resposta`), telefone (validação comercial), título (120), texto (300).
- Aplicativo do portal (`alternarAppAviso`, `:114`): chave liga/desliga `app_aviso_ativo`, salva na hora e reverte se falhar.
- Grupo de WhatsApp (`saveGrupo`, `:132`): chave ativo + link; só aceita `https://chat.whatsapp.com/…` ou `whatsapp.com/channel/…` (regex `:16`).
- `PixelsCard`: pixels de rastreamento por plataforma (buscar/identificar, salvar, remover).

## apis (`lib/admin-api.ts`)
- `guia.config.get` (GET `/config/`, `:1657`) alimenta a tela inteira
- `guia.config.atualizar` (PATCH `/config/`, `:1658`) para nome, redes, contato, app, grupo e `remove_favicon`
- `guia.config.uploadLogo` / `uploadFavicon` (PATCH multipart), `removerLogo` (DELETE `/config/`, `:1670`)
- `guia.config.pixels.get|identificar|salvar|remover` (`:1719`, via `PixelsCard`)
- Server Action `revalidarLayout(token)` invalida `/` e o layout raiz (regra 14: redes, WhatsApp e e-mail aparecem no topo, rodapé e /contato).

## estados
- carregando; falha de carga: mensagem em rosa no lugar dos cartões (`:353`) e as telas de edição não aparecem, o que evita gravar vazio sobre dados reais (`:49-54`).
- erros de cada cartão aparecem como texto de feedback (mensagem do servidor via `formatApiError`); sucesso é o conjunto fechado "Salvo com sucesso", "Logo atualizada", "Favicon atualizado", "Pixel salvo" etc. (`avisos.sucesso`).
- cidades vazias: "Nenhuma cidade cadastrada ainda." (`:526`).

## possíveis problemas
- fato: `saveNome` (`:99-111`), upload/remoção de logo e favicon (`:219-285`) não chamam `revalidarSite()`; só redes, contato, app e grupo chamam (`:122,148,180,210`). a logo e o nome aparecem no topo/rodapé do site público; podem demorar a mudar até o cache expirar (hipótese: depende do cache do layout, não verifiquei no site).
- fato: remover logo usa DELETE em `/config/` (`:1670`), rota que também é de leitura/atualização; o nome do verbo não deixa claro que só apaga a logo (hipótese de risco: um DELETE sem corpo no mesmo endereço pode ser lido como apagar a configuração toda; confirmar no backend).
- fato: o botão "Salvar" do nome ignora nome vazio sem mensagem (`if (!nome.trim()) return`, `:100`).
- fato: o link do wa.me de adicionar cidade depende de `NUMERO_SUPORTE_PLATAFORMA` fixo no código.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-configuracoes.png](../prints/painel-configuracoes.png) · dados brutos: [json](../prints/json/painel-configuracoes.json)
- aberta em `/painel/configuracoes`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,949)
- [título] "Configurações Gerais" — conteúdo, no topo da página, ao centro (462,36,632,36)
- [título] "Identidade" — conteúdo, na parte de cima, ao centro (545,160,137,26)
- [campo] "Ex: Portal Grande Vix" — conteúdo, na parte de cima, ao centro (491,295,478,44)
- [botão] "Salvar" — conteúdo, na parte de cima, à direita (979,295,86,44)
- [botão] "Enviar logo" — conteúdo, no meio da tela, ao centro (684,464,116,40)
- [botão] "Enviar favicon" — conteúdo, no meio da tela, ao centro (555,625,125,38)
- [título] "Cidades do Portal" — conteúdo, no meio da tela, ao centro (545,746,254,26)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [campo] "Nome da cidade" — conteúdo, mais abaixo (rolando a página), ao centro (491,934,455,44)
- [botão] "Adicionar" — conteúdo, mais abaixo (rolando a página), à direita (956,934,109,44)
- [link] "Chamar no WhatsApp" — conteúdo, mais abaixo (rolando a página), à direita (848,1005,202,40)
- [título] "Pixels de rastreamento" — conteúdo, mais abaixo (rolando a página), ao centro (491,1136,574,26)
- [campo de texto longo] "Código do pixel" — conteúdo, mais abaixo (rolando a página), ao centro (491,1354,574,143)
- [botão] "Identificar pixel" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Código do pixel” (491,1516,147,44)
- [título] "Redes Sociais" — conteúdo, mais abaixo (rolando a página), ao centro (545,1638,520,26)
- [campo] "(27) 99999-9999" — conteúdo, mais abaixo (rolando a página), ao centro (576,1789,489,44)
- [campo] "Instagram" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “(27) 99999-9999” (491,1878,574,44)
- [campo] "Facebook" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Instagram” (491,1968,574,44)
- [campo] "YouTube" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Facebook” (491,2057,574,44)
- [campo] "TikTok" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “YouTube” (491,2147,574,44)
- [botão] "Salvar Redes Sociais" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “TikTok” (491,2215,197,44)
- [título] "Página Fale Conosco" — conteúdo, mais abaixo (rolando a página), ao centro (491,2341,574,26)
- [campo] "E-mail de contato" — conteúdo, mais abaixo (rolando a página), ao centro (491,2503,574,44)
- [campo] "Telefone" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “E-mail de contato” (491,2620,574,44)
- [campo] "Título da página" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Telefone” (491,2710,574,44)
- [campo de texto longo] "Texto da página" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Título da página” (491,2823,574,85)
- [botão] "Salvar Fale Conosco" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Texto da página” (491,2963,194,44)
- [título] "Aplicativo do portal" — conteúdo, mais abaixo (rolando a página), ao centro (491,3089,574,26)
- [checkbox] "Mostrar o aviso “Baixar app“Aparece no celular, no primeiro acesso de " — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Aplicativo do portal” (506,3182,20,20)
- [título] "Grupo de WhatsApp" — conteúdo, mais abaixo (rolando a página), ao centro (491,3334,574,26)
- [checkbox] "Exibir o convite no siteSó aparece se o link abaixo estiver preenchido" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Grupo de WhatsApp” (506,3426,20,20)
- [campo] "Link do grupo ou canal" — conteúdo, mais abaixo (rolando a página), ao centro (491,3542,574,44)
- [botão] "Salvar grupo de WhatsApp" — conteúdo, no fim da página, ao centro, logo abaixo de “Link do grupo ou canal” (491,3637,235,44)

## o que você vê
Dados básicos do portal: nome, logo, cidades, redes sociais, contato, aviso do app, grupo de WhatsApp e pixels. Cada cartão tem o seu botão de salvar.
- cartão `Identidade`: `Nome do portal` (botão `Salvar`), `Logo do portal` (`Enviar logo`/`Trocar logo` e `Remover`) e `Favicon` (o ícone pequeno que aparece na aba do navegador; `Enviar favicon`/`Trocar favicon` e `Remover`).
- cartão `Cidades do Portal`: cidades que aparecem como filtros no Guia Comercial. Aqui só dá para ver (o campo e o botão `Adicionar` ficam desligados); para incluir ou tirar cidade, use o botão `Chamar no WhatsApp` para falar com o time comercial.
- cartão `Redes Sociais`: `WhatsApp` (com DDD), `Instagram`, `Facebook`, `YouTube` e `TikTok` do portal, mostrados no site. Botão `Salvar Redes Sociais`.
- cartão `Página Fale Conosco`: o que o visitante vê na página de contato: `E-mail de contato`, `Telefone`, `Título da página` e `Texto da página`. O e-mail de contato também recebe as respostas dos e-mails que o portal manda aos clientes. Só aparece o que estiver preenchido. Botão `Salvar Fale Conosco`.
- cartão `Aplicativo do portal`: caixa `Mostrar o aviso "Baixar app"` liga ou desliga, na hora, o convite para instalar o app. Só aparece no celular, só no site, e quem tocar "Não quero" vê de novo em 30 dias. O ícone do app é a logo e o nome é o nome do portal.
- cartão `Grupo de WhatsApp`: caixa `Exibir o convite no site` mostra o convite para o grupo ou canal; só funciona com o `Link do grupo ou canal` preenchido. Botão `Salvar grupo de WhatsApp`.
- cartão `Pixels de rastreamento`: cole o código que a plataforma de anúncios ou estatísticas entregou e clique em `Identificar pixel`; a tela mostra o que reconheceu ("Identificamos:") e você confirma em `Salvar`. Só o número do pixel é guardado. `Remover` apaga um pixel salvo (pede confirmação).
